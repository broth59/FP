import * as _ from '../_'
import * as L from '../L'

interface forEach {
    <Val>(fn: (arg: Val) => void): (iter: Iterable<Promise<Val> | Val>) => void
    <Val>(fn: (arg: Val) => void, iter: Iterable<Promise<Val> | Val>): void
}

export const forEach: forEach = _.curry(function (f, iter) {
    for (const [key, val] of L.each(iter)) {
        if (val instanceof Promise) val.then((a) => f(a, key))
        else f(val, key)
    }
})
