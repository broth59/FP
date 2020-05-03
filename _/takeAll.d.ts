interface takeAll {
    <Val>(iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<Val>>> : Iterable<Val>;
}
export declare const takeAll: takeAll;
export {};
