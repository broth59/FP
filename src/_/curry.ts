interface Curried<T extends AnyFunction>{
    (a:Arg<T>, ...bs:RestArgs<T>): ReturnType<T>
    (a:Arg<T>): (...bs:RestArgs<T>) => ReturnType<T>      
}

interface CurriedR<T extends BinaryOperator>{
    (a:Arg2<T>, b:Arg1<T>): ReturnType<T>
    (a:Arg2<T>): (bs:Arg1<T>) => ReturnType<T>      
}


export function curryD<T extends (...args:any[])=>any>(fn:T, arg_length?:number){
    arg_length || ( arg_length = fn.length )
    return function(...bs:any[]){
        const args = arguments
        arg_length! -= bs.length 
        return arg_length == 0 ? fn(...bs) : curryD((...bs:any[]) => fn(...args, ...bs), arg_length)
    }
}

export function curry<T extends AnyFunction>(fn:T):Curried<T>{
    return function(a:Arg<T>, ...bs:RestArgs<T>){
        return bs.length ? fn(a,...bs) : (...bs:RestArgs<T>)=>fn(a,...bs) 
    }
}

export function curryr<T extends BinaryOperator>(fn:T):CurriedR<T>{
    type arg1 = T extends (a:infer R, b:any)=>any ? R : any 
    type arg2 = T extends (a:any, b:infer R)=>any ? R : any 
    return function(arg2:arg2, arg1?:arg1){
        return arg2 ? fn(arg1, arg2) : (arg1:arg1)=>fn(arg1,arg2)
    }
}
