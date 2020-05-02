export declare function go1<Val, Result>(a: Promise<Val> | Val, fn: (val: Val) => Result): Promise<Result> | Result;
