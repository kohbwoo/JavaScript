let a = [];

for(let i = 0; i < 100; ++i){
    a.push(Math.floor(Math.random() * (100 - 1 + 1) + 1));
}
a.sort(compareNumber);

function compareNumber(i, j){
    return i-j;
}

console.log(a);