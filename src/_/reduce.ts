import * as _ from '../_'
import * as L from '../L'

interface reduce {
    <Result, Val>(fn: (acc: Val, val: Val) => Result): (iter: Iterable<Val>) => Result
    <Result, Val>(fn: (acc: Val, val: Val) => Result, acc: Iterable<Val> | Iterable<Promise<Val>>): Result
    <Result, Val, Acc>(
        fn: (acc: Acc, val: Val) => Result,
        acc: Acc,
        iter: Iterable<Val> | Iterable<Promise<Val>>
    ): Result
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
