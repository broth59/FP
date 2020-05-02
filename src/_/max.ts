import * as _ from '../_'
import * as L from '../L'

interface max {
    <Val>(
        predicate: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => any
    ): (iter: Iterable<Val>) => Val
    <Val>(
        predicate: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => any,
        iter: Iterable<Val>
    ): Val
}

export const max: max = _.curry(function (predicate, iter: any) {
    !predicate && (predicate = (acc: number, val: number) => acc > val)
    return _.reduce(function (acc: number, val: number) {
        return predicate(acc, val) ? acc : val
    }, iter)
})
