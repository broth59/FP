export declare namespace L {
    export const range: (start: number, stop?: number | undefined) => Generator<number, void, unknown>;
    export const each: <T extends Object | Iterable<any>, Key extends keyof T>(iter: T) => T extends Iterable<infer Yield> ? Generator<[number, Yield][], any, unknown> : [Key, T[Key]][];
    interface map {
        <Val, Result>(mapper: (val: Val, idx?: number) => Result): (iter: Iterable<Val>) => Iterable<Result>;
        <Val, Result>(mapper: (val: Val, idx?: number) => Result, iter: Iterable<Val>): Iterable<Result>;
    }
    export const map: map;
    export {};
}
