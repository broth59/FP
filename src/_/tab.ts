import * as _ from "../_"
import * as L from "../L"

interface tab{
    (fn:AnyFunction) : <Iter extends Iterable<any>>(iter:Iter) => Iter
    <Iter extends Iterable<any>> (fn:AnyFunction, iter:Iter) : Iter
}

export const tab:tab = _.curry(function tab(fn,iter){
    const res = []
    for(const [key,val] of L.each(iter)){
        if(val)res.push(fn(val,key))
    }
    return res as any
})