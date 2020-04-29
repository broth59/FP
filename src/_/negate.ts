export function negate<T extends AnyFunction>(fn: T) {
    type arg = T extends (...args: infer R) => any ? R : any
    return function (...args: arg) {
        return !fn(...args)
    }
}
