import * as _ from '../_'
import * as L from '../L'
import { nop, noop } from '../symbol'
interface takeAll {
    <Val>(iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>
}

export const takeAll: takeAll = _.take(Infinity) as any
