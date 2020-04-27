import * as L from "../L"
import * as _ from "../_"
import { isIter } from "@src/is";

interface deepPluck{
    <Iter extends Iterable<any>>(key:string, iter:Iter) : Iterable<any>
}

export const deepPluck:deepPluck = _.curry(function (key, iter){
    const gets = _.reduce((keys:any,key:any)=>{
        keys.push(_.get(key))
        return keys
    }, new Array(), key.split('.'))
    return  _.go(L.map(val=>
                    _.reduce((plucked:any,get:any)=>{
                        if(plucked && plucked[Symbol.iterator]){                       
                            return _.go(_.map((item:any)=>get(item), plucked),
                                            _.flat)
                        }else{
                            return get(plucked)
                        }}, val, gets)) (iter),
                L.flat)
})