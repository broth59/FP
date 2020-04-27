import * as _ from "../_"
import * as L from "../L"
import {nop, noop} from "../symbol"

interface take{
    (limit:number) : <Iter extends Iterable<any>>(iter:Iter) => Iter | []
    <Iter extends Iterable<any>>(limit:number, iter:Iter) : Iter | []
}

export const take:take = _.curry(function take(limit, iter){
    let res:any[] = []
    let init_count = 0
    iter = L.each(iter)
    iter.return = null
    return function recurr():any{
        for(const [key,val] of iter){
            if(val instanceof Promise) {
                return val.then(a => {
                    if([nop,noop].includes(a)) return res.length == limit ? res : recurr()
                    else return (res.push(a), res).length == limit ? res : recurr()
                }).catch(e => [nop,noop].includes(e) ? recurr() : Promise.reject(e))
            }else{
                res.push(val)
                if( ++init_count == limit) return res
            }
        }
        return res
    }()
}) 
