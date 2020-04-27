import {_} from "./src/_2"
import {L} from "./src/L"

const log = console.log

const it = L.map((val)=>val.toLowerCase(), ["SSS","TTT"])
for(const b of it){
    log(b)
}

const b = _.go(
    Promise.resolve(["d","c","f"]),
    (x)=>x.toString(),


)
log(b)

export {_} from "./src/_2"
export {L} from "./src/L"


