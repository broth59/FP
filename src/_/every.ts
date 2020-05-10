import * as _ from '../_'
import * as L from '../L'
import { isPromise } from '../is'

interface every {
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val, key?: number) => any): (
        iter: Iterable<Val>
    ) => Val extends Promise<any> ? Promise<boolean> : boolean
    <Val>(
        mapper: (val: Val extends Promise<infer R> ? R : Val, key?: number) => any,
        iter: Iterable<Val>
    ): Val extends Promise<any> ? Promise<boolean> : boolean
}

export const every: every = _.curry(function (predi, iter) {
    const value = _.findIndex(_.negate(predi), iter)
    return isPromise(value) ? value.then((val) => val == -1) : value == -1
})
