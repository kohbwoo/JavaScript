function countProperty(obj) {
    return Object.keys(obj).length //len 배면 객체 파라미터 배열
 } 
let p1 = { name: '홍길동', age: 16 }; 
console.log( countProperty(p1) ); 
let r1 = { x: 10, y: 20, width: 30, height: 40 }; 
console.log( countProperty(r1) )