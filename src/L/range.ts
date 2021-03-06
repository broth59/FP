export function* range(start:number,stop?:number):Generator<number>{
    const origin = start
    stop = stop || ( start = 0, origin )
    for(let i=start; i<stop+1; i++){
        yield i
    }
}
