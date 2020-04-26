
import L from "./L"
import C from './C'
import { noop, nop } from "./symbol"

const log = console.log

const is_object = (obj:any) =>
    obj && typeof obj == 'object'  

type AnyFunction = (...args:any[])=>any
type Arg<T extends AnyFunction> = T extends (arg:infer R, ...args:any[])=>ReturnType<T> ? R : any
type Args<T extends AnyFunction> = T extends (arg:Arg<T>, ...args:infer R)=>any ? R : Array<any>

export namespace _{
    
    interface Curried<T extends AnyFunction>{
        (a:Arg<T>, ...bs:Args<T>): ReturnType<T>
        (a:Arg<T>): (...bs:Args<T>) => ReturnType<T>      
    }

    interface RCurried<T extends AnyFunction>{
        (a:Arg<T>, ...bs:Args<T>): ReturnType<T>
        (a:Arg<T>): (...bs:Args<T>) => ReturnType<T>      
    }

    export function curry<T extends AnyFunction>(f:T): Curried<T>{
        return (a:Arg<T>, ...bs:Args<T>) =>{
            return bs.length ? f(a, ...bs) : (...bs:Args<T>) => f(a, ...bs)
        }
    }

    export function rcurry<T extends (...args:any[])=>any>(f:T){
        return (a:any, b:any) =>
            b ? f(a,b) : (b) => f(b,a) 
    }

    export function keys (obj:Object) => 
        is_object(obj) ? Object.keys(obj) : []

    export const get =  _.curry(function (key, obj){
        const keys:string[] = key.split('.')
        return is_object(obj) ? keys.reduce((acc,key) => acc ? is_object(acc) ? acc[key] : undefined 
                                                             : is_object(obj) ? obj[key] : undefined, 0 )
                              : undefined 
    })

    export const nullable = _.curry(function (rep="", value){
        return !value ? rep : value
    })

    export const extends = _.curry(function (target, src){
        src = JSON.parse(JSON.stringify(src))
        return Object.assign(target, src)
    })

    export const negate = function(f){
        return function(...args){
            return !f(...args)
        }
    }


    export function go = (...fns) => _.reduce(_.go1, fns)

