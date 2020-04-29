import * as _ from '../_'
import * as L from '../L'

interface map {
    <Val, Result>(mapper: (val: Val, idx?: number) => Result): (iter: Iterable<Val>) => Iterable<Val>
    <Val, Result>(mapper: (val: Iterable<Val>, idx?: number) => Result, iter: Iterable<Val>): Iterable<Val>
}
export const map: map = _.curry(function (mapper, iter) {
    return _.pipe(L.map(mapper), _.takeAll)(iter) as any
})
