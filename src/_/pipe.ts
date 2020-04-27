import {} from "../_"

export function pipe<Arg extends Array<any>,R1,R2>(
    fn1:(...args:Arg)=>R1,fn2:(arg:R1)=>R2
) : (arg:Arg extends Array<infer K> ? K : Arg)=>R2;
export function pipe<Arg extends Array<any>,R1,R2,R3>(
    fn1:(...args:Arg)=>R1,fn2:(arg:R1)=>R2,fn3:(arg:R2)=>R3
) : (arg:Arg extends Array<infer K> ? K : Arg)=>R3;
export function pipe<Arg extends Array<any>,R1,R2,R3,R4>(
    fn1:(...args:Arg)=>R1,fn2:(arg:R1)=>R2,fn3:(arg:R2)=>R3,fn4:(arg:R3)=>R4
) : (arg:Arg extends Array<infer K> ? K : Arg)=>R3;
export function pipe<Arg extends Array<any>,R1,R2,R3,R4,R5>(
    fn1:(...args:Arg)=>R1,fn2:(arg:R1)=>R2,fn3:(arg:R2)=>R3,fn4:(arg:R3)=>R4,fn5:(arg:R4)=>R5
) : (arg:Arg extends Array<infer K> ? K : Arg)=>R3;
export function pipe(...args:Array<any>) : any;
export function pipe(...fns:Array<AnyFunction>){
return (iter:Iterable<any>) => _.reduce(_.go1, iter, fns)
}