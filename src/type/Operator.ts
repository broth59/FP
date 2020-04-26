
export interface hi{
    to:string
}

export interface AnyFunction {
    (...args:any[]) : any
}
export interface BinaryOperator{
    (adam:any, eve:any) : any
}
export type Arg<T extends AnyFunction> = T extends (arg:infer R, ...args:any[])=>ReturnType<T> ? R : any
export type Args<T extends AnyFunction> = T extends (...args:infer R)=>any ? R : Array<any>
export type RestArgs<T extends AnyFunction> = T extends (arg:Arg<T>,...args:infer R)=>any ? R : Array<any>

// export type RestArgs<T extends AnyFunction, Applied> 
//     = T extends (arg:Applied,...args:infer R)=>any ? R : Array<any>  

