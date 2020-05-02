interface takeUntil {
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any): (iter: Iterable<Val>) => Iterable<Val extends Promise<any> ? Promise<Val> : Val>;
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Promise<Val> | Val>): Iterable<Val extends Promise<any> ? Promise<Val> : Val>;
}
export declare const takeUntil: takeUntil;
export {};
