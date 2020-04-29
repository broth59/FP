import * as _ from '../_'
import * as L from '../L'

export const where = _.curry(function (attr, iter) {
    return L.filter((val) => _.every((key) => _.get(key, val) == attr[key], _.keys(attr)))(iter)
})
