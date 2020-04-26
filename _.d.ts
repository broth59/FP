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
    export const catchNoop: <T extends Iterable<any>>(iter: T) => Generator<Promise<any> | [number, any], void, unknown>;
    export {};
}
export {};
