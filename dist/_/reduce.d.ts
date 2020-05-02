interface reduce {
    <Result, Val>(fn: (acc: Val extends Promise<infer R> ? R : Val, val: Val) => Result): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<Result> : Result;
    <Result, Val>(fn: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => Result, acc: Iterable<Val>): Val extends Promise<any> ? Promise<Result> : Result;
    <Result, Val, Acc>(fn: (acc: Acc, val: Val extends Promise<infer R> ? R : Val) => Result, acc: Acc, iter: Iterable<Val>): Val extends Promise<any> ? Promise<Result> : Result;
}
export declare const reduce: reduce;
export {};
