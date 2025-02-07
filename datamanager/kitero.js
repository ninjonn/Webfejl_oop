const sum = (a,b)=>{
    const result = a+b
    return result
}

const obj = {}
obj.calculate1 = sum
obj.calculate2 = (cb) => {
    const res = cb(4,5)
    return res;
}

obj.calculate3 = (a,b,cb) =>{
    const szam3 = cb(a,b)
    return szam3;
}

const result1 = obj.calculate2((a,b)=>{
    const szam3 = a+b;
    return szam3;
})

const result2 = obj.calculate2((a,b)=>{
    const szam3 = a-b;
    return szam3;
})

const result3 = obj.calculate3(5,7,(a,b)=>{
    return a * b;
})

const theFunction = ()=>{
    const szam10 = 10
    const finalResult = obj.calculate3(5,7,(a,b)=>{
        return a * szam10 + b
    })
    console.log(finalResult)
}

console.log(sum(4,5))
console.log(obj.calculate1(4,5))
console.log(result1)
console.log(result2)
console.log(result3)
theFunction()