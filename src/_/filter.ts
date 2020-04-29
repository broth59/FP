import * as L from '../L'
import * as _ from '../_'

interface filter {
    <Val>(predi: (arg: Val) => boolean | any): (iter: Iterable<Val>) => Iterable<Val>
    <Val>(predi: (arg: Val) => boolean | any, iter: Iterable<Val>): Iterable<Val>
}

export const filter: filter = _.curry(function (predicate, iter) {
    return _.go(iter, L.filter(predicate), _.takeAll)
})
