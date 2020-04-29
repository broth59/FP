import * as _ from "../_"
import * as L from "../L"

interface forEach{
    <Val>(fn:(arg:Val)=>void) : (iter:Iterable<Val>) => void
    <Val>(fn:(arg:Val)=>void, iter:Iterable<Val>) : void
}

export const forEach:forEach = _.curry(function (f,iter){
        for(const [key,val] of L.each(iter)) {
            if(val)f(val,key)
        }
    })