interface forEach {
    <Val>(fn: (arg: Val) => void): (iter: Iterable<Promise<Val> | Val>) => void;
    <Val>(fn: (arg: Val) => void, iter: Iterable<Promise<Val> | Val>): void;
}
export declare const forEach: forEach;
export {};
