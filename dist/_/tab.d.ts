interface tab {
    (fn: AnyFunction): <Iter extends Iterable<any>>(iter: Iter) => Iter;
    <Iter extends Iterable<any>>(fn: AnyFunction, iter: Iter): Iter;
}
export declare const tab: tab;
export {};
