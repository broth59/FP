interface uniq {
    <Val, Result>(fn: (val: Val extends Promise<infer R> ? R : Val) => Result): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>;
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>;
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>;
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>;
}
export declare const uniq: uniq;
export {};
