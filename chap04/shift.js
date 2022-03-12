let a = [1,3,5,7];

while (a.length > 0){
    let value = a.shift();
    //shift메소드는 배열의 맨 앞 항목을 제거하여 리턴한다.
    console.log("pop value = %d, array = [%s]", value, a.toString());
    
}