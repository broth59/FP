export function head<Val>(iter: Iterable<Val>): Val
export function head(iter: any): any
export function head<Val>(iter: Iterable<Val>) {
    return iter[Symbol.iterator]().next().value
}
