export declare function pipe<Yield, R1>(fn1: (...arg: Array<Yield>) => R1): (iter: Promise<Yield> | Yield) => R1;
export declare function pipe<Yield, R1, R2>(fn1: (...arg: Array<Yield>) => Promise<R1> | R1, fn2: (arg: R1) => R2): (iter: Promise<Yield> | Yield) => R2;
export declare function pipe<Yield, R1, R2, R3>(fn1: (...arg: Array<Yield>) => Promise<R1> | R1, fn2: (arg: R1) => Promise<R2> | R2, fn3: (arg: R2) => R3): (iter: Promise<Yield> | Yield) => R3;
export declare function pipe<Yield, R1, R2, R3, R4>(fn1: (...arg: Array<Yield>) => Promise<R1> | R1, fn2: (arg: R1) => Promise<R2> | R2, fn3: (arg: R2) => Promise<R3> | R3, fn4: (arg: R2) => R4): (iter: Promise<Yield> | Yield) => R4;
export declare function pipe<Yield, R1, R2, R3, R4, R5>(fn1: (...arg: Array<Yield>) => Promise<R1> | R1, fn2: (arg: R1) => Promise<R2> | R2, fn3: (arg: R2) => Promise<R3> | R3, fn4: (arg: R3) => Promise<R4> | R4, fn5: (arg: R4) => R5): (iter: Promise<Yield> | Yield) => R5;
export declare function pipe<Yield, R1, R2, R3, R4, R5, R6>(fn1: (...arg: Array<Yield>) => Promise<R1> | R1, fn2: (arg: R1) => Promise<R2> | R2, fn3: (arg: R2) => Promise<R3> | R3, fn4: (arg: R3) => Promise<R4> | R4, fn5: (arg: R4) => Promise<R5> | R5, fn6: (arg: R5) => R6): (iter: Promise<Yield> | Yield) => R6;
export declare function pipe(...args: Array<any>): any;
