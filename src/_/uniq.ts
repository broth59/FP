import * as _ from '.'
import * as L from '../L'

interface uniq {
    <Val, Result>(fn: (val: Val extends Promise<infer R> ? R : Val) => Result): (
        iter: Iterable<Val>
    ) => Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (
        iter: Iterable<Val>
    ) => Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>

    <Val, Result>(
        fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result,
        iter: Iterable<Val>
    ): Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Simul<
        Val
    > extends Promise<any>
        ? Promise<Iterable<DeepPromise<Val>>>
        : Iterable<Val>
}

export const uniq: uniq = _.curry(function (fn, iter) {
    if (typeof fn == 'string') fn = _.get(fn)
    return _.reduce(
        function (distinct: any[], val: any) {
            if (!_.find((x) => fn(x) == fn(val), distinct)) distinct.push(val)
            return distinct
        },
        [],
        iter
    ) as any
})
