interface deepPluck {
    <Val>(key: string): (iter: Iterable<Val>) => Generator<Val extends Promise<any> ? Promise<any> : any>;
    <Val>(key: string, iter: Iterable<Val>): Generator<Val extends Promise<any> ? Promise<any> : any>;
}
export declare const deepPluck: deepPluck;
export {};
