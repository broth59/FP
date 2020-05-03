import { isPromise } from '../is'

export function go1<Val, Result>(
    a: Promise<Val> | Val,
    fn: (val: Val) => Result
): Promise<DeepPromise<Result>> | Result {
    return isPromise(a) ? a.then(fn) : (fn(a) as any)
}
