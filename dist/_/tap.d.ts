interface tap {
    <Val>(fn: (val: Val, key?: number) => void): (iter: Iterable<Promise<Val> | Val>) => Iterable<Promise<Val> | Val>;
    <Val>(fn: (val: Val, key?: number) => void, iter: Iterable<Promise<Val> | Val>): Iterable<Promise<Val> | Val>;
}
export declare const tap: tap;
export {};
