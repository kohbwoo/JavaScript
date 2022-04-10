function createArray(count, min, max) {
    a = []
    for (let i = 0; i < count; i++){  
        k = (Math.floor(Math.random() * (max - min + 1) + min));
        a.push(k)
    }
    //1 ~ 7 배열 랜덤 100개 1~100 만들기
    return a

} 
console.log(createArray(4, 11, 15)); 
console.log(createArray(5, 21, 25)); 
console.log(createArray(6, 31, 35));

//Math.floor(Math.random() * (MAX - MIN + 1) + MIN);