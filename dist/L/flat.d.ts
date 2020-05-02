declare type Deep<T extends Iterable<any>> = T extends Iterable<infer U> ? U : T;
export declare function flat<Iter extends Iterable<any>, Val>(iter: Iter): Deep<Iter> extends Promise<Iterable<infer R1>> ? R1 extends Promise<infer R2> ? Promise<Generator<R2>> : Promise<Generator<R1>> : Deep<Iter> extends Iterable<infer R1> ? R1 extends Promise<infer R2> ? Promise<Generator<R2>> : Generator<R1> : Generator<Deep<Deep<Iter>>>;
export {};
