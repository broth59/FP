import * as _ from '.'
import * as L from '../L'

interface uniq {
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result): (
        iter: Iterable<Val>
    ) => Val extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<Val> }>>
        : Iterable<{ [index: string]: Array<Val> }>
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (
        iter: Iterable<Val>
    ) => Val extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<Val> }>>
        : Iterable<{ [index: string]: Array<Val> }>

    <Val, Result>(
        fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result,
        iter: Iterable<Val>
    ): Val extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<Val> }>>
        : Iterable<{ [index: string]: Array<Val> }>
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Val extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<Val> }>>
        : Iterable<{ [index: string]: Array<Val> }>
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
    )
})
