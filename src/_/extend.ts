
export function extend<Target>(target:Target) : <Source>(src:Source) => Target & Source;
export function extend<Target,Source>(target:Target, src:Source) : Target & Source;
export function extend<Target,Source>(target:Target, src?:Source){
    target = JSON.parse(JSON.stringify(target))
    return src ? Object.assign(target,src) : (src:Source)=>{
        src = JSON.parse(JSON.stringify(src))
        return Object.assign(target,src)
    }
}