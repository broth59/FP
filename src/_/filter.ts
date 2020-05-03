import * as L from '../L'
import * as _ from '../_'

interface filter {
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any): (
        iter: Iterable<Val>
    ) => Iterable<Val extends Promise<any> ? Promise<Val> : Val>
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Iterable<
        Val extends Promise<any> ? Promise<Val> : Val
    >
}

export const filter: filter = _.curry(function (predicate, iter) {
    return _.go(iter, L.filter(predicate), _.takeAll) as any
})
