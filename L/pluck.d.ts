interface pluck {
    <Val>(key: Val extends Promise<infer R> ? keyof R : keyof Val): (iter: Iterable<Val>) => Generator<Val extends Promise<infer R> ? Promise<R[keyof R]> : Val[keyof Val]>;
    <Val>(key: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Generator<Val extends Promise<infer R> ? Promise<R[keyof R]> : Val[keyof Val]>;
}
export declare const pluck: pluck;
export {};
