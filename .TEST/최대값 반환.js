function doSomething(a, b, c) {

    let tmp = [a, b, c]
    max = Math.max(...tmp)
    return max
} 
console.log(doSomething(3, 1, 2)); 
console.log(doSomething(1, 2, 3)); 
console.log(doSomething(1, 3, 2));