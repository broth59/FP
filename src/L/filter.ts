import * as L from '../L';
import * as _ from '../_';
import { nop } from "../symbol"

interface filter{
    <Val> (predi:(arg:Val)=>any) : <Iter extends Iterable<Val>>(iter:Iter) => Generator<Val>    
    <Iter extends Iterable<any>> (
        predi:(arg:Iter extends Iterable<infer Val> ? Val : any)=>any, 
        iter:Iter) : Iter extends Iterable<infer Val> ? Generator<Val,Val,any> : Generator<any>
}

export const filter:filter = _.curry(function *(predicate, iter){
    for(const [key,val] of L.each(iter)){
        const judge = _.go1(val, predicate)
        if(judge instanceof Promise) {
            yield judge.then(c => c ? val : Promise.reject(nop))
        }else if(predicate(val)) yield val
    }
}) as any


