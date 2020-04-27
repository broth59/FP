import * as _ from "../_"
import * as L from "../L"
import {nop, noop} from "../symbol"
import { KeyObject } from "crypto";

function toIter<T extends Iterable<any>>(iter:T):T extends Iterable<infer R> ? IterableIterator<R> : any
function toIter<T extends IterableIterator<any>>(iter:T): T
function toIter<T extends Iterable<any> | IterableIterator<any>>(iter:T){
    return iter && iter[Symbol.iterator] ? iter[Symbol.iterator]() : [][Symbol.iterator]();
}


export function flat<T extends Iterable<Iterable<any>>>(iter:T) : T extends Iterable<infer R> ? R :Generator<any>
export function flat<T extends Iterable<Iterable<any>>>(iter:T, dept:number) 
    : T extends Iterable<infer R> 
        ? R extends Iterable <infer R1> 
            ? R1 extends Iterable <infer R2>
                ? R2 extends Iterable <infer R3>
                    ? R3 extends Iterable <infer R4> ? 
        R4 extends Iterable<infer Y> ? Generator<Y> : Generator<any>
            : R3 extends Iterable<infer Y1> ? Generator<Y1> : Generator<any>
                : R2 extends Iterable<infer Y2> ? Generator<Y2> : Generator<any>
                    : R1 extends Iterable<infer Y3> ? Generator<Y3> : Generator<any>
                        : R extends Iterable<infer Y4> ? Generator<Y4> : Generator<any>
    : Generator<any>
// export function flat<T extends Iterable<Iterable<any>>>(iter:T,depth:number) : Iterable<any>
export function flat<T extends Iterable<any>>(iter:T, depth:number = 1){
    const iterStack = [toIter(iter)]
    return {
        next: function recurr():any{
            const iter = _.last(iterStack)
            if(!iter) return { done:true }
            const cur = iter.next()
            if(cur.done){
                iterStack.pop()
                return recurr()
            }else if(iterStack.length <= depth && cur.value[Symbol.iterator] && typeof cur != "string"){
                iterStack.push(cur.value[Symbol.iterator]())
                return recurr()
            }else if(cur.value instanceof Promise){
                return {
                    value: cur.value.then(val=>{
                        if(iterStack.length <= depth && !val[Symbol.iterator] || typeof val == "string") return val
                        const iter = val[Symbol.iterator](), cur = iter.next()
                        return cur.done ? Promise.reject(nop) : (iterStack.push(iter), cur.value)
                    }),
                    done: false
                }
            }else{
                return cur
            }
        },
        [Symbol.iterator](){ return this }
    }
}


const b = flat([[[[1,2,3]]]])
