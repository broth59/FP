import * as _ from '../_'
import * as L from '../L'

interface tap {
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, key?: number) => void): (
        iter: Iterable<Val>
    ) => Generator<Val>
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, key?: number) => void, iter: Iterable<Val>): Generator<Val>
}

export const tap: tap = _.curry(function* (fn: any, iter: any) {
    for (const [key, val] of L.each(iter)) {
        yield val instanceof Promise ? val.then((a) => (fn(a, key), val)) : (fn(val, key), val)
    }
})
