interface filter {
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => any): (iter: Iterable<Val>) => Generator<Val>;
    <Val>(predicate: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => any, iter: Iterable<Val>): Generator<Val>;
}
export declare const filter: filter;
export {};
