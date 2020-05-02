import * as _ from '../_'
import * as L from '../L'

interface find {
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val) => any): (
        iter: Iterable<Val>
    ) => Val extends Promise<any> ? Promise<Val> : Val
    <Val>(mapper: (val: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Val extends Promise<any>
        ? Promise<Val>
        : Val
}

export const find: find = _.curry(function (predi, iter) {
    return (function recurr(): any {
        for (const [key, val] of L.each(iter)) {
            if (val instanceof Promise) return val.then((val) => (predi(val) ? val : recurr()))
            if (predi(val)) return val
        }
    })()
})
