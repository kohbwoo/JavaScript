function sum(a) {
    result = 0
    for(let i = 0; i < a.length; i++){
        result = result + a[i]

    }
    return result
} 

console.log(sum([1, 2, 3, 4])) 
console.log(sum([3, 4, 5])) 
console.log(sum([20, 21]))