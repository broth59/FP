import * as _ from '../_'
import * as L from '../L'

export function go<Yield, R1>(
    iter: Iterable<Promise<Yield> | Yield> | Promise<Iterable<Promise<Yield> | Yield>>,
    fn1: (arg: Iterable<Yield>) => R1
): R1
export function go<Yield, R1>(iter: Yield | Promise<Yield>, fn1: (arg: Yield) => R1): R1

export function go<Yield, R1, R2>(
    iter: Iterable<Promise<Yield> | Yield> | Promise<Iterable<Promise<Yield> | Yield>>,
    fn1: (arg: Iterable<Yield>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
    fn2: (arg: Iterable<R1> | R1) => R2
): R2
export function go<Yield, R1, R2>(
    iter: Yield | Promise<Yield>,
    fn1: (arg: Yield) => Promise<R1> | R1,
    fn2: (arg: R1) => R2
): R2

export function go<Yield, R1, R2, R3>(
    iter: Iterable<Promise<Yield> | Yield> | Promise<Iterable<Promise<Yield> | Yield>>,
    fn1: (arg: Iterable<Yield>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
    fn2: (arg: Iterable<R1>) => Iterable<Promise<R2>> | Iterable<R2> | R2,
    fn3: (arg: Iterable<R2> | R2) => R3
): R3
export function go<Yield, R1, R2, R3>(
    iter: Yield | Promise<Yield>,
    fn1: (arg: Yield) => Promise<R1> | R1,
    fn2: (arg: R1) => Promise<R2> | R2,
    fn3: (arg: R2) => R3
): R3

export function go<Yield, R1, R2, R3, R4>(
    iter: Iterable<Promise<Yield> | Yield> | Promise<Iterable<Promise<Yield> | Yield>>,
    fn1: (arg: Iterable<Yield>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
    fn2: (arg: Iterable<R1> | R1) => Iterable<Promise<R2>> | Iterable<R2> | R2,
    fn3: (arg: Iterable<R2> | R2) => Iterable<Promise<R3>> | Iterable<R3> | R3,
    fn4: (arg: Iterable<R3> | R3) => R4
): R4

export function go<Yield, R1, R2, R3, R4, R5>(
    iter: Iterable<Promise<Yield> | Yield> | Promise<Iterable<Promise<Yield> | Yield>>,
    fn1: (arg: Iterable<Yield>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
    fn2: (arg: Iterable<R1> | R1) => Iterable<Promise<R2>> | Iterable<R2> | R2,
    fn3: (arg: Iterable<R2> | R2) => Iterable<Promise<R3>> | Iterable<R3> | R3,
    fn4: (arg: Iterable<R3> | R3) => Iterable<Promise<R4>> | Iterable<R4> | R4,
    fn5: (arg: Iterable<R4> | R4) => R5
): R5
export function go<Yield, R1, R2, R3, R4, R5>(
    iter: Yield | Promise<Yield>,
    fn1: (arg: R1) => Promise<R2> | R2,
    fn2: (arg: R2) => Promise<R3> | R3,
    fn3: (arg: R3) => Promise<R4> | R4,
    fn4: (arg: R4) => R5
): R3

export function go<Yield, R1, R2, R3, R4, R5, R6>(
    iter: Iterable<Promise<Yield> | Yield> | Promise<Iterable<Promise<Yield> | Yield>>,
    fn1: (arg: Iterable<Yield>) => Iterable<Promise<R1>> | Iterable<R1> | R1,
    fn2: (arg: Iterable<R1> | R1) => Iterable<Promise<R2>> | Iterable<R2> | R2,
    fn3: (arg: Iterable<R2> | R2) => Iterable<Promise<R3>> | Iterable<R3> | R3,
    fn4: (arg: Iterable<R3> | R3) => Iterable<Promise<R4>> | Iterable<R4> | R4,
    fn5: (arg: Iterable<R4> | R4) => Iterable<Promise<R5>> | Iterable<R5> | R5,
    fn6: (arg: Iterable<R5> | R5) => R6
): R6
export function go<Yield, R1, R2, R3, R4, R5, R6>(
    iter: Yield | Promise<Yield>,
    fn1: (arg: R1) => Promise<R2> | R2,
    fn2: (arg: R2) => Promise<R3> | R3,
    fn3: (arg: R3) => Promise<R4> | R4,
    fn4: (arg: R4) => Promise<R5> | R5,
    fn5: (arg: R5) => R6
): R6
export function go(iter: Iterable<any>, ...fns: any) {
    return _.reduce(_.go1, [iter, ...fns])
}
