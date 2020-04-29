import * as _ from '../_'
import * as L from '../_'

export function pipe<Yield, R1>(
    fn1: (...arg: Array<Iterable<Yield>>) => R1
): (...arg: Array<Iterable<Yield | Promise<Yield>>> | Array<Promise<Iterable<Yield | Promise<Yield>>>>) => R1
export function pipe<Yield, R1>(fn1: (...arg: Array<Yield>) => R1): (iter: Yield | Promise<Yield>) => R1

export function pipe<Yield, R1, R2>(
    fn1: (...arg: Array<Iterable<Yield>>) => R1 | Iterable<R1> | Iterable<Promise<R1>>,
    fn2: (arg: R1 | Iterable<R1>) => R2
): (...arg: Array<Iterable<Yield | Promise<Yield>>> | Array<Promise<Iterable<Yield | Promise<Yield>>>>) => R2
export function pipe<Yield, R1, R2>(
    fn1: (...arg: Array<Yield>) => R1 | Promise<R1>,
    fn2: (arg: R1) => R2
): (iter: Yield | Promise<Yield>) => R2

export function pipe<Yield, R1, R2, R3>(
    fn1: (...arg: Array<Iterable<Yield>>) => R1 | Iterable<R1> | Iterable<Promise<R1>>,
    fn2: (arg: R1 | Iterable<R1>) => R2 | Iterable<R2> | Iterable<Promise<R2>>,
    fn3: (arg: R2 | Iterable<R2>) => R3
): (...arg: Array<Iterable<Yield | Promise<Yield>>> | Array<Promise<Iterable<Yield | Promise<Yield>>>>) => R3
export function pipe<Yield, R1, R2, R3>(
    fn1: (...arg: Array<Yield>) => R1 | Promise<R1>,
    fn2: (arg: R1) => R2 | Promise<R2>,
    fn3: (arg: R2) => R3
): (iter: Yield | Promise<Yield>) => R3

export function pipe<Yield, R1, R2, R3, R4>(
    fn1: (...arg: Array<Iterable<Yield>>) => R1 | Iterable<R1> | Iterable<Promise<R1>>,
    fn2: (arg: R1 | Iterable<R1>) => R2 | Iterable<R2> | Iterable<Promise<R2>>,
    fn3: (arg: R2 | Iterable<R2>) => R3 | Iterable<R3> | Iterable<Promise<R3>>,
    fn4: (arg: R3 | Iterable<R3>) => R3
): (...arg: Array<Iterable<Yield | Promise<Yield>>> | Array<Promise<Iterable<Yield | Promise<Yield>>>>) => R4
export function pipe<Yield, R1, R2, R3, R4>(
    fn1: (...arg: Array<Yield>) => R1 | Promise<R1>,
    fn2: (arg: R1) => R2 | Promise<R2>,
    fn2: (arg: R1) => R2 | Promise<R2>,
    fn3: (arg: R2) => R3
): (iter: Yield | Promise<Yield>) => R4

export function pipe<Yield, R1, R2, R3, R4>(
    fn1: (...arg: Array<Iterable<Yield>>) => R1 | Iterable<R1> | Iterable<Promise<R1>>,
    fn2: (arg: R1 | Iterable<R1>) => R2 | Iterable<R2> | Iterable<Promise<R2>>,
    fn3: (arg: R2 | Iterable<R2>) => R3
): (...arg: Array<Iterable<Yield | Promise<Yield>>> | Array<Promise<Iterable<Yield | Promise<Yield>>>>) => R1
export function pipe<Yield, R1, R2, R3, R4>(
    fn1: (...arg: Array<Yield>) => R1 | Promise<R1>,
    fn2: (arg: R1) => R2 | Promise<R2>,
    fn3: (arg: R2) => R3
): (iter: Yield | Promise<Yield>) => R3


export function pipe<Arg extends Array<any>, R1, R2, R3>(
    fn1: (...args: Arg) => R1,
    fn2: (arg: R1) => R2,
    fn3: (arg: R2) => R3
): (arg: Arg extends Array<infer K> ? K : Arg) => R3
export function pipe<Arg extends Array<any>, R1, R2, R3, R4>(
    fn1: (...args: Arg) => R1,
    fn2: (arg: R1) => R2,
    fn3: (arg: R2) => R3,
    fn4: (arg: R3) => R4
): (arg: Arg extends Array<infer K> ? K : Arg) => R3
export function pipe<Arg extends Array<any>, R1, R2, R3, R4, R5>(
    fn1: (...args: Arg) => R1,
    fn2: (arg: R1) => R2,
    fn3: (arg: R2) => R3,
    fn4: (arg: R3) => R4,
    fn5: (arg: R4) => R5
): (arg: Arg extends Array<infer K> ? K : Arg) => R3
export function pipe(...args: Array<any>): any
export function pipe(...fns: Array<AnyFunction>) {
    return (iter: Iterable<any>) => _.reduce(_.go1, [iter, ...fns])
}
