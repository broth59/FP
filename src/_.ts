
import {L} from "./L"
import { noop, nop } from "./symbol"
import { AnyFunction, Arg, Args, RestArgs, BinaryOperator } from "./type/Operator"
import { reduce } from "rxjs/operators"
import { pipe } from "rxjs"

const b = pipe(
    (x:string)=>x+"sdf",
    (x)=>x.toLowerCase())

b("source")

const log = console.log

declare interface Object{
    [index:string]:any
}


export namespace _{
    
    interface Curried<T extends AnyFunction>{
        (a:Arg<T>, ...bs:RestArgs<T>): ReturnType<T>
        (a:Arg<T>): (...bs:RestArgs<T>) => ReturnType<T>      
    }

    interface CurriedR<T extends BinaryOperator>{
        (a:arg2<T>, b:arg1<T>): ReturnType<T>
        (a:arg2<T>): (bs:arg1<T>) => ReturnType<T>      
    }

    type arg1<T extends BinaryOperator> = T extends (a:infer R, b:any)=>any ? R : any 
    type arg2<T extends BinaryOperator> = T extends (a:any, b:infer R)=>any ? R : any 

    export function curryD<T extends (...args:any[])=>any>(fn:T, arg_length?:number){
        arg_length || ( arg_length = fn.length )
        return function(...bs:any[]){
            const args = arguments
            arg_length! -= bs.length 
            return arg_length == 0 ? fn(...bs) : curryD((...bs:any[]) => fn(...args, ...bs), arg_length)
        }
    }

    export function curry<T extends AnyFunction>(fn:T):Curried<T>{
        return function(a:Arg<T>, ...bs:RestArgs<T>){
            return bs.length ? fn(a,...bs) : (...bs:RestArgs<T>)=>fn(a,...bs) 
        }
    }

    export function curryr<T extends BinaryOperator>(fn:T):CurriedR<T>{
        type arg1 = T extends (a:infer R, b:any)=>any ? R : any 
        type arg2 = T extends (a:any, b:infer R)=>any ? R : any 
        return function(arg2:arg2, arg1?:arg1){
            return arg2 ? fn(arg1, arg2) : (arg1:arg1)=>fn(arg1,arg2)
        }
    }

    export function head<T extends Iterable<any>>(iter:T){
        return iter[Symbol.iterator]().next().value
    }

    export function keys<T extends Object, Key extends keyof T>(obj:T){
        const keys:Array<Key> = []
        for(const key of Object.keys(obj)){
            keys.push(key as Key)
        }
        return keys
    }


    export const get =  _.curry(function get<T extends Object>(key:string, obj:T):any{
        const keys:string[] = key.split('.')
        const first = keys.shift() 
        return keys.reduce((acc,key)=>{
            if(acc instanceof Object) return acc[key]
            else return acc 
        },obj[first!]) 
    })

    export function extend<Target>(target:Target) : <Source>(src:Source) => Target & Source;
    export function extend<Target,Source>(target:Target, src:Source) : Target & Source;
    export function extend<Target,Source>(target:Target, src?:Source){
        target = JSON.parse(JSON.stringify(target))
        return src ? Object.assign(target,src) : (src:Source)=>{
            src = JSON.parse(JSON.stringify(src))
            return Object.assign(target,src)
        }
    }
    
    export const negate = function<T extends AnyFunction>(fn:T){
        type arg = T extends (...args:infer R)=>any ? R : any
        return function(...args:arg){
            return !fn(...args)
        }
    }


    // export function go = (...fns:Array<AnyFunction>) => _.reduce(_.go1, fns)
    function isPromise(value:any):value is Promise<any>{{
        return value instanceof Promise ? true : false
    }}
    
    export function go1<T, K>(a:T, fn:T extends Promise<infer Val> ? (val:Val)=>K : (val:T)=>K):
        T extends Promise<any>? Promise<K>: K {
        return isPromise(a) ? a.then(fn) : fn(a) as any
    }

    export function go2<Acc, Val, Fn, Result>(acc:Acc, a:Val, 
        fn:Acc extends Promise<infer R> ? (acc:R,val:Val)=>Result : (acc:Acc,val:Val)=>Result){
        return a instanceof Promise ?
            a.then(a => {
                if (acc instanceof Symbol){
                    if(acc == noop && a == nop)return noop
                    if(acc == noop) return a
                    if(a == noop) return acc
                }
                return fn(acc,a)
            }, e => e == nop ? acc : Promise.reject(e)) : fn(acc, a)
    }

    // export const pipe = (...fns) => iter => _.reduce(_.go1, iter, fns)


    // export const range = function (start,stop){
    //     return _.go(L.range(start,stop),_.takeAll)
    // }

    // export const each = _.curry(function (f,iter){
    //     const res = []
    //     for(const [key,val] of L.each(iter)){
    //         if(val)res.push(f(val,key))
    //     }
    //     return res
    // })
    
    // export const forEach = _.curry(function (f,iter){
    //     for(const [key,val] of L.each(iter)) {
    //         if(val)f(val,key)
    //     }
    // })
    
    // export const map = _.curry(function (mapper, iter){
    //     return _.pipe(L.map(mapper), _.takeAll)(iter)
    // })
    
    // export const filter = _.curry(function (predicate, iter){
    //     return _.go(iter, L.filter(predicate), _.takeAll)
    // })

    // export const flat = function(iter){
    //     return _.pipe( L.flat, _.take(Infinity) )(iter)
    // }
    
