interface groupby {
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<Iterable<{
        [index: string]: Array<DeepPromise<Val>>;
    }>> : Iterable<{
        [index: string]: Array<Val>;
    }>;
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (iter: Iterable<Val>) => Simul<Val> extends Promise<any> ? Promise<Iterable<{
        [index: string]: Array<Val>;
    }>> : Iterable<{
        [index: string]: Array<Val>;
    }>;
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Iterable<{
        [index: string]: Array<DeepPromise<Val>>;
    }>> : Iterable<{
        [index: string]: Array<Val>;
    }>;
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Iterable<{
        [index: string]: Array<DeepPromise<Val>>;
    }>> : Iterable<{
        [index: string]: Array<Val>;
    }>;
}
export declare const push: (key: any, obj: any, val: any) => any;
export declare const groupby: groupby;
export {};
