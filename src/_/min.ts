import * as _ from '../_'
import * as L from '../L'

interface min {
    <Val>(
        predicate: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => any
    ): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<DeepPromise<Val>> : Val
    <Val>(
        predicate: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => any,
        iter: Iterable<Val>
    ): Simul<Val> extends Promise<any> ? Promise<DeepPromise<Val>> : Val
}

export const min: min = _.curry(function (predicate, iter: any) {
    !predicate && (predicate = (acc: number, val: number) => acc < val)
    return _.reduce(function (acc: number, val: number) {
        return predicate(acc, val) ? acc : val
    }, iter) as any
})
