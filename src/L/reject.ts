import * as _ from '../_'
import * as L from '../L'

interface reject {
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any): (
        iter: Iterable<Val>
    ) => Generator<Val extends Promise<any> ? Promise<Val> : Val>
    <Val>(predi: (arg: Val extends Promise<infer R> ? R : Val) => any, iter: Iterable<Val>): Generator<
        Val extends Promise<any> ? Promise<Val> : Val
    >
}
export const reject: reject = _.curry(function (predi: any, iter: any) {
    return L.filter(_.negate(predi))(iter) 
})
