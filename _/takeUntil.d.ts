interface takeUntil {
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any): (iter: Iterable<Val>) => Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Iterable<Val>;
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Val extends Promise<infer Kernel> ? Promise<Iterable<Kernel>> : Iterable<Val>;
}
export declare const takeUntil: takeUntil;
export {};
