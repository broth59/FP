import * as L from "../L"
import * as _ from "../_"

interface get{
    <T extends Object>(key:string) : (obj:T) => any
    <T extends Object>(key:string, obj:T) : any
}

export const get:get =  _.curry(function get<T extends Object>(key:string, obj:T):any{
    const keys:string[] = key.split('.')
    const first = keys.shift() 
    return keys.reduce((acc,key)=>{
        if(acc instanceof Object) return acc[key]
        else return acc 
    },obj[first!]) ?? undefined
})