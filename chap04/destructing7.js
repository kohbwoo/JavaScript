let i = 3, j = 4;
let a = [5,6,7];
let a1 = [i,j,a];
//배열 안에 배열 넣기
console.log(a1);

let a2 = [i, j, ...a];
//배열에 다른 리스트 이어붙이기
console.log(a2)