let a = [];
sum = 0;
for (let i = 0; i < 100; i++){  
    k = (Math.floor(Math.random() * (100 - 1 + 1) + 1));
    a.push(k)
    sum = sum + k
}
//1 ~ 7 배열 랜덤 100개 1~100 만들기
console.log(a)
avg = (sum/100)

console.log(avg.toFixed(1)) //소수점 첫째자리까지 출력