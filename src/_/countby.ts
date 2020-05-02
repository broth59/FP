import * as _ from '.'
import * as L from '../L'

interface countby {
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result): (
        iter: Iterable<Val>
    ) => Val extends Promise<any>
        ? Promise<Iterable<{ [index: string]: number }>>
        : Iterable<{ [index: string]: number }>
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (
        iter: Iterable<Val>
    ) => Val extends Promise<any>
        ? Promise<Iterable<{ [index: string]: number }>>
        : Iterable<{ [index: string]: number }>

    <Val, Result>(
        fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result,
        iter: Iterable<Val>
    ): Val extends Promise<any> ? Promise<Iterable<{ [index: string]: number }>> : Iterable<{ [index: string]: number }>
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Val extends Promise<any>
        ? Promise<Iterable<{ [index: string]: number }>>
        : Iterable<{ [index: string]: number }>
}

export const count = function (key: any, obj: any) {
    if (key) obj[key] = ++obj[key] || 1
    return obj
}
export const countby: countby = _.curry(function (fn, iter) {
    if (typeof fn == 'string') fn = _.get(fn)
    return _.reduce(
        function (grouped, val) {
            return count(fn(val), grouped)
        },
        {},
        iter
    )
})
