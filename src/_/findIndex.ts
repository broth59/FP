import * as _ from '.'
import * as L from '../L'

interface findIndex {
    <Val>(predicate: (val: Val, key?: number) => any): (iter: Iterable<Promise<Val> | Val>) => number
    <Val>(mapper: (val: Val, key?: number) => any, iter: Iterable<Promise<Val> | Val>): number
}

export const findIndex: findIndex = _.curry(function (predi, iter) {
    let count = -1
    return (function recurr(): any {
        for (const [key, val] of L.each(iter)) {
            count++
            if (val instanceof Promise) return val.then((val) => (predi(val, key) ? val : recurr()))
            if (predi(val, key)) return count++
        }
        return -1
    })()
})
