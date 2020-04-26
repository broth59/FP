export interface hi {
    to: string;
}
export interface AnyFunction {
    (...args: any[]): any;
}
export interface BinaryOperator {
    (adam: any, eve: any): any;
}
export declare type Arg<T extends AnyFunction> = T extends (arg: infer R, ...args: any[]) => ReturnType<T> ? R : any;
export declare type Args<T extends AnyFunction> = T extends (...args: infer R) => any ? R : Array<any>;
export declare type RestArgs<T extends AnyFunction> = T extends (arg: Arg<T>, ...args: infer R) => any ? R : Array<any>;
