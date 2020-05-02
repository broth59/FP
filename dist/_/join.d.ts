interface join {
    (seperator: string, iter: Iterable<any>): string;
    (seperator: string): (iter: Iterable<any>) => string;
}
export declare const join: join;
export {};
