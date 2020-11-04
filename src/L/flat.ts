import * as _ from '../_'
import * as L from '../L'
import { isIterator } from '../is'
import { nop, noop } from '../symbol'


function toIter<T extends Iterable<any>>(iter: T): T extends Iterable<infer R> ? IterableIterator<R> : any
function toIter<T extends IterableIterator<any>>(iter: T): T
function toIter<T extends Iterable<any> | IterableIterator<any>>(iter: T) {
    return iter && iter[Symbol.iterator] ? iter[Symbol.iterator]() : [][Symbol.iterator]()
}

function isString(literal: any): literal is string {
    return literal && !!literal.toLowerCase
}

type Deep<T extends Iterable<any>> = T extends Iterable<infer U> ? U : T

export function flat<Iter extends Iterable<any>, Val>(
    iter: Iter
): Deep<Iter> extends Promise<Iterable<infer R1>>
    ? Simul<R1> extends Promise<any>
        ? Promise<Generator<DeepPromise<R1>>>
        : Promise<Generator<R1>>
    : Deep<Iter> extends Iterable<infer R1>
    ? Simul<R1> extends Promise<any>
        ? Promise<Generator<DeepPromise<R1>>>
        : Generator<R1>
    : Generator<Deep<Deep<Iter>>>

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
            } else if (cur.value && iterStack.length <= depth && cur.value[Symbol.iterator] && !isString(cur.value)) {
                iterStack.push(cur.value[Symbol.iterator]())
                return recurr()
            } else if (cur.value && cur.value instanceof Promise) {
                return {
                    value: cur.value.then((val) => {
                        if ((val && iterStack.length > depth && !val[Symbol.iterator]) || isString(val)) return val
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

