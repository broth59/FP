import * as _ from '../_'
import * as L from '../L'

interface minby {
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => any): (
        iter: Iterable<Val>
    ) => Simul<Val> extends Promise<any> ? Promise<DeepPromise<Val>> : Val
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => any, iter: Iterable<Val>): Simul<
        Val
    > extends Promise<any>
        ? Promise<DeepPromise<Val>>
        : Val
}

export const minby: minby = _.curry(function (fn, iter) {
    return _.reduce(function (acc, val) {
        return fn(acc) < fn(val) ? acc : val
    }, iter)
})
