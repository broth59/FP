import * as _ from '../_'
import * as L from '../L'
import { nop, noop } from '../symbol'

interface tap {
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, key?: number) => void): (
        iter: Iterable<Val>
    ) => Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, key?: number) => void, iter: Iterable<Val>): Iterable<Val>
}

export const tap: tap = _.curry(function tab(fn, iter) {
    const res: any[] = []
    iter = L.each(iter)
    iter.return = null
    return (function recurr(): any {
        for (const [key, val] of iter) {
            if (val instanceof Promise) {
                return val
                    .then((a) => {
                        if ([nop, noop].includes(a)) return recurr()
                        else return res.push(fn(a, key)), recurr()
                    })
                    .catch((e) => ([nop, noop].includes(e) ? recurr() : Promise.reject(e)))
            } else {
                res.push(fn(val, key))
            }
            return res
        }
    })()
})
