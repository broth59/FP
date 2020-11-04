import { nop, noop } from '../symbol'

export function go2<Acc, Val, Result>(
    acc: Acc,
    a: Val,
    fn: Acc extends Promise<infer R> ? (acc: R, val: Val) => Result : (acc: Acc, val: Val) => Result
) {
    return a instanceof Promise
        ? a.then(
            (a) => {
				if ([noop, nop].includes(acc as any) && [noop, nop].includes(a)) return noop
                if ([noop, nop].includes(acc as any)) return a
				if ([noop, nop].includes(a)) return acc
                return fn(acc, a)
            },
            (e) => {
				return e == nop ? acc : Promise.reject(e)
			}
        )
        : fn(acc, a)
}
