import * as _ from "../_"
import * as L from "../L"

interface forEach{
    (fn:AnyFunction) : <Iter extends Iterable<any>>(iter:Iter) => void
    <Iter extends Iterable<any>> (fn:AnyFunction, iter:Iter) : void
}

export const forEach:forEach = _.curry(function (f,iter){
        for(const [key,val] of L.each(iter)) {
            if(val)f(val,key)
        }
    })