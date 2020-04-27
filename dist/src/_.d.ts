import { AnyFunction, Arg, RestArgs, BinaryOperator } from "./type/Operator";
declare interface Object {
    [index: string]: any;
}
export declare namespace _ {
    interface Curried<T extends AnyFunction> {
        (a: Arg<T>, ...bs: RestArgs<T>): ReturnType<T>;
        (a: Arg<T>): (...bs: RestArgs<T>) => ReturnType<T>;
    }
    interface CurriedR<T extends BinaryOperator> {
        (a: arg2<T>, b: arg1<T>): ReturnType<T>;
        (a: arg2<T>): (bs: arg1<T>) => ReturnType<T>;
    }
    type arg1<T extends BinaryOperator> = T extends (a: infer R, b: any) => any ? R : any;
    type arg2<T extends BinaryOperator> = T extends (a: any, b: infer R) => any ? R : any;
    export function curryD<T extends (...args: any[]) => any>(fn: T, arg_length?: number): (...bs: any[]) => any;
    export function curry<T extends AnyFunction>(fn: T): Curried<T>;
    export function curryr<T extends BinaryOperator>(fn: T): CurriedR<T>;
    export function head<T extends Iterable<any>>(iter: T): any;
    export function keys<T extends Object, Key extends keyof T>(obj: T): Key[];
    export const get: Curried<(<T extends Object>(key: string, obj: T) => any)>;
    export function extend<Target>(target: Target): <Source>(src: Source) => Target & Source;
    export function extend<Target, Source>(target: Target, src: Source): Target & Source;
    export const negate: <T extends AnyFunction>(fn: T) => (...args: T extends (...args: infer R) => any ? R : any) => boolean;
    export function go1<T, K>(a: T, fn: T extends Promise<infer Val> ? (val: Val) => K : (val: T) => K): T extends Promise<any> ? Promise<K> : K;
    export function go2<Acc, Val, Result>(acc: Acc, a: Val, fn: Acc extends Promise<infer R> ? (acc: R, val: Val) => Result : (acc: Acc, val: Val) => Result): Promise<any> | Result;
    interface pipe {
        <Arg extends Array<any>, R1, R2>(fn1: (...args: Arg) => R1, fn2: (arg: R1) => R2): (arg: Arg extends Array<infer K> ? K : Arg) => R2;
        <Arg extends Array<any>, R1, R2, R3>(fn1: (...args: Arg) => R1, fn2: (arg: R1) => R2, fn3: (arg: R2) => R3): (arg: Arg extends Array<infer K> ? K : Arg) => R3;
        <Arg extends Array<any>, R1, R2, R3, R4>(fn1: (...args: Arg) => R1, fn2: (arg: R1) => R2, fn3: (arg: R2) => R3, fn4: (arg: R3) => R4): (arg: Arg extends Array<infer K> ? K : Arg) => R3;
        <Arg extends Array<any>, R1, R2, R3, R4, R5>(fn1: (...args: Arg) => R1, fn2: (arg: R1) => R2, fn3: (arg: R2) => R3, fn4: (arg: R3) => R4, fn5: (arg: R4) => R5): (arg: Arg extends Array<infer K> ? K : Arg) => R3;
        (...args: Array<any>): any;
    }
    export const pipe: pipe;
    interface go {
        <Iter extends Iterable<any>, R1>(iter: Iter, fn1: (arg: Iter) => R1): R1;
        <Iter extends Iterable<any>, R1, R2>(iter: Iter, fn1: (arg: Iter) => R1, fn2: (arg: R1) => R2): R2;
        <Iter extends Iterable<any>, R1, R2, R3>(iter: Iter, fn1: (arg: Iter) => R1, fn2: (arg: R1) => R2, fn3: (arg: R2) => R3): R3;
        <Iter extends Iterable<any>, R1, R2, R3, R4>(iter: Iter, fn1: (arg: Iter) => R1, fn2: (arg: R1) => R2, fn3: (arg: R2) => R3, fn4: (arg: R3) => R4): R4;
        <Iter extends Iterable<any>, R1, R2, R3, R4, R5>(iter: Iter, fn1: (arg: Iter) => R1, fn2: (arg: R1) => R2, fn3: (arg: R2) => R3, fn4: (arg: R3) => R4, fn5: (arg: R4) => R5): R5;
    }
    export const go: go;
    export const catchNoop: <T extends Iterable<any>>(iter: T) => Generator<Promise<any> | [number, any], void, unknown>;
    interface reduce {
        <Result, Val>(fn: (acc: Val, val: Val) => Result): <Iter extends Iterable<Val>>(iter: Iter) => Result;
        <Iter extends Iterable<any>, Result>(fn: Iter extends Iterable<infer Yield> ? Yield extends Promise<infer R> ? (acc: R, val: R) => Result : (acc: Yield, val: Yield) => Result : (acc: Iter, val: Iter) => Result, acc: Iter): Result;
        <Acc, Iter extends Iterable<any>, Result>(fn: Iter extends Iterable<infer Yield> ? Yield extends Promise<infer R> ? (acc: Acc, val: R) => Result : (acc: Acc, val: Yield) => Result : (acc: Acc, val: Acc) => Result, acc: Acc, iter: Iter): Result;
    }
    export const reduce: reduce;
    export {};
}
export {};
