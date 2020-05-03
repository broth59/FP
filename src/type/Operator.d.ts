declare interface Object {
    [index: string]: any
}
declare interface AnyFunction {
    (...args: any[]): any
}
declare interface BinaryOperator {
    (adam: any, eve: any): any
}
declare type Arg<T extends AnyFunction> = T extends (arg: infer R, ...args: any[]) => ReturnType<T> ? R : any
declare type Args<T extends AnyFunction> = T extends (...args: infer R) => any ? R : Array<any>
declare type RestArgs<T extends AnyFunction> = T extends (arg: Arg<T>, ...args: infer R) => any ? R : Array<any>

declare type Arg1<T extends BinaryOperator> = T extends (a: infer R, b: any) => any ? R : any
declare type Arg2<T extends BinaryOperator> = T extends (a: any, b: infer R) => any ? R : any

declare interface Predicate {
    <T>(arg1: T): boolean
    <T, K>(arg1: T, arg2: K): boolean
}

declare type DeepPromise<T> = T extends Promise<infer R1>
    ? R1 extends Promise<infer R2>
        ? R2 extends Promise<infer R3>
            ? R3 extends Promise<infer R4>
                ? R4 extends Promise<infer R5>
                    ? R5
                    : R4
                : R3
            : R2
        : R1
    : T

declare type Simul<T> = Extract2<Promise<any>, T> extends Promise<any> ? Promise<DeepPromise<T>> : T

type Extract2<T, U> = T extends U ? T : 'Special'

declare type Promi<Value, Target> = Extract2<Promise<DeepPromise<Value>>, Target>
