interface some {
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val, key?: number) => any): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<boolean> : boolean;
    <Val>(mapper: (val: Val extends Promise<infer R> ? R : Val, key?: number) => any, iter: Iterable<Val>): Val extends Promise<any> ? Promise<boolean> : boolean;
}
export declare const some: some;
export {};
