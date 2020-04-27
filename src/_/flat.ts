import * as _ from "../_"
import * as L from "../L"

export function flat<Iter extends Iterable<Iterable<any>>>(iter:Iter):Iter extends Iterable<infer R> ? R : Iterable<any> {
    return _.pipe( L.flat, _.take(Infinity) )(iter) as any
}