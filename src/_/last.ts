export function last<Val>(iter: Iterable<Val>): Val
export function last(iter: any): any
export function last<Val>(iter: Iterable<Val>) {
    let curr
    for (const value of iter) {
        curr = value
    }
    return curr
}
