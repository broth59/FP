import * as L from '../L'
import * as _ from '../_'

interface compact {
    <Val>(predi: (arg: Val) => any): (iter: Iterable<Val>) => Generator<Val>
    <Val>(predi: (arg: Iterable<Val>) => any, iter: Iterable<Val>): Generator<Val>
}

export const compact = L.filter(_.identity)
