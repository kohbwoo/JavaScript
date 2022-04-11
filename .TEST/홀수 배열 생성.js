function createArray(count) {//홀수 배열 count 개 생성
    result = []
    for(let i = 1; i < count*2; i = i + 2){
        result.push(i)
    }
    return result
} 
console.log(createArray(4)); 
console.log(createArray(5)); 
console.log(createArray(6));