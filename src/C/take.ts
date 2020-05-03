import * as L from '../L'
import * as _ from '../_'

interface take {
    <Val>(limit: number): (
        iter: Iterable<Val>
    ) => Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Iterable<Val>
    <Val>(limit: number, iter: Iterable<Val>): Val extends Promise<infer Kernel>
        ? Promise<Iterable<Kernel>>
        : Iterable<Val>
}

export const take: take = _.curry((limit, iter) => {
    return _.take(limit, L.catchNoop([...iter])) as any
})
