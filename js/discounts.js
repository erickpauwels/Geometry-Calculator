
// Disables Inputs 
// coupon.disabled = true;

/* const couponAble = () =>{
    discount.value= ""; 
    coupon.disabled = false; 
    discount.disabled = true;
    coupon.style.background = "#a7ffec";
}
const couponDisabled = () =>{
    coupon.value = ""; 
    invalidCoupon.innerText = ""; 
    coupon.disabled = true;
    discount.disabled = false;
    coupon.style.background = "#9cafc3b0";
} */

/* // Coupons Array
const coupons = [
    {
        name: "cp25",
        discount: 25
    },
    {
        name: "cp50",
        discount: 50
    },
    {
        name: "cp75",
        discount: 75
    }
] */

// Final Price function     
const  finalPrice = (userPrice, discountValue) => {
    var percentageDecimal = (discountValue/100);
    var percentageDiscount = 100 - discountValue;
    let percentage = userPrice * percentageDecimal;
    let addedPrice = userPrice + percentage;
    let userFinal = (userPrice * percentageDiscount)/100;
   
    userFinalPrice.innerText = `
    ${discountValue}% of ${userPrice} = ${percentage} 
    Subtracted = ${(userFinal)}
    Added = ${addedPrice}
    `;

    if (discountValue == 100) {
        userFinalPrice.innerText = "Great Deal!";
    }
};

// Valid Coupon function

const validFunction = (userPrice/* , discountCuopon */)=>{

    let validCoupon = coupons.find(function(coupons) {
        return coupons.name == discountCuopon;
    });
   
    if (!validCoupon) {
        invalidCoupon.innerText = "Coupon invalid!"
        userFinalPrice.innerText = "";
    } else {
        let couponsDiscount = validCoupon.discount;
        console.log(Boolean(validCoupon));
        console.log(couponsDiscount);
        finalPrice(userPrice,couponsDiscount);
    }
}

// Result Event

const finalPriceFunction = ()=> {
    // e.preventDefault();
    var userPrice = Number(price.value);
    var discountValue = Number(discount.value); 
    // var discountCuopon = coupon.value.toLowerCase();
    
    if (discountValue && userPrice) {
        finalPrice(userPrice,discountValue);    
    }else if (/* discountCuopon && */ userPrice){
        console.log(`hola`);
        validFunction(userPrice/* , discountCuopon */);
    }else{
        userFinalPrice.innerText = "Missing data!"
    }
    
}

// Reset Event 
function resetButton() {
    // invalidCoupon.innerText = "";
    userFinalPrice.innerText = "";
    price.value = "";
    discount.value = "";
    // couponDisabled();
    // coupon.style.background = "#a7ffec";
}