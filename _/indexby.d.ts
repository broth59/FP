interface indexby {
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<{
        [index: string]: Array<DeepPromise<Val>>;
    }> : {
        [index: string]: Array<Val>;
    };
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<{
        [index: string]: Array<DeepPromise<Val>>;
    }> : {
        [index: string]: Array<Val>;
    };
}
export declare const indexby: indexby;
export {};
