let a = [1, "a", 2, "c", 4, "d", 5, "e", "f", 6, 7]

let N = 0
let S = 0
for(let i = 0; i < a.length; i++){
    if(typeof a[i] == "number"){
        N = N + 1;
    }
    if(typeof a[i] == "string"){
        S = S + 1
    }
}

console.log("number :%d string:%d",N,S)