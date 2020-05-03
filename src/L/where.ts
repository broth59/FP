import * as _ from '../_'
import * as L from '../L'

type PromisPart<T> = Partial<T> extends Promise<infer R> ? Partial<R> : Partial<T>
//Val extends Promise<infer R> ? number : { [Key in keyof Partial<Val>]: Partial<Val>[Key] }
interface where {
    <
        Val,
        Condition extends Val extends Promise<infer R>
            ? { [Key in keyof Partial<R>]: Partial<R>[Key] }
            : { [Key in keyof Partial<Val>]: Partial<Val>[Key] }
    >(
        attr: Condition
    ): (iter: Iterable<Val>) => Generator<Val>
    <
        Val,
        Condition extends Val extends Promise<infer R>
            ? { [Key in keyof Partial<R>]: Partial<R>[Key] }
            : { [Key in keyof Partial<Val>]: Partial<Val>[Key] }
    >(
        attr: Condition,
        iter: Iterable<Val>
    ): Generator<Val>
}

export const where: where = _.curry(function (attr, iter) {
    return L.filter((val) => _.every((key: string) => _.get(key, val) == attr[key], _.keys(attr)))(iter)
})
