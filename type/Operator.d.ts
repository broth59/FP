declare interface AnyFunction {
    (...args: any[]): any;
}
declare interface BinaryOperator {
    (adam: any, eve: any): any;
}
declare type Arg<T extends AnyFunction> = T extends (arg: infer R, ...args: any[]) => ReturnType<T> ? R : any;
declare type Args<T extends AnyFunction> = T extends (...args: infer R) => any ? R : Array<any>;
declare type RestArgs<T extends AnyFunction> = T extends (arg: Arg<T>, ...args: infer R) => any ? R : Array<any>;

