import {_} from "./src/_"
import {L} from "./src/L"

const log = console.log

const it = L.map((val)=>val.toLowerCase(), ["SSS","TTT"])
for(const b of it){
    log(b)
}

const b = _.go(
    ["d","c","f"],
    L.map((val)=>val),
    _.reduce((acc,val)=>acc+val),
)
log(b)

export {_} from "./src/_"
export {L} from "./src/L"


