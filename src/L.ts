
import _ from "./_"
import {nop, noop} from "./symbol"

const log = console.log

const last = (iter)=>
    iter[iter.length-1]

const toIter = function (iter){
    return iter && iter[Symbol.iterator] ? iter[Symbol.iterator]() : [][Symbol.iterator]();
}

export default class L{

    static range = function *(start,stop?){
        if(arguments.length == 1){
            stop = start
            start = 0
        }
        for(let i=start; i<stop; i++){
            yield i
        }
    }

    static each = function (iter, hi?):any{
        return iter[Symbol.iterator]  
            ? (function *(){
                let index = 0
                let iterable = iter[Symbol.iterator]()
                let curr;
                while(!(curr=iterable.next()).done){
                    yield [index++, curr.value]
                }
            })()
            : (function (){
                const keys = _.keys(iter)
                const res = []
                for(const key of keys){
                    res.push([key, iter[key]])
                }
                return res
            })()
    }

    static map = _.curry(function *(mapper, iter){
        for(const [key,val] of L.each(iter)){
            yield _.go1(val, val=>mapper(val, key))
        }
    })

    //identity
    static identity = function(iter){
        return iter
    }

    //value
    static values = function(iter){
        return L.map(L.identity)(iter) 
    }

    //pluck
    static pluck = _.curry(function (key, iter){
        return L.map(val=>_.get(key,val))(iter);
    })
    static deepPluck = _.curry(function (key, iter){
        const gets = _.reduce((keys,key)=>{
            keys.push(_.get(key))
            return keys
        }, new Array(), key.split('.'))
        return  _.go(L.map(val=>
                        _.reduce((plucked,get)=>{
                            if(plucked && plucked[Symbol.iterator]){                       
                                return _.go(_.map(item=>get(item), plucked),
                                                _.flat)
                            }else{
                                return get(plucked)
                            }}, val, gets)) (iter),
                    L.flat)
    })

    //2.거르기 => filter
    static filter = _.curry(function *(predicate, iter){
        for(const [key,val] of L.each(iter)){
            const judge = _.go1(val, predicate)
            if(judge instanceof Promise) {
                yield judge.then(c => c ? val : Promise.reject(nop))
            }else if(predicate(val)) yield val
        }
    })

    //reject
    static reject = function(predi, iter) {
        return L.filter(_.negate(predi))(iter)
    } 

    //compact
    static compact = L.filter(L.identity)

    //where
    static where = _.curry(function (attr, iter){
        return  L.filter(val=>
            _.every(key=> _.get(key,val) == attr[key], _.keys(attr)))(iter) 
    })

    static flat = function (iter, depth:number = 1){
        const iterStack = [toIter(iter)]
        return {
            next: function recurr(){
                const iter = last(iterStack)
                if(!iter) return { done:true }
                const cur = iter.next()
                if(cur.done){
                    iterStack.pop()
                    return recurr()
                }else if(iterStack.length <= depth && cur.value[Symbol.iterator] && typeof cur != "string"){
                    iterStack.push(cur.value[Symbol.iterator]())
                    return recurr()
                }else if(cur.value instanceof Promise){
                    return {
                        value: cur.value.then(val=>{
                            if(iterStack.length <= depth && !val[Symbol.iterator] || typeof val == "string") return val
                            const iter = val[Symbol.iterator](), cur = iter.next()
                            return cur.done ? Promise.reject(nop) : (iterStack.push(iter), cur.value)
                        }),
                        done: false
                    }
                }else{
                    return cur
                }
            },
            [Symbol.iterator](){ return this }
        }
    }
        
}

