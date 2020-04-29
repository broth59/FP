import { nop, noop } from '../symbol'

export function go2<Acc, Val, Result>(
    acc: Acc,
    a: Val,
    fn: Acc extends Promise<infer R> ? (acc: R, val: Val) => Result : (acc: Acc, val: Val) => Result
) {
    return a instanceof Promise
        ? a.then(
              (a) => {
                  if (acc instanceof Symbol) {
                      if (acc == noop && a == nop) return noop
                      if (acc == noop) return a
                      if (a == noop) return acc
                  }
                  return fn(acc, a)
              },
              (e) => (e == nop ? acc : Promise.reject(e))
          )
        : fn(acc, a)
}
