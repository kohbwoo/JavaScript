function clone(a) { 
    return a.slice()
} 
let a = [1, 2, 3]; 
let b = clone(a); 
a[0] = 11; 
console.log(a); 
console.log(b);