import * as _ from '../_'
import * as L from '../L'
import { isPromise } from '../is'

// interface contains {
//     <Val>(val: Val extends Promise<infer R> ? R : Val): (
//         iter: Iterable<Val>
//     ) => Val extends Promise<any> ? Promise<boolean> : boolean
//     <Val>(val: Val extends Promise<infer R> ? R : Val, iter: Iterable<Val>): Val extends Promise<any>
//         ? Promise<boolean>
//         : boolean
// }
interface contains {
    <Val, Fix extends Val extends Promise<infer R> ? R : Val>(val: Fix): (
        iter: Iterable<Val>
    ) => Val extends Promise<any> ? Promise<boolean> : boolean
    <Val, Fix extends Val extends Promise<infer R> ? R : Val>(val: Fix, iter: Iterable<Val>): Val extends Promise<any>
        ? Promise<boolean>
        : boolean
}

export const contains: contains = _.curry(function (val, iter) {
    const value = _.findIndex((x) => x == val)(iter)
    return isPromise(value) ? value.then((val) => val != -1) : value != -1
})
