import * as _ from '../_'
import * as L from '../L'
import { nop, noop } from '../symbol'

interface takeAll {
    <Val>(predi: (arg: Val) => any): (iter: Iterable<Promise<Val> | Val>) => Iterable<Val>
    <Val>(limit: number, iter: Iterable<Promise<Val> | Val>): Iterable<Val>
}

export const takeWhile: takeAll = _.curry(function (f, iter) {
    iter = L.each(iter)
    iter.return = null
    let res: any[] = []
    return (function recurr(): any {
        for (const [key, val] of iter) {
            let b = _.go1(val, f)
            if (!b) return res
            if (b instanceof Promise) {
                return b
                    .then(async (c) => (c ? (res.push(await val), recurr()) : res))
                    .catch((e) => (e == nop ? recurr() : Promise.reject(e)))
            } else {
                res.push(val)
            }
        }
        return res
    })()
})
