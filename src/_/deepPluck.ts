import * as _ from '../_'
import * as L from '../L'

export function deepPluck<Val>(keys: string, iter: Iterable<Val>) {
    return _.pipe(L.deepPluck(keys), _.takeAll)(iter)
}
