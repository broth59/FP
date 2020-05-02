interface map {
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result): (iter: Iterable<Val>) => Promise<Iterable<Val extends Promise<any> ? Promise<Result> : Result>>;
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result, iter: Iterable<Val>): Promise<Iterable<Val extends Promise<any> ? Promise<Result> : Result>>;
}
export declare const map: map;
export {};
