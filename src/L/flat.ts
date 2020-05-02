import { autobind } from 'core-decorators'
import * as _ from '../_'
import * as L from '../L'
import { nop, noop } from '../symbol'
import { KeyObject } from 'crypto'

function toIter<T extends Iterable<any>>(iter: T): T extends Iterable<infer R> ? IterableIterator<R> : any
function toIter<T extends IterableIterator<any>>(iter: T): T
function toIter<T extends Iterable<any> | IterableIterator<any>>(iter: T) {
    return iter && iter[Symbol.iterator] ? iter[Symbol.iterator]() : [][Symbol.iterator]()
}

function isString(literal:any): literal is string{
    return literal && !!literal.toLowerCase
}

type Deep<T extends Iterable<any>> = T extends Iterable<infer U> ? U : T

export function flat<Iter extends Iterable<any>, Val>(
    iter: Iter
): Deep<Iter> extends Promise<Iterable<infer R1>>
    ? R1 extends Promise<infer R2>
        ? Promise<Generator<R2>>
        : Promise<Generator<R1>>
    : Deep<Iter> extends Iterable<infer R1>
    ? R1 extends Promise<infer R2>
        ? Promise<Generator<R2>>
        : Generator<R1>
    : Generator<Deep<Deep<Iter>>>
// export function flat<Iter extends Iterable<any>>(
//     iter: Iter,
//     dept: number
// ): Iter extends Iterable<Promise<infer R> | infer R>
//     ? R extends Iterable<Promise<infer R1> | infer R1>
//         ? R1 extends Iterable<Promise<infer R2> | infer R2>
//             ? R2 extends Iterable<Promise<infer R3> | infer R3>
//                 ? R3 extends Iterable<Promise<infer R4> | infer R4>
//                     ? R4 extends Iterable<Promise<infer R5> | infer R5>
//                         ? Generator<R5>
//                         : Generator<R4>
//                     : Generator<R3>
//                 : Generator<R2>
//             : Generator<R1>
//         : Generator<R>
//     : Generator<any>
// export function flat<T extends Iterable<Iterable<any>>>(iter:T,depth:number) : Iterable<any>
// export function flat<T extends Iterable<Iterable<any>>>(iter: T, dept: number): Generator<any>
export function flat<T extends Iterable<any>>(iter: T, depth: number = 1): any {
    const iterStack = [toIter(iter)]
    return {
        next: function recurr(): any {
            const iter = _.last(iterStack)
            if (!iter) return { done: true }

            const cur = iter.next()
            if (cur.done) {
                iterStack.pop()
                return recurr()
            } else if (iterStack.length <= depth && cur.value[Symbol.iterator] && !isString(cur.value)) {
                iterStack.push(cur.value[Symbol.iterator]())
                return recurr()
            } else if (cur.value instanceof Promise) {
                return {
                    value: cur.value.then((val) => {
                        if ((iterStack.length > depth && !val[Symbol.iterator]) || isString(val)) return val
                        const iter = val[Symbol.iterator](),
                            cur = iter.next()
                        return cur.done ? Promise.reject(nop) : (iterStack.push(iter), cur.value)
                    }),
                    done: false,
                }
            } else {
                return cur
            }
        },
        [Symbol.iterator]() {
            return this
        },
    }
}
