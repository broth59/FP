import * as L from '../L';
import * as _ from '../_';

interface filter{
    <Val> (predi:(arg:Val)=>any) : <Iter extends Iterable<Val>>(iter:Iter) => Iter    
    <Iter extends Iterable<any>> (predi:(arg:Iter extends Iterable<infer Val> ? Val : any)=>any, iter:Iter) : Iter
}

export const filter:filter = _.curry(function (predicate, iter){
    return _.go(iter, L.filter(predicate), _.takeAll) 
}) as any