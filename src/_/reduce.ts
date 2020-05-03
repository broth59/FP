import * as _ from '../_'
import * as L from '../L'

interface reduce {
    <Result, Val>(
        fn: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => Result
    ): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<DeepPromise<Result>> : Val
    <Result, Val>(
        fn: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => Result,
        acc: Iterable<Val>
    ): Simul<Val> extends Promise<any> ? Promise<DeepPromise<Result>> : Val
    <Result, Val, Acc>(
        fn: (acc: Acc, val: Val extends Promise<infer R> ? R : Val) => Result,
        acc: Acc,
        iter: Iterable<Val>
    ): Simul<Val> extends Promise<any> ? Promise<DeepPromise<Result>> : Val
}

export const reduce: reduce = _.curry(function reduce(fn: any, acc: any, iter?: any): any {
    //if(!acc)  return _.reduce(_.head(acc=[...f]), acc)
    if (!iter) {
        return reduce(fn, _.head((iter = L.catchNoop(acc)[Symbol.iterator]())), iter)
    }
    iter = L.each(iter)
    iter.return = null
    return _.go1(acc, function recurr(acc: any): any {
        for (const [key, val] of iter) {
            acc = _.go2(acc, val, fn)
            if (acc instanceof Promise) return acc.then(recurr)
        }
        return acc
    })
})
