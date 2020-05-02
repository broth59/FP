interface takeAll {
    <Val>(iter: Iterable<Val>): Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Iterable<Val>;
}
export declare const takeAll: takeAll;
export {};
