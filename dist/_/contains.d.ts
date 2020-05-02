interface contains {
    <Val>(val: Val): (iter: Iterable<Promise<Val> | Val>) => boolean;
    <Val>(val: Val, iter: Iterable<Promise<Val> | Val>): boolean;
}
export declare const contains: contains;
export {};
