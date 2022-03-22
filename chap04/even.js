let a = [];

for(let i = 0; i < 100; ++i){
    a.push(Math.floor(Math.random() * (100 - 1 + 1) + 1));
}
a.sort(compareNumber);

function compareNumber(i, j){
    return i-j;
}

for(let j = 0; j < a.length; ++j){
    if (a[j] % 2 == true){
        console.log(a[j], (parseInt(a[j]) % parseInt(2) === true))
        a.splice(j, 1)
        
    }
    
}

console.log(a);