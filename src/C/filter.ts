import * as L from '../L'
import * as _ from '../_'
import * as C from '../C'
import { nop } from '../symbol'

interface filter {
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any): (iter: Iterable<Val>) => Promise<Iterable<Val>>
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Promise<Iterable<Val>>
}

export const filter: filter = _.curry(function (predicate, iter) {
    const pool = []
    for (const [key, val] of L.each(iter)) {
        const judge = _.go1(val, predicate)
        if (judge instanceof Promise) {
            pool.push(val.then((val: any) => (predicate(val, key) ? val : Promise.reject(nop))))
        } else {
            pool.push(new Promise((res, err) => (predicate(val, key) ? res(val) : err(nop))))
        }
    }
    return C.takeAll(pool) as any
})
