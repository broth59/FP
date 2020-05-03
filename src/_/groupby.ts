import * as _ from '../_'
import * as L from '../L'

interface groupby {
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result): (
        iter: Iterable<Val>
    ) => Simul<Val> extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<DeepPromise<Val>> }>>
        : Iterable<{ [index: string]: Array<Val> }>
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (
        iter: Iterable<Val>
    ) => Simul<Val> extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<Val> }>>
        : Iterable<{ [index: string]: Array<Val> }>

    <Val, Result>(
        fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result,
        iter: Iterable<Val>
    ): Simul<Val> extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<DeepPromise<Val>> }>>
        : Iterable<{ [index: string]: Array<Val> }>
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Simul<
        Val
    > extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<DeepPromise<Val>> }>>
        : Iterable<{ [index: string]: Array<Val> }>
}

export const push = function (key: any, obj: any, val: any) {
    key ?? (obj[key] = obj[key] || []).push(val)
    return obj
}
export const groupby: groupby = _.curry(function (fn, iter) {
    if (typeof fn == 'string') fn = _.get(fn)
    return _.reduce(
        function (grouped, val) {
            return push(fn(val), grouped, val)
        },
        {},
        iter
    )
})
