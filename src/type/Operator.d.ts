
declare interface Object {
    [index:string]:any
}
declare interface AnyFunction {
    (...args:any[]) : any
}
declare interface BinaryOperator{
    (adam:any, eve:any) : any
}
declare type Arg<T extends AnyFunction> = T extends (arg:infer R, ...args:any[])=>ReturnType<T> ? R : any
declare type Args<T extends AnyFunction> = T extends (...args:infer R)=>any ? R : Array<any>
declare type RestArgs<T extends AnyFunction> = T extends (arg:Arg<T>,...args:infer R)=>any ? R : Array<any>

declare type Arg1<T extends BinaryOperator> = T extends (a:infer R, b:any)=>any ? R : any;
declare type Arg2<T extends BinaryOperator> = T extends (a:any, b:infer R)=>any ? R : any; 


declare interface Predicate{
    <T>(arg1:T) : boolean
    <T,K>(arg1:T, arg2:K) : boolean
}