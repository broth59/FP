interface deepPluck {
    <Val>(key: string): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<any>>> : any;
    <Val>(key: string, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<any>>> : any;
}
export declare const deepPluck: deepPluck;
export {};
