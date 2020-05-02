import * as L from '../L'
import * as _ from '../_'
interface deepPluck {
    <Val>(key: string): (iter: Iterable<Val>) => Iterable<any>
    <Val>(key: string, iter: Iterable<Val>): Iterable<any>
}

export const deepPluck: deepPluck = _.curry(function (key, iter): any {
    const gets = _.reduce(
        (keys: any, key: any) => {
            keys.push(_.get(key))
            return keys
        },
        new Array(),
        key.split('.')
    )
    
    return _.go(
        L.map((val) =>
            _.reduce(
                (plucked: any, get: any) => {
                    if (plucked && plucked[Symbol.iterator] && typeof plucked != "string") {
                        return _.go(
                            _.map((item: any) => get(item), plucked),
                            _.flat
                        )
                    } else {
                        return get(plucked)
                    }
                },
                val,
                gets
            )
        )(iter),
        L.flat
    )
})
