interface contains {
    <Val, Fix extends Val extends Promise<infer R> ? R : Val>(val: Fix): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<boolean> : boolean;
    <Val, Fix extends Val extends Promise<infer R> ? R : Val>(val: Fix, iter: Iterable<Val>): Val extends Promise<any> ? Promise<boolean> : boolean;
}
export declare const contains: contains;
export {};
