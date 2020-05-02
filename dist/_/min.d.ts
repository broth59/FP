interface min {
    <Val>(predicate: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => any): (iter: Iterable<Val>) => Val;
    <Val>(predicate: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Val;
}
export declare const min: min;
export {};
