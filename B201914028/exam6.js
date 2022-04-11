let a = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"]
let b
for(let i = 0; i<a.length; ++i){
    b = a[i].split("/");  
    console.log(b[b.length-1])
}
