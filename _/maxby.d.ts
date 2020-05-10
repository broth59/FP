interface maxby {
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => any): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<DeepPromise<Val>> : Val;
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => any, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<DeepPromise<Val>> : Val;
}
export declare const maxby: maxby;
export {};
