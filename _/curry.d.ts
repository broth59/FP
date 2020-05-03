/// <reference types="@src/type/Operator" />
interface Curried<T extends AnyFunction> {
    (a: Arg<T>, ...bs: RestArgs<T>): ReturnType<T>;
    (a: Arg<T>): (...bs: RestArgs<T>) => ReturnType<T>;
}
interface CurriedR<T extends BinaryOperator> {
    (a: Arg2<T>, b: Arg1<T>): ReturnType<T>;
    (a: Arg2<T>): (bs: Arg1<T>) => ReturnType<T>;
}
export declare function curryD<T extends (...args: any[]) => any>(fn: T, arg_length?: number): (...bs: any[]) => any;
export declare function curry<T extends AnyFunction>(fn: T): Curried<T>;
export declare function curryr<T extends BinaryOperator>(fn: T): CurriedR<T>;
export {};
