export declare namespace L {
    const each: <T extends Object | Iterable<any>, Key extends keyof T>(iter: T) => T extends Iterable<infer Yield> ? Generator<[number, Yield][], any, unknown> : [Key, T[Key]][];
}
