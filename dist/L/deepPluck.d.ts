interface deepPluck {
    <Val>(key: string): (iter: Iterable<Val>) => Iterable<any>;
    <Val>(key: string, iter: Iterable<Val>): Iterable<any>;
}
export declare const deepPluck: deepPluck;
export {};
