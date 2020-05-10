import * as L from '../L'

export function head<Val>(iter: Iterable<Val>): Val
export function head(iter: any): any
export function head<Val>(iter: Iterable<Val>) {
    const iterable = L.each(iter)
    return iterable.next().value[1]
}
