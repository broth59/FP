interface take {
    <Val>(limit: number): (iter: Iterable<Val>) => Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Iterable<Val>;
    <Val>(limit: number, iter: Iterable<Val>): Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Iterable<Val>;
}
export declare const take: take;
export {};
