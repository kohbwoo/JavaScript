let a = [
    "c:/temp/guide.hwp", 
    "c:/pj/frontend/chap05/substring1.js",
    "homework.docx"
]




for(let i = 0; i<a.length; ++i){
    let b = a[i].slice((a[i].indexOf(".", 0)))
    console.log(b)
}

