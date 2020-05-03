interface reduce {
    <Result, Val>(fn: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => Result): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<Result> : Val;
    <Result, Val>(fn: (acc: Val extends Promise<infer R> ? R : Val, val: Val extends Promise<infer R> ? R : Val) => Result, acc: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Result> : Val;
    <Result, Val, Acc>(fn: (acc: Acc, val: Val extends Promise<infer R> ? R : Val) => Result, acc: Acc, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Result> : Val;
}
export declare const reduce: reduce;
export {};
