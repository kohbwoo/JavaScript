let a = []
for (let i = 0; i < 100; i++){
    k = (Math.floor(Math.random() * (100 - 1 + 1) + 1));
    a.push(k);
}


a.sort(function(a, b) {// 내림차순 정렬
    if(a > b) return -1;
    if(a === b) return 0;
    if(a < b) return 1;
  });

for (let i = 0; i < 100; i++){
    console.log(a[i])
}

