
import {_} from "../index"
import {nop, noop} from "./symbol"
import { AnyFunction } from "./type/Operator"

const log = console.log
log(_.negate)
// const last = (iter)=>
//     iter[iter.length-1]

// const toIter = function (iter){
//     return iter && iter[Symbol.iterator] ? iter[Symbol.iterator]() : [][Symbol.iterator]();
// }

function isIter(iter:Iterable<any>|Object):iter is Iterable<any>{
    return (iter as Iterable<any>)[Symbol.iterator] !== undefined
}

function isObject(iter:any):iter is Object{
    return typeof iter === "object" ? true : false
}
export namespace L{

    export const range = function *(start:number,stop?:number){
        const origin = start
        stop = stop || ( start = 0, origin )
        for(let i=start; i<stop; i++){
            yield i
        }
    }

    export const each = function<T extends Object|Iterable<any>, Key extends keyof T>(iter:T)
        :T extends Iterable<infer Yield> ? Generator<Array<[number,Yield]>,any,unknown>:Array<[Key,T[Key]]>{
        return isIter(iter) ?
            (function *(){
                let index:number = 0
                for(const val of iter){
                    yield [index++, val]
                }
            })()
            :(function(){
                const keys = _.keys(iter)
                const res = []
                for(const key of keys){
                    res.push([key, iter[key]])
                }
                return res
            })() as any
        }


    interface map{
        <Val,Result>(mapper:(val:Val, idx?:number) => Result) : (iter:Iterable<Val>)=>Iterable<Result>
        <Val,Result>(mapper:(val:Val, idx?:number) => Result, iter:Iterable<Val>) : Iterable<Result>
    }
    export const map:map = _.curry(function *(mapper:any, iter:any){
        for(const [key,val] of L.each(iter)){
            yield _.go1(val, (val:any)=>mapper(val, key))
        }
    })
    
    // //identity
    // export const identity = function(iter){
    //     return iter
    // }

    // //value
    // export const values = function(iter){
    //     return L.map(L.identity)(iter) 
    // }

    // //pluck
    // export const pluck = _.curry(function (key, iter){
    //     return L.map(val=>_.get(key,val))(iter);
    // })
    // export const deepPluck = _.curry(function (key, iter){
    //     const gets = _.reduce((keys,key)=>{
    //         keys.push(_.get(key))
    //         return keys
    //     }, new Array(), key.split('.'))
    //     return  _.go(L.map(val=>
    //                     _.reduce((plucked,get)=>{
    //                         if(plucked && plucked[Symbol.iterator]){                       
    //                             return _.go(_.map(item=>get(item), plucked),
    //                                             _.flat)
    //                         }else{
    //                             return get(plucked)
    //                         }}, val, gets)) (iter),
    //                 L.flat)
    // })

    // //2.거르기 => filter
    // export const filter = _.curry(function *(predicate, iter){
    //     for(const [key,val] of L.each(iter)){
    //         const judge = _.go1(val, predicate)
    //         if(judge instanceof Promise) {
    //             yield judge.then(c => c ? val : Promise.reject(nop))
    //         }else if(predicate(val)) yield val
    //     }
    // })

    // //reject
    // export const reject = function(predi, iter) {
    //     return L.filter(_.negate(predi))(iter)
    // } 

    // //compact
    // export const compact = L.filter(L.identity)

    // //where
    // export const where = _.curry(function (attr, iter){
    //     return  L.filter(val=>
    //         _.every(key=> _.get(key,val) == attr[key], _.keys(attr)))(iter) 
    // })

    // export const flat = function (iter, depth:number = 1){
    //     const iterStack = [toIter(iter)]
    //     return {
    //         next: function recurr(){
    //             const iter = last(iterStack)
    //             if(!iter) return { done:true }
    //             const cur = iter.next()
    //             if(cur.done){
    //                 iterStack.pop()
    //                 return recurr()
    //             }else if(iterStack.length <= depth && cur.value[Symbol.iterator] && typeof cur != "string"){
    //                 iterStack.push(cur.value[Symbol.iterator]())
    //                 return recurr()
    //             }else if(cur.value instanceof Promise){
    //                 return {
    //                     value: cur.value.then(val=>{
    //                         if(iterStack.length <= depth && !val[Symbol.iterator] || typeof val == "string") return val
    //                         const iter = val[Symbol.iterator](), cur = iter.next()
    //                         return cur.done ? Promise.reject(nop) : (iterStack.push(iter), cur.value)
    //                     }),
    //                     done: false
    //                 }
    //             }else{
    //                 return cur
    //             }
    //         },
    //         [Symbol.iterator](){ return this }
    //     }
    // }
        
}

