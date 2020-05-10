interface reject {
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any): (iter: Iterable<Val>) => Generator<Val extends Promise<any> ? Promise<Val> : Val>;
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Generator<Val extends Promise<any> ? Promise<Val> : Val>;
}
export declare const reject: reject;
export {};
