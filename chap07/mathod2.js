let rectangle = {
    widht : 5,
    hight : 7
}

rectangle.area = function (){
    return this.widht * this.hight
}

console.log(rectangle.area())