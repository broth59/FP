import * as L from '../L'
import * as _ from '../_'
import * as C from '../C'

interface takeAll {
    <Val>(iter: Iterable<Val>): Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Iterable<Val>
}

export const takeAll:takeAll = C.take(Infinity) as any

