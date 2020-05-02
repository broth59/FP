interface find {
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val) => any): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<Val> : Val;
    <Val>(mapper: (val: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Val extends Promise<any> ? Promise<Val> : Val;
}
export declare const find: find;
export {};
