import * as _ from './_'

export function isPromise(value: any | Promise<any>): value is Promise<any> {
    return value instanceof Promise
}

export function isIter(iter: Iterable<any> | Object): iter is Iterable<any> {
    return (iter as Iterable<any>)[Symbol.iterator] !== undefined
}

export function isObject(mist: any): mist is Object {
    return typeof mist === 'object'
}
