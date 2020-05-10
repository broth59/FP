interface filter {
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any): (iter: Iterable<Val>) => Promise<Iterable<Val>>;
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Promise<Iterable<Val>>;
}
export declare const filter: filter;
export {};
