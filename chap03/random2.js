const MAX = 5, MIN = 2;

for (let i = 0; i <20; ++i){
    let a = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    //MIN 보다 크고 MAX 보다 작은 난수
    console.log(a);
}