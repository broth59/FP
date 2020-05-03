import * as _ from '../_'
import * as L from '../L'

interface map {
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result): (
        iter: Iterable<Val>
    ) => Generator<Val extends Promise<any> ? Promise<DeepPromise<Result>> : Result>
    <Val, Result>(
        mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result,
        iter: Iterable<Val>
    ): Generator<Val extends Promise<any> ? Promise<DeepPromise<Result>> : Result>
}
export const map: map = _.curry(function* (mapper: any, iter: any) {
    for (const [key, val] of L.each(iter)) {
        yield _.go1(val, (val: any) => mapper(val, key))
    }
})
