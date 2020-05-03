import { nop, noop } from '../symbol'
import * as L from '../L'

interface catchNoop {
    <Val>(iter: Iterable<Val>): Generator<Val>
}

export const catchNoop: catchNoop = function <Val>(iter: Iterable<Val>): any {
    const res = []
    for (const [key, val] of L.each(iter)) {
        if (val instanceof Promise) res.push(val.catch((e) => (e == nop ? noop : Promise.reject(e))))
        else res.push(val)
    }
    return res
}
