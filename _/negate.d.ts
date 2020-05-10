export declare function negate<T extends AnyFunction>(fn: T): (...args: T extends (...args: infer R) => any ? R : any) => boolean;
