class Order { 
    constructor(menu, price, quantity ){//11번째줄 들어온 순서
        this.menu = menu
        this.price = price
        this.quantity = quantity
        this.amount = price * quantity
    }

    
} 
let order1 = new Order("우유", 900, 3); 
console.log(order1.price, order1.quantity, order1.amount); 
order1.amount = 1800; // 주문 금액을 1800원으로 수정한다. 
console.log(order1.price, order1.quantity, order1.amount)