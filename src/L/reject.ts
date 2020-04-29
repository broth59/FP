import * as _ from '../_'
import * as L from '../L'

interface reject {
    <Val>(predi: (arg: Val) => boolean): (iter: Iterable<Val>) => Generator<Val>
    <Val>(predi: (arg: Val) => boolean, iter: Iterable<Val>): Generator<Val>
}
export const reject: reject = _.curry(function (predi: any, iter: any) {
    return L.filter(_.negate(predi))(iter) as any
})
