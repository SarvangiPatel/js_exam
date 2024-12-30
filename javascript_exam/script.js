

let cartbtn = document.getElementsByClassName('btns')
let carts = document.getElementsByClassName('cart')

let count = 0;


function addcart(){

    if(count < 100){
        count++;
        alert("you product has been successfully added in cart")
        carts[0].innerText = count;
    }
 
}
