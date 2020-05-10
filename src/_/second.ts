import * as L from '../L'

export function second<Val>(iter: Iterable<Val>): Val
export function second(iter: any): any
export function second<Val>(iter: Iterable<Val>) {
    const iterable = L.each(iter)
    iterable.next()
    return iterable.next().value[1]
}
