import { L } from './L'
import { noop, nop } from './symbol'
import { AnyFunction, Arg, Args, RestArgs, BinaryOperator } from './type/Operator'
import {} from 'rxjs'

const log = console.log

declare interface Object {
    [index: string]: any
}

type AnyFunction = (...args: any[]) => any
type Arg<T extends AnyFunction> = T extends (arg: infer R, ...args: any[]) => ReturnType<T> ? R : any
type Args<T extends AnyFunction> = T extends (arg: Arg<T>, ...args: infer R) => any ? R : Array<any>

export namespace _ {
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
