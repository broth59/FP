import { isIter } from "../is"
import * as _ from "../_"

export function each <T extends Object|Iterable<any>, Key extends keyof T>(iter:T)
    :T extends Iterable<infer Yield> ? Generator<Array<[number,Yield]>,any,unknown>:Array<[Key,T[Key]]>{
    return isIter(iter) ?
        (function *(){
            let index:number = 0
            for(const val of iter){
                yield [index++, val]
            }
        })()
        :(function(){
            const keys = _.keys(iter)
            const res = []
            for(const key of keys){
                res.push([key, iter[key]])
            }
            return res
        })() as any
}