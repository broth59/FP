import * as _ from '../_'
import * as L from '../L'

interface some {
    <Val>(predicate: (val: Val, key?: number) => any): (iter: Iterable<Promise<Val> | Val>) => boolean
    <Val>(mapper: (val: Val, key?: number) => any, iter: Iterable<Promise<Val> | Val>): boolean
}

export const some: some = _.curry(function (predi, iter) {
    return !!_.find(predi, iter)
})
