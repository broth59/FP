import * as _ from '../_'
import * as L from '../_'

// export function pipe<Yield, R1>(
//     fn1: (...arg: Array<Iterable<Yield>>) => R1
// ): (...arg: Array<Iterable<Promise<Yield> | Yield>> | Array<Promise<Iterable<Promise<Yield> | Yield>>>) => R1
export function pipe<Yield, R1>(fn1: (...arg: Array<Yield>) => R1): (iter: Promise<Yield> | Yield) => R1

// export function pipe<Yield, R1, R2>(
//     fn1: (...arg: Array<Iterable<Yield>>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
//     fn2: (arg: Iterable<R1> | R1) => R2
// ): (...arg: Array<Iterable<Promise<Yield> | Yield>> | Array<Promise<Iterable<Promise<Yield> | Yield>>>) => R2
export function pipe<Yield, R1, R2>(
    fn1: (...arg: Array<Yield>) => Promise<R1> | R1,
    fn2: (arg: R1) => R2
): (iter: Promise<Yield> | Yield) => R2

// export function pipe<Yield, R1, R2, R3>(
//     fn1: (...arg: Array<Iterable<Yield>>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
//     fn2: (arg: Iterable<R1> | R1) => Iterable<Promise<R2>> | Iterable<R2> | R2,
//     fn3: (arg: Iterable<R2> | R2) => R3
// ): (...arg: Array<Iterable<Promise<Yield> | Yield>> | Array<Promise<Iterable<Promise<Yield> | Yield>>>) => R3
export function pipe<Yield, R1, R2, R3>(
    fn1: (...arg: Array<Yield>) => Promise<R1> | R1,
    fn2: (arg: R1) => Promise<R2> | R2,
    fn3: (arg: R2) => R3
): (iter: Promise<Yield> | Yield) => R3

// export function pipe<Yield, R1, R2, R3, R4>(
//     fn1: (...arg: Array<Iterable<Yield>>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
//     fn2: (arg: Iterable<R1> | R1) => Iterable<Promise<R2>> | Iterable<R2> | R2,
//     fn3: (arg: Iterable<R2> | R2) => Iterable<Promise<R3>> | Iterable<R3> | R3,
//     fn4: (arg: Iterable<R3> | R3) => R3
// ): (...arg: Array<Iterable<Promise<Yield> | Yield>> | Array<Promise<Iterable<Promise<Yield> | Yield>>>) => R4
export function pipe<Yield, R1, R2, R3, R4>(
    fn1: (...arg: Array<Yield>) => Promise<R1> | R1,
    fn2: (arg: R1) => Promise<R2> | R2,
    fn3: (arg: R2) => Promise<R3> | R3,
    fn4: (arg: R2) => R4
): (iter: Promise<Yield> | Yield) => R4

// export function pipe<Yield, R1, R2, R3, R4, R5>(
//     fn1: (...arg: Array<Iterable<Yield>>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
//     fn2: (arg: Iterable<R1> | R1) => Iterable<Promise<R2>> | Iterable<R2> | R2,
//     fn3: (arg: Iterable<R2> | R2) => Iterable<Promise<R3>> | Iterable<R3> | R3,
//     fn4: (arg: Iterable<R3> | R3) => Iterable<Promise<R4>> | Iterable<R4> | R4,
//     fn5: (arg: Iterable<R4> | R4) => R5
// ): (...arg: Array<Iterable<Promise<Yield> | Yield>> | Array<Promise<Iterable<Promise<Yield> | Yield>>>) => R5
export function pipe<Yield, R1, R2, R3, R4, R5>(
    fn1: (...arg: Array<Yield>) => Promise<R1> | R1,
    fn2: (arg: R1) => Promise<R2> | R2,
    fn3: (arg: R2) => Promise<R3> | R3,
    fn4: (arg: R3) => Promise<R4> | R4,
    fn5: (arg: R4) => R5
): (iter: Promise<Yield> | Yield) => R5

// export function pipe<Yield, R1, R2, R3, R4, R5, R6>(
//     fn1: (...arg: Array<Iterable<Yield>>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
//     fn2: (arg: Iterable<R1> | R1) => Iterable<Promise<R2>> | Iterable<R2> | R2,
//     fn3: (arg: Iterable<R2> | R2) => Iterable<Promise<R3>> | Iterable<R3> | R3,
//     fn4: (arg: Iterable<R3> | R3) => Iterable<Promise<R4>> | Iterable<R4> | R4,
//     fn5: (arg: Iterable<R4> | R4) => Iterable<Promise<R5>> | Iterable<R5> | R5,
//     fn6: (arg: Iterable<R5> | R5) => R6
// ): (...arg: Array<Iterable<Promise<Yield> | Yield>> | Array<Promise<Iterable<Promise<Yield> | Yield>>>) => R6
export function pipe<Yield, R1, R2, R3, R4, R5, R6>(
    fn1: (...arg: Array<Yield>) => Promise<R1> | R1,
    fn2: (arg: R1) => Promise<R2> | R2,
    fn3: (arg: R2) => Promise<R3> | R3,
    fn4: (arg: R3) => Promise<R4> | R4,
    fn5: (arg: R4) => Promise<R5> | R5,
    fn6: (arg: R5) => R6
): (iter: Promise<Yield> | Yield) => R6

export function pipe(...args: Array<any>): any
export function pipe(...fns: Array<AnyFunction>) {
    return (iter: Iterable<any>) => _.reduce(_.go1, [iter, ...fns])
}
