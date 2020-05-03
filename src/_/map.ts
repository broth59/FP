import * as _ from '../_'
import * as L from '../L'

interface map {
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result): (
        iter: Iterable<Val>
    ) => Iterable<Val extends Promise<any> ? Promise<DeepPromise<Result>> : Result>
    <Val, Result>(
        mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result,
        iter: Iterable<Val>
    ): Iterable<Val extends Promise<any> ? Promise<DeepPromise<Result>> : Result>
}
export const map: map = _.curry(function (mapper, iter) {
    return _.pipe(L.map(mapper), _.takeAll)(iter) as any
})
