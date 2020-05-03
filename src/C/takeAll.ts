import * as L from '../L'
import * as _ from '../_'
import * as C from '../C'

interface takeAll {
    <Val>(iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>
}

export const takeAll: takeAll = C.take(Infinity) as any
