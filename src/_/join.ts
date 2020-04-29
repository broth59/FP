import * as _ from '../_'
import * as L from '../L'

interface join {
    (seperator: string, iter: Iterable<any>): string
    (seperator: string): (iter: Iterable<any>) => string
}

export const join: join = _.curry(function (seperator, iter) {
    if (arguments.length == 1) {
        iter = seperator
        seperator = ''
    }
    return _.reduce((a, b) => `${a}${seperator}${b}`)(iter)
})
