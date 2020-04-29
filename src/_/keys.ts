import { isObject } from '../is'

export function keys<T extends Object, Key extends keyof T>(obj: T): Array<Key>
export function keys<T>(obj: T): Array<any>
export function keys<T extends any | Object, Key extends keyof T>(obj: T) {
    if (isObject(obj)) {
        const keys: Array<Key> = []
        for (const key of Object.keys(obj)) {
            keys.push(key as Key)
        }
        return keys
    } else {
        return []
    }
}
