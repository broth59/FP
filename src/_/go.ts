import * as _ from '../_'
import * as L from '../L'

export function go<Yield, R1>(
    iter: Iterable<Yield | Promise<Yield>> | Promise<Iterable<Yield | Promise<Yield>>>,
    fn1: (arg: Iterable<Yield>) => R1
): R1
export function go<Yield, R1>(iter: Yield | Promise<Yield>, fn1: (arg: Yield) => R1): R1

export function go<Yield, R1, R2>(
    iter: Iterable<Yield | Promise<Yield>> | Promise<Iterable<Yield | Promise<Yield>>>,
    fn1: (arg: Iterable<Yield>) => R1 | Iterable<R1> | Iterable<Promise<R1>>,
    fn2: (arg: R1 | Iterable<R1>) => R2
): R2
export function go<Yield, R1, R2>(
    iter: Yield | Promise<Yield>,
    fn1: (arg: Yield) => R1 | Promise<R1>,
    fn2: (arg: R1) => R2
): R2

export function go<Yield, R1, R2, R3>(
    iter: Iterable<Yield | Promise<Yield>> | Promise<Iterable<Yield | Promise<Yield>>>,
    fn1: (arg: Iterable<Yield>) => R1 | Iterable<R1> | Iterable<Promise<R1>>,
    fn2: (arg: R1 | Iterable<R1>) => R2 | Iterable<R2> | Iterable<Promise<R2>>,
    fn3: (arg: R2 | Iterable<R2>) => R3
): R3

export function go<Yield, R1, R2, R3, R4>(
    iter: Iterable<Yield | Promise<Yield>> | Promise<Iterable<Yield | Promise<Yield>>>,
    fn1: (arg: Iterable<Yield>) => R1 | Iterable<R1> | Iterable<Promise<R1>>,
    fn2: (arg: R1 | Iterable<R1>) => R2 | Iterable<R2> | Iterable<Promise<R2>>,
    fn3: (arg: R2 | Iterable<R2>) => R3 | Iterable<R3> | Iterable<Promise<R3>>,
    fn4: (arg: R3 | Iterable<R3>) => R4
): R4

export function go<Yield, R1, R2, R3, R4, R5>(
    iter: Iterable<Yield | Promise<Yield>> | Promise<Iterable<Yield | Promise<Yield>>>,
    fn1: (arg: Iterable<Yield>) => R1 | Iterable<R1> | Iterable<Promise<R1>>,
    fn2: (arg: R1 | Iterable<R1>) => R2 | Iterable<R2> | Iterable<Promise<R2>>,
    fn3: (arg: R2 | Iterable<R2>) => R3 | Iterable<R3> | Iterable<Promise<R3>>,
    fn4: (arg: R3 | Iterable<R3>) => R4 | Iterable<R4> | Iterable<Promise<R4>>,
    fn5: (arg: R4 | Iterable<R4>) => R5
): R5
export function go<Yield, R1, R2, R3, R4, R5>(
    iter: Yield | Promise<Yield>,
    fn1: (arg: R1) => R2 | Promise<R2>,
    fn2: (arg: R2) => R3 | Promise<R3>,
    fn3: (arg: R3) => R4 | Promise<R4>,
    fn4: (arg: R4) => R5
): R3

export function go<Yield, R1, R2, R3, R4, R5, R6>(
    iter: Iterable<Yield | Promise<Yield>> | Promise<Iterable<Yield | Promise<Yield>>>,
    fn1: (arg: Iterable<Yield>) => R1 | Iterable<R1> | Iterable<Promise<R1>>,
    fn2: (arg: R1 | Iterable<R1>) => R2 | Iterable<R2> | Iterable<Promise<R2>>,
    fn3: (arg: R2 | Iterable<R2>) => R3 | Iterable<R3> | Iterable<Promise<R3>>,
    fn4: (arg: R3 | Iterable<R3>) => R4 | Iterable<R4> | Iterable<Promise<R4>>,
    fn5: (arg: R4 | Iterable<R4>) => R5 | Iterable<R5> | Iterable<Promise<R5>>,
    fn6: (arg: R5 | Iterable<R5>) => R6
): R6
export function go<Yield, R1, R2, R3, R4, R5, R6>(
    iter: Yield | Promise<Yield>,
    fn1: (arg: R1) => R2 | Promise<R2>,
    fn2: (arg: R2) => R3 | Promise<R3>,
    fn3: (arg: R3) => R4 | Promise<R4>,
    fn4: (arg: R4) => R5 | Promise<R5>,
    fn5: (arg: R5) => R6
): R3
export function go<Yield, R1, R2, R3, R4>(
    iter: Yield | Promise<Yield>,
    fn1: (arg: R1) => R2 | Promise<R2>,
    fn2: (arg: R2) => R3 | Promise<R3>,
    fn3: (arg: R3) => R4
): R3
export function go(iter: Iterable<any>, ...fns: any) {
    return _.reduce(_.go1, [iter, ...fns])
}
