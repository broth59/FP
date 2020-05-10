export declare function go2<Acc, Val, Result>(acc: Acc, a: Val, fn: Acc extends Promise<infer R> ? (acc: R, val: Val) => Result : (acc: Acc, val: Val) => Result): Promise<any> | Result;
