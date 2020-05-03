import * as _ from '../_'
import * as L from '../L'

export function go<Yield, R1>(
    iter: Yield,
    fn1: (arg: Yield extends Promise<infer R> ? R : Yield) => R1
): Yield extends Promise<any> ? Promise<DeepPromise<R1>> : R1

export function go<Yield, R1, R2>(
    iter: Yield,
    fn1: (arg: Yield extends Promise<infer R> ? R : Yield) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2
): Yield extends Promise<any> ? Promise<DeepPromise<R2>> : R1 extends Promise<any> ? Promise<DeepPromise<R2>> : R2

export function go<Yield, R1, R2, R3>(
    iter: Yield,
    fn1: (arg: Yield extends Promise<infer R> ? R : Yield) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3
): Yield extends Promise<any>
    ? Promise<DeepPromise<R3>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<R3>>
    : R2 extends Promise<any>
    ? Promise<DeepPromise<R3>>
    : R3

export function go<Yield, R1, R2, R3, R4>(
    iter: Yield,
    fn1: (arg: Yield extends Promise<infer R> ? R : Yield) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4
): Yield extends Promise<any>
    ? Promise<DeepPromise<R4>>
    : R1 extends Promise<any>
    ? Promise<DeepPromise<R4>>
    : R2 extends Promise<any>
    ? Promise<DeepPromise<R4>>
    : R3 extends Promise<any>
    ? Promise<DeepPromise<R4>>
    : R4

export function go<Yield, R1, R2, R3, R4, R5>(
    iter: Yield,
    fn1: (arg: Yield extends Promise<infer R> ? R : Yield) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5
): Yield extends Promise<any>
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

export function go<Yield, R1, R2, R3, R4, R5, R6>(
    iter: Yield,
    fn1: (arg: Yield extends Promise<infer R> ? R : Yield) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5,
    fn6: (arg: R5 extends Promise<infer R> ? R : R5) => R6
): Yield extends Promise<any>
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

export function go<Yield, R1, R2, R3, R4, R5, R6, R7>(
    iter: Yield,
    fn1: (arg: Yield extends Promise<infer R> ? R : Yield) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5,
    fn6: (arg: R5 extends Promise<infer R> ? R : R5) => R6,
    fn7: (arg: R6 extends Promise<infer R> ? R : R6) => R7
): Yield extends Promise<any>
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

export function go<Yield, R1, R2, R3, R4, R5, R6, R7, R8>(
    iter: Yield,
    fn1: (arg: Yield extends Promise<infer R> ? R : Yield) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5,
    fn6: (arg: R5 extends Promise<infer R> ? R : R5) => R6,
    fn7: (arg: R6 extends Promise<infer R> ? R : R6) => R7,
    fn8: (arg: R7 extends Promise<infer R> ? R : R7) => R8
): Yield extends Promise<any>
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

export function go<Yield, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    iter: Yield,
    fn1: (arg: Yield extends Promise<infer R> ? R : Yield) => R1,
    fn2: (arg: R1 extends Promise<infer R> ? R : R1) => R2,
    fn3: (arg: R2 extends Promise<infer R> ? R : R2) => R3,
    fn4: (arg: R3 extends Promise<infer R> ? R : R3) => R4,
    fn5: (arg: R4 extends Promise<infer R> ? R : R4) => R5,
    fn6: (arg: R5 extends Promise<infer R> ? R : R5) => R6,
    fn7: (arg: R6 extends Promise<infer R> ? R : R6) => R7,
    fn8: (arg: R7 extends Promise<infer R> ? R : R7) => R8,
    fn9: (arg: R8 extends Promise<infer R> ? R : R8) => R9
): Yield extends Promise<any>
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
    : R9
export function go(iter: Iterable<any>, ...fns: any) {
    return _.reduce(_.go1, [iter, ...fns]) as any
}
