import * as _ from "../_"
import * as L from "../L"


export function range(start:number,stop?:number):Array<number>{
        return _.go(L.range(start,stop),_.takeAll) as any
}
