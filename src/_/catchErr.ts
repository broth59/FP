import { nop, noop } from '../symbol'
import * as L from '../L'
import * as _ from '../_'

interface catchErr {
    <Val>(fn?: (e: Error, async?: Val) => Val extends Promise<infer R> ? void | R | Promise<R> : never): (
        iter: Iterable<Val>
    ) => Generator<Val>
    <Val>(
        fn: (e: Error, async?: Val) => Val extends Promise<infer R> ? void | R | Promise<R> : never,
        iter: Iterable<Val>
    ): Generator<Val>
}

export const catchErr: catchErr = _.curry(function <Val>(fn: AnyFunction, iter: Iterable<Val>): any {
    !fn && (fn = () => undefined)
    const res = []
    for (const [key, val] of L.each(iter)) {
        if (val instanceof Promise) res.push(val.catch((e) => (e == nop ? noop : fn(e, val) ?? noop)))
        else res.push(val)
    }
    return res
})
