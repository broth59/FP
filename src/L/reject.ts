
import * as _ from "../_"
import * as L from "../L"

export function reject<Val> (predi:(arg:Val)=>boolean) : (iter:Iterable<Val>) => Iterable<Val> | []    
export function reject<Val> (predi:(arg:Val)=>boolean, iter:Iterable<Val>) : Iterable<Val> | []
export function reject(predi:any, iter?:any) {
    return L.filter(_.negate(predi))(iter) as any
} 