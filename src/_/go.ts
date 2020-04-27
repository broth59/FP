import * as _ from "../_"


export function go<Iter extends Iterable<any>|Promise<Iterable<any>>, R1>(
        iter:Iter, fn1:(arg:Iter extends Promise<Iterable<infer Y1>> ? Y1 : Iter)=>R1): R1
export function go<Iter extends Iterable<any>, R1,R2>(
        iter:Iter, fn1:(arg:Iter extends Promise<Iterable<infer Y1>> ? Y1 : Iter)=>R1, fn2:(arg:R1 extends Promise<infer P1> ? P1 : R1)=>R2):R2
export function go<Iter extends Iterable<any>, R1,R2,R3>(
        iter:Iter, fn1:(arg:Iter)=>R1,fn2:(arg:R1)=>R2,fn3:(arg:R2)=>R3): R3
export function go<Iter extends Iterable<any>, R1,R2,R3,R4>(
        iter:Iter, fn1:(arg:Iter)=>R1,fn2:(arg:R1)=>R2,fn3:(arg:R2)=>R3,fn4:(arg:R3)=>R4): R4
export function go<Iter extends Iterable<any>, R1,R2,R3,R4,R5>(
        iter:Iter, fn1:(arg:Iter)=>R1,fn2:(arg:R1)=>R2,fn3:(arg:R2)=>R3,fn4:(arg:R3)=>R4,fn5:(arg:R4)=>R5): R5
export function go(iter:Iterable<any>,...fns:any){
    return _.pipe(...fns)(iter)   
}