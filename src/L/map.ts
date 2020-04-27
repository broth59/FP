import * as _ from "../_"
import * as L from "../L"

interface map{
    <Val,Result>(mapper:(val:Val, idx?:number) => Result) : <Iter extends Iterable<Val>>(iter:Iter)=>Generator<Val>
    <Iter extends Iterable<any>,Result>(
        mapper:(val:Iter extends Iterable<infer Val> ? Val : any, idx?:number) => Result, 
        iter:Iter ) : Iter extends Iterable<infer Val> ? Generator<Val,Val,any> : Generator<any>
}
export const map:map = _.curry(function *(mapper:any, iter:any){
    for(const [key,val] of L.each(iter)){
        yield _.go1(val, (val:any)=>mapper(val, key))
    }
}) as any

const b = _.map(x=>x,[1,3])
const c = map(x=>x,[1,3])