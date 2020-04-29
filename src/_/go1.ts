import { isPromise } from '../is'

export function go1<Val, Result>(a: Promise<Val>, fn: (val: Val) => Result): Promise<Result> | Result {
    return isPromise(a) ? a.then(fn) : (fn(a) as any)
}
