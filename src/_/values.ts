import * as L from "../L"
import * as _ from "."

export function values<Iter extends Iterable<any>>(iter:Iter):Iter|[]{
    type Val = Iter extends Iterable<infer R> ? R : any
    return L.map<Val,Val>(_.identity, iter) as any
}

