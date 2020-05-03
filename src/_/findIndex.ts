import * as _ from '.'
import * as L from '../L'
import { nop, noop } from '../symbol'

interface findIndex {
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val, key?: number) => any): (
        iter: Iterable<Val>
    ) => Val extends Promise<any> ? Promise<number> : number
    <Val>(
        mapper: (val: Val extends Promise<infer R> ? R : Val, key?: number) => any,
        iter: Iterable<Promise<Val> | Val>
    ): Val extends Promise<any> ? Promise<number> : number
}

export const findIndex: findIndex = _.curry(function (predi, iter) {
    let count = -1
    iter = L.each(iter)
    iter.return = null
    return (function recurr(): any {
        for (const [key, val] of iter) {
            count++
            if (val instanceof Promise)
                return val
                    .then((val) => {
                        if ([nop, noop].includes(val)) return recurr()
                        else return predi(val, key) ? count : recurr()
                    })
                    .catch((e) => ([nop, noop].includes(e) ? recurr() : Promise.reject(e)))
            else if (predi(val, key)) return count
        }
        return -1
    })()
})
