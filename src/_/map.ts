import * as _ from "../_"
import * as L from "../L"

interface map{
    <Val,Result>(mapper:(val:Val, idx?:number) => Result) : <Iter extends Iterable<Val>>(iter:Iter)=>Iter
    <Iter extends Iterable<any>,Result>(mapper:(val:Iter extends Iterable<infer Val> ? Val : any, idx?:number) => Result, iter:Iter) : Iter
}
export const map:map = _.curry(function (mapper, iter){
    return _.pipe(L.map(mapper), _.takeAll)(iter)
})