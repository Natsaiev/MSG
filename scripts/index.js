const booking = document.querySelector("booking")
const adress = document.querySelector(".andress");
const price = document.querySelector(".price");
const receiver = document.querySelector("receiver");
const create = document.querySelector("create");
const containerBtn = document.querySelector("containerBtn");
/* ВАЛИДАЦИЯ */

// booking.addEventListener("submit", function(event){
//    if(adress.length < 2 || address.length > 50){
//     address.classList.add('error');
//    } else {
//     address.classList.add('valid');
//    }
// })

/* Кнопки */

create.addEventListener("click", function() {
    const orderPaid = document.createElement("button");
    orderPaid.textContent = "Закакз оплачен";
    orderPaid.classList.add("order");
    containerBtn.appendChild(orderPaid);
    
    const orderSend = document.createElement("button");
    orderSend.textContent = "Заказ отправлен";
    orderSend.classList.add("order");
    containerBtn.appendChild(orderSend);

    const orderReceived = document.createElement("button");
    orderReceived.textContent = "Заказ получен";
    orderReceived.classList.add("order");
    containerBtn.appendChild(orderReceived);


})


