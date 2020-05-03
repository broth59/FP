import * as _ from '../_'
import * as L from '../L'

interface deepPluck {
    <Val>(key: string): (
        iter: Iterable<Val>
    ) => Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<any>>> : any
    <Val>(key: string, iter: Iterable<Val>): Simul<Val> extends Promise<any> ? Promise<Iterable<DeepPromise<any>>> : any
}

export const deepPluck: deepPluck = _.curry(function deepPluck<Val>(keys: string, iter: Iterable<Val>) {
    return _.pipe(L.deepPluck(keys), _.takeAll)(iter)
})
