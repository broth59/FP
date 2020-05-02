import * as L from '../L'
import * as _ from '../_'

interface compact {
    <Val>(iter: Iterable<Val>): Generator<Val>
}

export const compact: compact = L.filter(_.identity) as any
