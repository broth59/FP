interface tap {
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, key?: number) => void): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>;
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, key?: number) => void, iter: Iterable<Val>): Iterable<Val>;
}
export declare const tap: tap;
export {};
