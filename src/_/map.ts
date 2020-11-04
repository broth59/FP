import * as _ from '../_'
import * as L from '../L'

interface map {
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result): (
        iter: Iterable<Val>
    ) => Val extends Promise<any> ? Promise<Iterable<DeepPromise<Result>>> : Iterable<Result>
    <Val, Result>(
        mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result,
        iter: Iterable<Val>
    ): Val extends Promise<any> ? Promise<Iterable<DeepPromise<Result>>> : Iterable<Result>
}
export const map: map = _.curry(function (mapper, iter) {
    return _.pipe(L.map(mapper), _.takeAll)(iter) as any
})
