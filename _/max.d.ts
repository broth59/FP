interface max {
    <Val>(predicate: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => any): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<DeepPromise<Val>> : Val;
    <Val>(predicate: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<DeepPromise<Val>> : Val;
}
export declare const max: max;
export {};
