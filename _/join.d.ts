interface join {
    <Val>(seperator: string, iter: Iterable<Val>): Val extends Promise<any> ? Promise<string> : string;
    <Val>(seperator: string): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<string> : string;
}
export declare const join: join;
export {};
