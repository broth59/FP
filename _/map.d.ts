interface map {
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result): (iter: Iterable<Val>) => Iterable<Val extends Promise<any> ? Promise<DeepPromise<Result>> : Result>;
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result, iter: Iterable<Val>): Iterable<Val extends Promise<any> ? Promise<DeepPromise<Result>> : Result>;
}
export declare const map: map;
export {};
