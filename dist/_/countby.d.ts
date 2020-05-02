interface countby {
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<Iterable<{
        [index: string]: number;
    }>> : Iterable<{
        [index: string]: number;
    }>;
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<Iterable<{
        [index: string]: number;
    }>> : Iterable<{
        [index: string]: number;
    }>;
    <Val, Result>(fn: Val extends Promise<infer R> ? (val: R) => Result : (val: Val) => Result, iter: Iterable<Val>): Val extends Promise<any> ? Promise<Iterable<{
        [index: string]: number;
    }>> : Iterable<{
        [index: string]: number;
    }>;
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Val extends Promise<any> ? Promise<Iterable<{
        [index: string]: number;
    }>> : Iterable<{
        [index: string]: number;
    }>;
}
export declare const count: (key: any, obj: any) => any;
export declare const countby: countby;
export {};
