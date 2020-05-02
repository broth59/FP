import * as L from '../L'
import * as _ from '../_'

interface pluck {
    <Val>(key: Val extends Promise<infer R> ? keyof R : keyof Val): (
        iter: Iterable<Val>
    ) => Generator<Val extends Promise<infer R> ? R[keyof R] : Val[keyof Val]>
    <Val>(key: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Generator<
        Val extends Promise<infer R> ? R[keyof R] : Val[keyof Val]
    >
}

export const pluck: pluck = _.curry(function (key, iter) {
    return L.map((val) => _.get(key, val as Object))(iter)
})
