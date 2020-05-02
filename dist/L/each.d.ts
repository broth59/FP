export declare function each<T extends Object | Iterable<any>, Key extends keyof T>(iter: T): T extends Iterable<infer Yield> ? Generator<Array<[number, Yield]>, any, unknown> : Array<[Key, T[Key]]>;
