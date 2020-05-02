import * as _ from '../_'
import * as L from '../L'

interface indexby {
    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val): (
        iter: Iterable<Val>
    ) => Val extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<Val> }>>
        : Iterable<{ [index: string]: Array<Val> }>

    <Val, Result>(fn: Val extends Promise<infer R> ? keyof R : keyof Val, iter: Iterable<Val>): Val extends Promise<any>
        ? Promise<Iterable<{ [index: string]: Array<Val> }>>
        : Iterable<{ [index: string]: Array<Val> }>
}

export const indexby: indexby = _.curry(function (index: string, iter) {
    return _.reduce(
        (indexed: any, val) => {
            const id = _.get(index, val)
            if (!_.get(id, indexed)) indexed[id] = val
            return indexed
        },
        {},
        iter
    )
})
