import * as _ from '../_'
import * as L from '../L'
import { nop, noop } from '../symbol'

interface take {
    <Val>(limit: number): (
        iter: Iterable<Val>
    ) => Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Iterable<Val>
    <Val>(limit: number, iter: Iterable<Val>): Val extends Promise<infer Kernel>
        ? Promise<Iterable<Kernel>>
        : Iterable<Val>
}

export const take: take = _.curry(function take(limit, iter) {
    let res: any[] = []
    let init_count = 0
    iter = L.each(iter)
    iter.return = null
    return (function recurr(): any {
        for (const [key, val] of iter) {
            if (val instanceof Promise) {
                return val
                    .then((a) => {
                        if ([nop, noop].includes(a)) return res.length == limit ? res : recurr()
                        else return (res.push(a), res).length == limit ? res : recurr()
                    })
                    .catch((e) => ([nop, noop].includes(e) ? recurr() : Promise.reject(e)))
            } else {
                res.push(val)
                if (++init_count == limit) return res
            }
        }
        return res
    })()
})
