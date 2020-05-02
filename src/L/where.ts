import * as _ from '../_'
import * as L from '../L'

interface where {
    <Val, Part extends Partial<Val>>(attr: { [Key in keyof Part]: Part[Key] }): (
        iter: Iterable<Promise<Val> | Val>
    ) => Generator<Val>
    <Val, Part extends Partial<Val>>(attr: { [Key in keyof Part]: Part[Key] }, iter: Iterable<Val>): Generator<Val>
}

export const where: where = _.curry(function (attr, iter) {
    return L.filter((val) => _.every((key: string) => _.get(key, val) == attr[key], _.keys(attr)))(iter)
})
