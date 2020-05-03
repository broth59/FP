interface tap {
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, key?: number) => void): (iter: Iterable<Val>) => Generator<Val>;
    <Val>(fn: (val: Val extends Promise<infer R> ? R : Val, key?: number) => void, iter: Iterable<Val>): Generator<Val>;
}
export declare const tap: tap;
export {};
