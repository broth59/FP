import * as L from "../L"
import * as _ from "../_"

export const compact = L.filter(_.identity)

const b = compact([1.23,3])