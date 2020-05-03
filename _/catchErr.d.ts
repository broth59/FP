interface catchErr {
    <Val>(fn?: (e: Error, async?: Val) => Val extends Promise<infer R> ? void | R | Promise<R> : never): (iter: Iterable<Val>) => Generator<Val>;
    <Val>(fn: (e: Error, async?: Val) => Val extends Promise<infer R> ? void | R | Promise<R> : never, iter: Iterable<Val>): Generator<Val>;
}
export declare const catchErr: catchErr;
export {};
