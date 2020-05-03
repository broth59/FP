interface map {
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result): (iter: Iterable<Val>) => Promise<Iterable<Result>>;
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result, iter: Iterable<Val>): Promise<Iterable<Result>>;
}
export declare const map: map;
export {};
