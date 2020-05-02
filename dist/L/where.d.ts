interface where {
    <Val, Part extends Partial<Val>>(attr: {
        [Key in keyof Part]: Part[Key];
    }): (iter: Iterable<Promise<Val> | Val>) => Generator<Val>;
    <Val, Part extends Partial<Val>>(attr: {
        [Key in keyof Part]: Part[Key];
    }, iter: Iterable<Val>): Generator<Val>;
}
export declare const where: where;
export {};