    // export const take = _.curry(function (limit, iter){
    //     let res = []
    //     let init_count = 0
    //     iter = L.each(iter)
    //     iter.return = null
    //     return function recurr(){
    //         for(const [key,val] of iter){
    //             if(val instanceof Promise) {
    //                 return val.then(a => {
    //                     if([nop,noop].includes(a)) return res.length == limit ? res : recurr()
    //                     else return (res.push(a), res).length == limit ? res : recurr()
    //                 }).catch(e => [nop,noop].includes(e) ? recurr() : Promise.reject(e))
    //             }else{
    //                 res.push(val)
    //                 if( ++init_count == limit) return res
    //             }
    //         }
    //         return res
    //     }()
    // }) 
    
    
    // export const takeAll = _.take(Infinity)
    
    export const catchNoop = function *<T extends Iterable<any>>(iter:T){
        for(const [key,val] of L.each(iter)){
            if(val instanceof Promise) yield val.catch(e => e == nop ? noop : Promise.reject(e))
            else yield val
        }
    }
    
    // export const head = iter => {
    //     iter = iter[Symbol.iterator] && iter[Symbol.iterator]() || iter
    //     return iter.next().value
    // }
    
    export const reduce = _.curry(function reduce<Fn,Result,Acc, Iter extends Iterable<any>>(
        fn: Iter extends Iterable<infer Yield> ? 
                Acc extends Promise<infer Val> ? (acc:Val,val:Yield)=>Result : (acc:Acc,val:Yield)=>Result  
                : (acc:Acc,val:any)=>Result, acc:Iter extends undefined ? , iter?:Iter){
        //if(!acc)  return _.reduce(_.head(acc=[...f]), acc)
        if(!iter) return _.reduce(fn, _.head(iter = _.catchNoop(acc)[Symbol.iterator]()), iter)
        (iter as any).return = null
        return _.go1(acc, function recurr(acc){
            for(const [key,val] of L.each(iter)){
                acc = _.go2(acc, val, f)
                if(acc instanceof Promise) return acc.then(recurr)
            }
            return acc
        })
        
    })
    
    // export const join = _.curry(function(seperator,iter){
    //     if(arguments.length == 1){
    //         iter = seperator
    //         seperator = ""
    //     }
    //     return _.reduce((a,b)=>`${a}${seperator}${b}`)(iter)
    // })
    
    // export const takeWhile = _.curry(function (f, iter){
    //     iter = L.each(iter)
    //     iter.return = null
    //     let res = []
    //     return function recurr(){
    //         for( const [key,val] of iter){
    //             let b = _.go1(val, f)
    //             if(!b) return res
    //             if(b instanceof Promise){
    //                 return b.then(async c => c ? ( res.push( await val ),recurr() ) : res)
    //                         .catch(e => e == nop ? recurr() : Promise.reject(e))
    //             }else{
    //                 res.push(val)
    //             }
    //         }
    //         return res 
    //     }()
    // })

    
    // export const identity = function(val){
    //     return val
    // }
              
    
    // //find
    // export const find = _.curry(function (predi, iter){
    //     return function recurr(){
    //         for(const [key,val] of L.each(iter)){
    //             if(val instanceof Promise) return val.then(val=> predi(val) ? val : recurr())
    //             if(predi(val)) return val 
    //         }
    //     }()
    // })
    
    // //find index
    // export const find_index = _.curry(function (predi, iter){
    //     let count = -1
    //     return function recurr(){
    //         for(const [key,val] of L.each(iter)){
    //             count++    
    //             if(val instanceof Promise) return val.then(val=> predi(val) ? val : recurr())
    //             if(predi(val)) return count ++
    //         }
    //         return -1   
    //     }()
    // })
    
    // //some
    // export const some = _.curry(function (predi, iter){
    //     return !!_.find(predi, iter)
    // })
    
    // //every
    // export const every = _.curry(function (predi, iter){
    //     return _.find_index(_.negate(predi), iter) == -1
    // })
    
    // //contain
    // export const contains = _.curry(function (val, iter){
    //     return _.find(x=> x == val)(iter)
    // })
    
    
    // //4.접기 => reduce
    
    // //min, max, min_by, max_by
    // export const min = _.curry(function(iter){
    //     return _.reduce(function(a,b){
    //         return a < b ? a : b
    //     }, iter)
    // })
    
    // export const max = _.curry(function(iter){
    //     return _.reduce(function(a,b){
    //         return a > b ? a : b
    //     }, iter)
    // }) 
    
    // export const minby = _.curry(function(f, iter){
    //     return _.reduce(function(a,b){
    //         return f(a) < f(b) ? a : b
    //     }, iter)
    // })
    
    
    // //group_by, min_by
    // export const push = function(key, obj, val){
    //     if(key)(obj[key] = obj[key] || []).push(val)
    //     return obj
    // }
    
    // export const groupby = _.curry(function(f,iter){
    //     if(typeof f == "string") f = _.get(f)
    //     return _.reduce(function(grouped, val){
    //         return _.push(f(val), grouped, val)            
    //     }, {}, iter)
    // })
    
    // export const count = function(key, obj){
    //     if(key)obj[key] = ++obj[key] || 1
    //     return obj
    // }
    
    // export const countby = _.curry(function(f,iter){
    //     if(typeof f == "string") f = _.get(f)
    //     return _.reduce(function(grouped, val){
    //         return _.count(f(val), grouped)     
    //     }, {}, iter)
    // })
    
    // export const indexby = _.curry(function(index:string, iter){
    //     return _.reduce((indexed,val)=>{
    //         const id = _.get(index,val) 
    //         if(!_.get(id, indexed)) indexed[id] = val 
    //         return indexed                     
    //     }, {}, iter) 
    // })
    
    // //unqiue
    // export const uniq = _.curry(function(f,iter){
    //     return _.reduce(function(distinct, val){
    //         if(!_.find(x=>f(x)==f(val), distinct))distinct.push(val)
    //         return distinct            
    //     }, [], iter)
    // })

}