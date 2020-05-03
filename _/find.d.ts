interface find {
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val, index?: number) => any): (iter: Iterable<Val>) => Val extends Promise<Val> ? Promise<DeepPromise<Val>> : Val;
    <Val>(mapper: (val: Val extends Promise<infer R> ? R : Val, index?: number) => any, iter: Iterable<Val>): Val extends Promise<Val> ? Promise<DeepPromise<Val>> : Val;
}
export declare const find: find;
export {};
