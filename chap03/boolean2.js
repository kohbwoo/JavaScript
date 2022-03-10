let a = undefined, b = null, c = 0, d = NaN;

console.log(a ? "true" : "false");
console.log(b ? "true" : "false");
console.log(c ? "true" : "false");
console.log(d ? "true" : "false");
///////

// undefined, null, 0, NaN(Not A Number)
// 모두 논리식에서 flase 로 취급한다.