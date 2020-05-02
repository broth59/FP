import * as L from '../L'
import * as _ from '../_'
import * as C from '../C'
import { nop } from '../symbol'

interface take {
    <Val>(limit: number): (
        iter: Iterable<Val>
    ) => Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Promise<Iterable<Val>>
    <Val>(limit: number, iter: Iterable<Val>): Val extends Promise<infer Kernel>
        ? Promise<Iterable<Kernel>>
        : Iterable<Val>
}

export const take:take = _.curry((limit, iter)=>{
        return _.take(limit, _.catchNoop([...iter])) as any
}) 
