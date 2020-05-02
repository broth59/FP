interface every {
    <Val>(predicate: (val: Val, key?: number) => any): (iter: Iterable<Promise<Val> | Val>) => boolean;
    <Val>(mapper: (val: Val, key?: number) => any, iter: Iterable<Promise<Val> | Val>): boolean;
}
export declare const every: every;
export {};
