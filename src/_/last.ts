export function last<T extends Iterable<any>>(iter:T):T extends Iterable<infer R> ? R : any
export function last(iter:any):any
export function last<T extends Iterable<any>>(iter:T){ 
    let curr;
    for(const value of iter){
        curr = value
    }    
    return curr
}
