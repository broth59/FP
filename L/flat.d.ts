declare type Deep<T extends Iterable<any>> = T extends Iterable<infer U> ? U : T;
export declare function flat<Iter extends Iterable<any>, Val>(iter: Iter): Deep<Iter> extends Promise<Iterable<infer R1>> ? Simul<R1> extends Promise<any> ? Promise<Generator<DeepPromise<R1>>> : Promise<Generator<R1>> : Deep<Iter> extends Iterable<infer R1> ? Simul<R1> extends Promise<any> ? Promise<Generator<DeepPromise<R1>>> : Generator<R1> : Generator<Deep<Deep<Iter>>>;
export {};
