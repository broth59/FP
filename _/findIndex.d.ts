interface findIndex {
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val, key?: number) => any): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<number> : number;
    <Val>(mapper: (val: Val extends Promise<infer R> ? R : Val, key?: number) => any, iter: Iterable<Promise<Val> | Val>): Val extends Promise<any> ? Promise<number> : number;
}
export declare const findIndex: findIndex;
export {};
