import * as _ from '../_'
import * as L from '../L'
import { nop, noop } from '../symbol'
interface takeAll {
    <Val>(iter: Iterable<Val>): Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Iterable<Val>
}

export const takeAll: takeAll = _.take(Infinity)
