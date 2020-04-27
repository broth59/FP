import {nop,noop} from "../symbol"
import * as L from "../L"

export const catchNoop = function *<T extends Iterable<any>>(iter:T){
    for(const [key,val] of L.each(iter)){
        if(val instanceof Promise) yield val.catch(e => e == nop ? noop : Promise.reject(e))
        else yield val
    }
}

