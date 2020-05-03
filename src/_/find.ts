import * as _ from '../_'
import * as L from '../L'
import { nop, noop } from '../symbol'

interface find {
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val, index?: number) => any): (
        iter: Iterable<Val>
    ) => Val extends Promise<Val> ? Promise<DeepPromise<Val>> : Val
    //Simul<Val> extends Promise<any> ? Promise<DeepPromise<Val>> : Val
    //extends Promise<Val> ? Promise<DeepPromise<Val>> : Val
    // Promi<Val, Simul<Val>> extends Promise<Val> ? Promise<DeepPromise<Val>> : Val
    <Val>(
        mapper: (val: Val extends Promise<infer R> ? R : Val, index?: number) => any,
        iter: Iterable<Val>
    ): Val extends Promise<Val> ? Promise<DeepPromise<Val>> : Val
}

export const find: find = _.curry(function (predi, iter) {
    iter = L.each(iter) as any
    iter.return = null
    return (function recurr(): any {
        for (const [key, val] of iter) {
            if (val instanceof Promise)
                return val
                    .then((val) => {
                        if ([nop, noop].includes(val)) return recurr()
                        else return predi(val, key) ? val : recurr()
                    })
                    .catch((e) => ([nop, noop].includes(e) ? recurr() : Promise.reject(e)))
            else if (predi(val, key)) return val
        }
    })()
})
