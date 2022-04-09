function test1(f){
    let result = f(3,4);
    console.log(result);
}

function add(a, b){
    return a+ b;
}

function muntiply(a,b){
    return a * b;
}

test1(add);
test1(muntiply)