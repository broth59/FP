import * as L from "../L"
import * as _ from "../_"
import { isIter } from "@src/is";

interface pluck{
    <Iter extends Iterable<any>>(
        key:Iter extends Iterable<infer R> ? keyof R : string) : (iter:Iter) => Iter extends Iterable<infer R> ? Generator<R[keyof R]> : Generator<any>
    <Iter extends Iterable<any>>(
        key:Iter extends Iterable<infer R> ? keyof R : string, 
        iter:Iter) : Iter extends Iterable<infer R> ? Generator<R[keyof R]> : Generator<any>
}

export const pluck:pluck = _.curry(function (key, iter){
    return L.map(val=>_.get(key,val as Object))(iter);
})




