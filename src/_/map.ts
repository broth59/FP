import * as _ from '../_'
import * as L from '../L'

interface map {
    <Iter extends Iterable<Promise<Val> | Val>, Val, Result>(mapper: (val: Val, idx?: number) => Result): (
        iter: Iter
    ) => Iter extends Iterable<Promise<any>> ? Iterable<Promise<Result>> : Iterable<Result>
    <Iter extends Iterable<Promise<Val> | Val>, Val, Result>(
        mapper: (val: Val, idx?: number) => Result,
        iter: Iterable<Promise<Val> | Val>
    ): Iter extends Iterable<Promise<any>> ? Iterable<Promise<Result>> : Iterable<Result>
}
export const map: map = _.curry(function (mapper, iter) {
    return _.pipe(L.map(mapper), _.takeAll)(iter) as any
})

map((x) => x + 1, [Promise.resolve(1)])
