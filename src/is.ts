import * as _ from './_'

export function isPromise(value: any | Promise<any>): value is Promise<any> {
    return value instanceof Promise
}

export function isIterable(iter: Iterable<any> | Object): iter is Iterable<any> {
    return iter && (iter as Iterable<any>)[Symbol.iterator] !== undefined
}

export function isIterator(iter: Iterator<any> | Object): iter is Iterator<any> {
    return iter && typeof iter.next === 'function' 
}

export function isObject(mist: any): mist is Object {
    return typeof mist === 'object'
}
