import {isPromise} from '../is';

export function go1<T, K>(a:T, fn:T extends Promise<infer Val> ? (val:Val)=>K : (val:T)=>K):
        T extends Promise<any>? Promise<K>: K {
        return isPromise(a) ? a.then(fn) : fn(a) as any
    }