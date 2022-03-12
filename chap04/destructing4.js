let a = 3, b = 4;
[a,b] = [5, 6];
console.log(a,b);

[a,b] = [b,a];
//위와 같이 swap 가능하다.
console.log(a,b)