    export function go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a)

    export function go2 = (acc, a, f) =>
        a instanceof Promise ?
            a.then(a => {
                if(acc == noop && a == noop)return noop
                if(acc == noop) return a
                if(a == noop) return acc
                return f(acc,a)
            }, e => e == nop ? acc : Promise.reject(e)) : f(acc, a)

    export const pipe = (...fns) => iter => _.reduce(_.go1, iter, fns)


    export const range = function (start,stop){
        return _.go(L.range(start,stop),_.takeAll)
    }

    export const each = _.curry(function (f,iter){
        const res = []
        for(const [key,val] of L.each(iter)){
            if(val)res.push(f(val,key))
        }
        return res
    })
    
    export const forEach = _.curry(function (f,iter){
        for(const [key,val] of L.each(iter)) {
            if(val)f(val,key)
        }
    })
    
    export const map = _.curry(function (mapper, iter){
        return _.pipe(L.map(mapper), _.takeAll)(iter)
    })
    
    export const filter = _.curry(function (predicate, iter){
        return _.go(iter, L.filter(predicate), _.takeAll)
    })

    export const flat = function(iter){
        return _.pipe( L.flat, _.take(Infinity) )(iter)
    }
    
    export const take = _.curry(function (limit, iter){
        let res = []
        let init_count = 0
        iter = L.each(iter)
        iter.return = null
        return function recurr(){
            for(const [key,val] of iter){
                if(val instanceof Promise) {
                    return val.then(a => {
                        if([nop,noop].includes(a)) return res.length == limit ? res : recurr()
                        else return (res.push(a), res).length == limit ? res : recurr()
                    }).catch(e => [nop,noop].includes(e) ? recurr() : Promise.reject(e))
                }else{
                    res.push(val)
                    if( ++init_count == limit) return res
                }
            }
            return res
        }()
    }) 
    
    
    export const takeAll = _.take(Infinity)
    
    export const catchNoop = function *(iter){
        for(const [key,val] of L.each(iter)){
            if(val instanceof Promise) yield val.catch(e => e == nop ? noop : Promise.reject(e))
            else yield val
        }
    }
    
    export const head = iter => {
        iter = iter[Symbol.iterator] && iter[Symbol.iterator]() || iter
        return iter.next().value
    }
    
    export const reduce = _.curry(function (f, acc, iter){
        //if(!acc)  return _.reduce(_.head(acc=[...f]), acc)
        if(!iter) return _.reduce(f, _.head(iter = _.catchNoop(acc)[Symbol.iterator]()), iter)
        iter.return = null
        return _.go1(acc, function recurr(acc){
            for(const [key,val] of L.each(iter)){
                acc = _.go2(acc, val, f)
                if(acc instanceof Promise) return acc.then(recurr)
            }
            return acc
        })
        
    })
    
    export const join = _.curry(function(seperator,iter){
        if(arguments.length == 1){
            iter = seperator
            seperator = ""
        }
        return _.reduce((a,b)=>`${a}${seperator}${b}`)(iter)
    })
    
    export const takeWhile = _.curry(function (f, iter){
        iter = L.each(iter)
        iter.return = null
        let res = []
        return function recurr(){
            for( const [key,val] of iter){
                let b = _.go1(val, f)
                if(!b) return res
                if(b instanceof Promise){
                    return b.then(async c => c ? ( res.push( await val ),recurr() ) : res)
                            .catch(e => e == nop ? recurr() : Promise.reject(e))
                }else{
                    res.push(val)
                }
            }
            return res 
        }()
    })

    
    export const identity = function(val){
        return val
    }
              
    
    //find
    export const find = _.curry(function (predi, iter){
        return function recurr(){
            for(const [key,val] of L.each(iter)){
                if(val instanceof Promise) return val.then(val=> predi(val) ? val : recurr())
                if(predi(val)) return val 
            }
        }()
    })
    
    //find index
    export const find_index = _.curry(function (predi, iter){
        let count = -1
        return function recurr(){
            for(const [key,val] of L.each(iter)){
                count++    
                if(val instanceof Promise) return val.then(val=> predi(val) ? val : recurr())
                if(predi(val)) return count ++
            }
            return -1   
        }()
    })
    
    //some
    export const some = _.curry(function (predi, iter){
        return !!_.find(predi, iter)
    })
    
    //every
    export const every = _.curry(function (predi, iter){
        return _.find_index(_.negate(predi), iter) == -1
    })
    
    //contain
    export const contains = _.curry(function (val, iter){
        return _.find(x=> x == val)(iter)
    })
    
    
    //4.접기 => reduce
    
    //min, max, min_by, max_by
    export const min = _.curry(function(iter){
        return _.reduce(function(a,b){
            return a < b ? a : b
        }, iter)
    })
    
    export const max = _.curry(function(iter){
        return _.reduce(function(a,b){
            return a > b ? a : b
        }, iter)
    }) 
    
    export const minby = _.curry(function(f, iter){
        return _.reduce(function(a,b){
            return f(a) < f(b) ? a : b
        }, iter)
    })
    
    
    //group_by, min_by
    export const push = function(key, obj, val){
        if(key)(obj[key] = obj[key] || []).push(val)
        return obj
    }
    
    export const groupby = _.curry(function(f,iter){
        if(typeof f == "string") f = _.get(f)
        return _.reduce(function(grouped, val){
            return _.push(f(val), grouped, val)            
        }, {}, iter)
    })
    
    export const count = function(key, obj){
        if(key)obj[key] = ++obj[key] || 1
        return obj
    }
    
    export const countby = _.curry(function(f,iter){
        if(typeof f == "string") f = _.get(f)
        return _.reduce(function(grouped, val){
            return _.count(f(val), grouped)     
        }, {}, iter)
    })
    
    export const indexby = _.curry(function(index:string, iter){
        return _.reduce((indexed,val)=>{
            const id = _.get(index,val) 
            if(!_.get(id, indexed)) indexed[id] = val 
            return indexed                     
        }, {}, iter) 
    })
    
    //unqiue
    export const uniq = _.curry(function(f,iter){
        return _.reduce(function(distinct, val){
            if(!_.find(x=>f(x)==f(val), distinct))distinct.push(val)
            return distinct            
        }, [], iter)
    })

}