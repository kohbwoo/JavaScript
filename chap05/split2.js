let s = "one, two, three    foru";

let a = s.split(/[\t ,]+/)

for (let i = 0; i < a.length; ++i){
    console.log(a[i]);
}

