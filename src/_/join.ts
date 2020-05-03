import * as _ from '../_'
import * as L from '../L'

interface join {
    <Val>(seperator: string, iter: Iterable<Val>): Val extends Promise<any> ? Promise<string> : string
    <Val>(seperator: string): (iter: Iterable<Val>) => Val extends Promise<any> ? Promise<string> : string
}

export const join: join = _.curry(function (seperator, iter) {
    if (arguments.length == 1) {
        iter = seperator
        seperator = ''
    }
    return _.reduce((a, b) => `${a}${seperator}${b}`)(iter)
})
