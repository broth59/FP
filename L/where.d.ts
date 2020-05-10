interface where {
    <Val, Condition extends Val extends Promise<infer R> ? {
        [Key in keyof Partial<R>]: Partial<R>[Key];
    } : {
        [Key in keyof Partial<Val>]: Partial<Val>[Key];
    }>(attr: Condition): (iter: Iterable<Val>) => Generator<Val>;
    <Val, Condition extends Val extends Promise<infer R> ? {
        [Key in keyof Partial<R>]: Partial<R>[Key];
    } : {
        [Key in keyof Partial<Val>]: Partial<Val>[Key];
    }>(attr: Condition, iter: Iterable<Val>): Generator<Val>;
}
export declare const where: where;
export {};
