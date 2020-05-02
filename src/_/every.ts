import * as _ from '../_'
import * as L from '../L'

interface every {
    <Val>(predicate: (val: Val, key?: number) => any): (iter: Iterable<Promise<Val> | Val>) => boolean
    <Val>(mapper: (val: Val, key?: number) => any, iter: Iterable<Promise<Val> | Val>): boolean
}

export const every: every = _.curry(function (predi, iter) {
    return _.findIndex(_.negate(predi), iter) == -1
})
