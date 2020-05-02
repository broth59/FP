interface uniq {
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<Iterable<{
        [index: string]: Array<Val>;
    }>> : Iterable<{
        [index: string]: Array<Val>;
    }>;
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<Iterable<{
        [index: string]: Array<Val>;
    }>> : Iterable<{
        [index: string]: Array<Val>;
    }>;
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result, iter: Iterable<Val>): Val extends Promise<any> ? Promise<Iterable<{
        [index: string]: Array<Val>;
    }>> : Iterable<{
        [index: string]: Array<Val>;
    }>;
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Val extends Promise<any> ? Promise<Iterable<{
        [index: string]: Array<Val>;
    }>> : Iterable<{
        [index: string]: Array<Val>;
    }>;
}
export declare const uniq: uniq;
export {};
