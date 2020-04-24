
import L from "./L"
import C from './C'
import { noop, nop } from "./symbol"

const log = console.log

const is_object = (obj:any) =>
    obj && typeof obj == 'object'  


export default class _{
    
    static curry(f:Function) {
        return (a:any, ...bs:any[]) =>
            bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs)
    }

    static rcurry(f:Function){
        return (a:any, b:any) =>
            b ? f(a,b) : (b) => f(b,a) 
    }

    static keys = (obj:Object) => 
        is_object(obj) ? Object.keys(obj) : []

    static get =  _.curry(function (key, obj){
        const keys:string[] = key.split('.')
        return is_object(obj) ? keys.reduce((acc,key) => acc ? is_object(acc) ? acc[key] : undefined 
                                                             : is_object(obj) ? obj[key] : undefined, 0 )
                              : undefined 
    })

    static nullable = _.curry(function (rep="", value){
        return !value ? rep : value
    })

    static extends = _.curry(function (target, src){
        src = JSON.parse(JSON.stringify(src))
        return Object.assign(target, src)
    })

    static negate = function(f){
        return function(...args){
            return !f(...args)
        }
    }


    static go = (...fns) => _.reduce(_.go1, fns)

    static go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a)

    static go2 = (acc, a, f) =>
        a instanceof Promise ?
            a.then(a => {
                if(acc == noop && a == noop)return noop
                if(acc == noop) return a
                if(a == noop) return acc
                return f(acc,a)
            }, e => e == nop ? acc : Promise.reject(e)) : f(acc, a)

    static pipe = (...fns) => iter => _.reduce(_.go1, iter, fns)


    static range = function (start,stop){
        return _.go(L.range(start,stop),_.takeAll)
    }

    static each = _.curry(function (f,iter){
        const res = []
        for(const [key,val] of L.each(iter)){
            if(val)res.push(f(val,key))
        }
        return res
    })
    
    static forEach = _.curry(function (f,iter){
        for(const [key,val] of L.each(iter)) {
            if(val)f(val,key)
        }
    })
    
    static map = _.curry(function (mapper, iter){
        return _.pipe(L.map(mapper), _.takeAll)(iter)
    })
    
    static filter = _.curry(function (predicate, iter){
        return _.go(iter, L.filter(predicate), _.takeAll)
    })

    static flat = function(iter){
        return _.pipe( L.flat, _.take(Infinity) )(iter)
    }
    
    static take = _.curry(function (limit, iter){
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
    
    
    static takeAll = _.take(Infinity)
    
    static catchNoop = function *(iter){
        for(const [key,val] of L.each(iter)){
            if(val instanceof Promise) yield val.catch(e => e == nop ? noop : Promise.reject(e))
            else yield val
        }
    }
    
    static head = iter => {
        iter = iter[Symbol.iterator] && iter[Symbol.iterator]() || iter
        return iter.next().value
    }
    
    static reduce = _.curry(function (f, acc, iter){
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
    
    static join = _.curry(function(seperator,iter){
        if(arguments.length == 1){
            iter = seperator
            seperator = ""
        }
        return _.reduce((a,b)=>`${a}${seperator}${b}`)(iter)
    })
    
    static takeWhile = _.curry(function (f, iter){
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

    
    static identity = function(val){
        return val
    }
              
    
    //find
    static find = _.curry(function (predi, iter){
        return function recurr(){
            for(const [key,val] of L.each(iter)){
                if(val instanceof Promise) return val.then(val=> predi(val) ? val : recurr())
                if(predi(val)) return val 
            }
        }()
    })
    
    //find index
    static find_index = _.curry(function (predi, iter){
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
    static some = _.curry(function (predi, iter){
        return !!_.find(predi, iter)
    })
    
    //every
    static every = _.curry(function (predi, iter){
        return _.find_index(_.negate(predi), iter) == -1
    })
    
    //contain
    static contains = _.curry(function (val, iter){
        return _.find(x=> x == val)(iter)
    })
    
    
    //4.접기 => reduce
    
    //min, max, min_by, max_by
    static min = _.curry(function(iter){
        return _.reduce(function(a,b){
            return a < b ? a : b
        }, iter)
    })
    
    static max = _.curry(function(iter){
        return _.reduce(function(a,b){
            return a > b ? a : b
        }, iter)
    }) 
    
    static minby = _.curry(function(f, iter){
        return _.reduce(function(a,b){
            return f(a) < f(b) ? a : b
        }, iter)
    })
    
    
    //group_by, min_by
    static push = function(key, obj, val){
        if(key)(obj[key] = obj[key] || []).push(val)
        return obj
    }
    
    static groupby = _.curry(function(f,iter){
        if(typeof f == "string") f = _.get(f)
        return _.reduce(function(grouped, val){
            return _.push(f(val), grouped, val)            
        }, {}, iter)
    })
    
    static count = function(key, obj){
        if(key)obj[key] = ++obj[key] || 1
        return obj
    }
    
    static countby = _.curry(function(f,iter){
        if(typeof f == "string") f = _.get(f)
        return _.reduce(function(grouped, val){
            return _.count(f(val), grouped)     
        }, {}, iter)
    })
    
    static indexby = _.curry(function(index:string, iter){
        return _.reduce((indexed,val)=>{
            const id = _.get(index,val) 
            if(!_.get(id, indexed)) indexed[id] = val 
            return indexed                     
        }, {}, iter) 
    })
    
    //unqiue
    static uniq = _.curry(function(f,iter){
        return _.reduce(function(distinct, val){
            if(!_.find(x=>f(x)==f(val), distinct))distinct.push(val)
            return distinct            
        }, [], iter)
    })

}