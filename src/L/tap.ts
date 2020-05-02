import * as _ from '../_'
import * as L from '../L'

interface tap {
    <Val>(fn: (val: Val, key?: number) => void): (iter: Iterable<Promise<Val> | Val>) => Iterable<Promise<Val> | Val>
    <Val>(fn: (val: Val, key?: number) => void, iter: Iterable<Promise<Val> | Val>): Iterable<Promise<Val> | Val>
}

export const tap: tap = _.curry(function* (fn: any, iter: any) {
    for (const [key, val] of L.each(iter)) {
        _.go1(val, fn)
        yield val
    }
})
