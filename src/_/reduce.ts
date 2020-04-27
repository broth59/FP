import * as _ from "../_";
import * as L from "../L"

interface reduce{
    <Result, Val>(
        fn:(acc:Val, val:Val)=>Result
    ):<Iter extends Iterable<Val>>(iter:Iter)=>Result
    <Iter extends Iterable<any>, Result>(
        fn:Iter extends Iterable<infer Yield> 
            ? Yield extends Promise<infer R> ? (acc:R, val:R) => Result : (acc:Yield, val:Yield) => Result
            : (acc:Iter, val:Iter)=>Result,
        acc:Iter):Result;
    <Acc, Iter extends Iterable<any>, Result>(
        fn:Iter extends Iterable<infer Yield> 
            ? Yield extends Promise<infer R> ? (acc:Acc, val:R) => Result : (acc:Acc, val:Yield) => Result
            : (acc:Acc, val:Acc)=>Result,
        acc:Acc, iter:Iter):Result;
}


export const reduce:reduce = _.curry(function reduce(fn:any,acc:any,iter?:any):any{
    //if(!acc)  return _.reduce(_.head(acc=[...f]), acc)
    if(!iter) {
        return reduce(fn, _.head(iter = _.catchNoop(acc)[Symbol.iterator]()), iter)
    }
    (iter as any).return = null
    return _.go1(acc, function recurr(acc:any):any{
        for(const [key,val] of L.each(iter)){
            acc = _.go2(acc, val, fn)
            if(acc instanceof Promise) return acc.then(recurr)
        }
        return acc
    })
})