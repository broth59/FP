import * as _ from '../_'
import * as L from '../_'

export function pipe<Val, R1>(
    fn1: (...arg: Array<Val>) => R1
): <Yield extends Promise<Val> | Val>(
    iter: Yield
) => Yield extends Promise<any> ? Promise<DeepPromise<DeepPromise<R1>>> : R1

export function pipe<Val, R1, R2>(
    fn1: (...arg: Array<Val>) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2
): <Yield extends Promise<Val> | Val>(
    iter: Yield
) => Yield extends Promise<any>
    ? Promise<DeepPromise<DeepPromise<R2>>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<DeepPromise<R2>>>
    : R2

export function pipe<Val, R1, R2, R3>(
    fn1: (...arg: Array<Val>) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3
): <Yield extends Promise<Val> | Val>(
    iter: Yield
) => Yield extends Promise<any>
    ? Promise<DeepPromise<DeepPromise<R3>>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<DeepPromise<R3>>>
    : R2 extends Promise<any>
    ? Promise<DeepPromise<DeepPromise<R3>>>
    : R3

export function pipe<Yield extends Promise<Val> | Val, Val, R1, R2, R3, R4>(
    fn1: (...arg: Array<Val>) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R2 extends Promise<infer R> ? R : R2) => R4
): (
    iter: Yield
) => Yield extends Promise<any>
    ? Promise<DeepPromise<R4>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<R4>>
    : R2 extends Promise<any>
    ? Promise<DeepPromise<R4>>
    : R3 extends Promise<any>
    ? Promise<DeepPromise<R4>>
    : R4

export function pipe<Yield extends Promise<Val> | Val, Val, R1, R2, R3, R4, R5>(
    fn1: (...arg: Array<Val>) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5
): (
    iter: Yield
) => Yield extends Promise<any>
    ? Promise<DeepPromise<R5>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<R5>>
    : R2 extends Promise<any>
    ? Promise<DeepPromise<R5>>
    : R3 extends Promise<any>
    ? Promise<DeepPromise<R5>>
    : R4 extends Promise<any>
    ? Promise<DeepPromise<R5>>
    : R5

export function pipe<Yield extends Promise<Val> | Val, Val, R1, R2, R3, R4, R5, R6>(
    fn1: (...arg: Array<Val>) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5,
    fn6: (arg: R5 extends Promise<infer R> ? R : R5) => R6
): (
    iter: Yield
) => Yield extends Promise<any>
    ? Promise<DeepPromise<R6>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<R6>>
    : R2 extends Promise<any>
    ? Promise<DeepPromise<R6>>
    : R3 extends Promise<any>
    ? Promise<DeepPromise<R6>>
    : R4 extends Promise<any>
    ? Promise<DeepPromise<R6>>
    : R5 extends Promise<any>
    ? Promise<DeepPromise<R6>>
    : R6

export function pipe<Yield extends Promise<Val> | Val, Val, R1, R2, R3, R4, R5, R6, R7>(
    fn1: (...arg: Array<Val>) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5,
    fn6: (arg: R5 extends Promise<infer R> ? R : R5) => R6,
    fn7: (arg: R6 extends Promise<infer R> ? R : R6) => R7
): (
    iter: Yield
) => Yield extends Promise<any>
    ? Promise<DeepPromise<R7>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<R7>>
    : R2 extends Promise<any>
    ? Promise<DeepPromise<R7>>
    : R3 extends Promise<any>
    ? Promise<DeepPromise<R7>>
    : R4 extends Promise<any>
    ? Promise<DeepPromise<R7>>
    : R5 extends Promise<any>
    ? Promise<DeepPromise<R7>>
    : R6 extends Promise<any>
    ? Promise<DeepPromise<R7>>
    : R7

export function pipe<Yield extends Promise<Val> | Val, Val, R1, R2, R3, R4, R5, R6, R7, R8>(
    fn1: (...arg: Array<Val>) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5,
    fn6: (arg: R5 extends Promise<infer R> ? R : R5) => R6,
    fn7: (arg: R6 extends Promise<infer R> ? R : R6) => R7,
    fn8: (arg: R7 extends Promise<infer R> ? R : R7) => R8
): (
    iter: Yield
) => Yield extends Promise<any>
    ? Promise<DeepPromise<R8>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<R8>>
    : R2 extends Promise<any>
    ? Promise<DeepPromise<R8>>
    : R3 extends Promise<any>
    ? Promise<DeepPromise<R8>>
    : R4 extends Promise<any>
    ? Promise<DeepPromise<R8>>
    : R5 extends Promise<any>
    ? Promise<DeepPromise<R8>>
    : R6 extends Promise<any>
    ? Promise<DeepPromise<R8>>
    : R7 extends Promise<any>
    ? Promise<DeepPromise<R8>>
    : R8

export function pipe<Yield extends Promise<Val> | Val, Val, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    fn1: (...arg: Array<Val>) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5,
    fn6: (arg: R5 extends Promise<infer R> ? R : R5) => R6,
    fn7: (arg: R6 extends Promise<infer R> ? R : R6) => R7,
    fn8: (arg: R7 extends Promise<infer R> ? R : R7) => R8,
    fn9: (arg: R8 extends Promise<infer R> ? R : R8) => R9
): (
    iter: Yield
) => Yield extends Promise<any>
    ? Promise<DeepPromise<R9>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<R9>>
    : R2 extends Promise<any>
    ? Promise<DeepPromise<R9>>
    : R3 extends Promise<any>
    ? Promise<DeepPromise<R9>>
    : R4 extends Promise<any>
    ? Promise<DeepPromise<R9>>
    : R5 extends Promise<any>
    ? Promise<DeepPromise<R9>>
    : R6 extends Promise<any>
    ? Promise<DeepPromise<R9>>
    : R7 extends Promise<any>
    ? Promise<DeepPromise<R9>>
    : R8 extends Promise<any>
    ? Promise<DeepPromise<R9>>
    : R9

export function pipe(...args: Array<any>): any
export function pipe(...fns: Array<AnyFunction>): any {
    return (iter: Iterable<any>) => _.reduce(_.go1, [iter, ...fns])
}
