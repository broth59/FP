import * as _ from '../_'
import * as L from '../L'

export const find = _.curry(function (predi, iter) {
    return (function recurr() {
        for (const [key, val] of L.each(iter)) {
            if (val instanceof Promise) return val.then((val) => (predi(val) ? val : recurr()))
            if (predi(val)) return val
        }
    })()
})
