import { isIterable } from '../is'
import * as _ from '../_'

export function each<T extends Object | Iterable<any>, Key extends keyof T>(
    iter: T
): T extends Iterable<infer Yield> ? Generator<Array<[number, Yield]>, any, unknown> : Array<[Key, T[Key]]> {
    return isIterable(iter)
        ? (function* () {
              let index = 0
              for (const val of iter) {
                  yield [index++, val]
              }
          })()
        : ((function* () {
              const keys = _.keys(iter)
              for (const key of keys) {
                  yield [key, iter[key]]
              }
          })() as any)
}
