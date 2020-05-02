import * as _ from '../_'
import * as L from '../L'

interface contains {
    <Val>(val: Val): (iter: Iterable<Promise<Val> | Val>) => boolean
    <Val>(val: Val, iter: Iterable<Promise<Val> | Val>): boolean
}

export const contains: contains = _.curry(function (val, iter) {
    return !!_.find((x) => x == val)(iter)
})
