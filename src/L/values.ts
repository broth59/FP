import * as L from '.'
import * as _ from '../_'

export function values<Val>(iter: Iterable<Val>): Generator<Val> {
    return L.map(_.identity, iter) as any
}
