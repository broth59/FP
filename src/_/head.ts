export function head<T extends Iterable<any>>(iter:T):T extends Iterable<infer R> ? R : any
export function head(iter:any):any
export function head<T extends Iterable<any>>(iter:T){
    return iter[Symbol.iterator]().next().value
}