import * as _ from '../_'
import * as L from '../L'

interface maxby {
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => any): (iter: Iterable<Val>) => Val
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => any, iter: Iterable<Val>): Val
}

export const maxby: maxby = _.curry(function (fn, iter) {
    return _.reduce(function (acc, val) {
        return fn(acc) > fn(val) ? acc : val
    }, iter)
})
