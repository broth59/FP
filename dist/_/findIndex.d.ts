interface findIndex {
    <Val>(predicate: (val: Val, key?: number) => any): (iter: Iterable<Promise<Val> | Val>) => number;
    <Val>(mapper: (val: Val, key?: number) => any, iter: Iterable<Promise<Val> | Val>): number;
}
export declare const findIndex: findIndex;
export {};
