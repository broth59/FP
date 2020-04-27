// import _ from "./_"
// import L from "./L"
// import {noop, nop} from "./symbol"

// const log = console.log

// export default class C{
//     static reduce = _.curry((f,acc, iter)=>{
//         return iter ? _.reduce(f, acc, [...iter])
//             : _.reduce(f, [...acc])
//     })

//     static take = _.curry((limit, iter)=>{
//         return _.take(limit, _.catchNoop([...iter]))
//     }) 

//     static takeAll = C.take(Infinity)

//     static map = _.curry(function(mapper,iter){
//         const pool = []
//         for(const [key,val] of L.each(iter)){
//             if(val instanceof Promise){ 
//                 pool.push(val.then(val => mapper(val,key)))     
//             }else pool.push(new Promise(res=>res(mapper(val,key))))
//         }
//         return Promise.all([...pool])
//     })

//     static filter = _.curry(function(predicate,iter){
//         const pool = []
//         for(const [key,val] of L.each(iter)){
//             const judge = _.go1(val, predicate)
//             if(judge instanceof Promise) {
//                 pool.push(val.then(val => predicate(val,key) ? val : Promise.reject(nop)))
//             }else{
//                 pool.push(new Promise((res,err)=> predicate(val,key) ? (res(val)) : (err(nop))))
//             }
//         }
//         return C.takeAll(pool)
//     })

// }
