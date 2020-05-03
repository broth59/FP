import { compact } from './L/compact'
import { deepPluck } from './L/deepPluck'
import * as _ from './_'
import * as L from './L'
import * as C from './C'

export { L, _, C }

const b = _.go(
    [1, 3, 4],
    L.map(async (x) => Promise.resolve(1)),
    _.reduce((acc, val) => Promise.resolve(acc + val))
).then(_.log)
