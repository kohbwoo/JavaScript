let a = [1,3,5,7];

while (a.length > 0) {
    let value = a.pop();
    //pop()메소드 배열을 가장 끝 항목을 제거하여 리턴한다. 배열의 길이가 1 감소한다.
    console.log("pop value = %d, arry = [%s]", value, a.toString())

}

