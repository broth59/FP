import * as L from '../L'
import * as _ from '../_'
import { nop } from '../symbol'

interface filter {
    <Val>(predi: (arg: Val) => any): (iter: Iterable<Val>) => Generator<Val>
    <Val>(predi: (arg: Iterable<Val>) => any, iter: Iterable<Val>): Generator<Val>
}

export const filter: filter = _.curry(function* (predicate, iter) {
    for (const [key, val] of L.each(iter)) {
        const judge = _.go1(val, predicate)
        if (judge instanceof Promise) {
            yield judge.then((c) => (c ? val : Promise.reject(nop)))
        } else if (predicate(val)) yield val
    }
}) as any
