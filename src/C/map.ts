import * as L from '../L'
import * as _ from '../_'
import * as C from '../C'
import { nop } from '../symbol'

interface map {
    <Val, Result>(mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result): (
        iter: Iterable<Val>
    ) => Promise<Iterable<Val extends Promise<any> ? Promise<Result> : Result>>
    <Val, Result>(
        mapper: (val: Val extends Promise<infer R> ? R : Val, idx?: number) => Result,
        iter: Iterable<Val>
    ): Promise<Iterable<Val extends Promise<any> ? Promise<Result> : Result>>
}

export const map:map = _.curry(function(mapper,iter){
    const pool = []
    for(const [key,val] of L.each(iter)){
        if(val instanceof Promise){ 
            pool.push(val.then(val => mapper(val,key)))     
        }else pool.push(new Promise(res=>res(mapper(val,key))))
    }
    return Promise.all([...pool]) as any
})