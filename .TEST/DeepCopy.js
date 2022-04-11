function deepCopy(persons) { 
    result = [ {name : persons[0].name, age : persons[0].age}, {name : persons[1].name, age : persons[1].age} ] 
    return result
} 
let persons1 =[ { name: "홍길동", age: 16 }, { name: "임꺽정", age: 18 } ]; 
let persons2 = deepCopy(persons1); 
persons1[0].age = 20;
console.log(persons2);