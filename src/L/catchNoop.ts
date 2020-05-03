import { nop, noop } from '../symbol'
import * as L from '.'

interface catchNoop{
    <Val>(iter: Iterable<Val>):Generator<Val>
}

export const catchNoop:catchNoop = function* <Val>(iter: Iterable<Val>):any {
    for (const [key, val] of L.each(iter)) {
        if (val instanceof Promise) yield val.catch((e) => (e == nop ? noop : Promise.reject(e)))
        else yield val
    }
}
