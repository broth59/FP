import * as _ from '../_'
import * as L from '../L'

export function flat<Val>(iter:Iterable<Iterable<any>>): Iterable<any> {
    return _.pipe(L.flat, _.take(Infinity))(iter) as any
}
