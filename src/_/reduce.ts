import * as _ from '../_'
import * as L from '../L'

interface reduce {
    <Result, Val>(fn: (acc: Val extends Promise<infer R> ? R : Val, val: Val) => Result): (
        iter: Iterable<Val>
    ) => Val extends Promise<any> ? Promise<Result> : Result
    <Result, Val>(
        fn: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => Result,
        acc: Iterable<Val>
    ): Val extends Promise<any> ? Promise<Result> : Result
    <Result, Val, Acc>(
        fn: (acc: Acc, val: Val extends Promise<infer R> ? R : Val) => Result,
        acc: Acc,
        iter: Iterable<Val>
    ): Val extends Promise<any> ? Promise<Result> : Result
}

export const reduce: reduce = _.curry(function reduce(fn: any, acc: any, iter?: any): any {
    //if(!acc)  return _.reduce(_.head(acc=[...f]), acc)
    if (!iter) {
        return reduce(fn, _.head((iter = _.catchNoop(acc)[Symbol.iterator]())), iter)
    }
    ;(iter as any).return = null
    return _.go1(acc, function recurr(acc: any): any {
        for (const [key, val] of L.each(iter)) {
            acc = _.go2(acc, val, fn)
            if (acc instanceof Promise) return acc.then(recurr)
        }
        return acc
    })
})
