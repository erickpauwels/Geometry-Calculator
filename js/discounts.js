
// Disables Inputs 
coupon.disabled = true;
const couponAble = () =>{discount.value= ""; coupon.disabled = false; discount.disabled = true;}
const couponDisabled = () =>{coupon.value = ""; coupon.disabled = true;discount.disabled = false;}

// Coupons Array
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
]

// Final Price function     
const  finalPrice = (userPrice, discountValue) => {
    var percentageDiscount = 100 - discountValue;
    let userFinal = (userPrice * percentageDiscount)/100;
    userFinalPrice.innerText = (userFinal);
    if (discountValue == 100) {
        userFinalPrice.innerText = "FREE PRODUCT!";
    }
};

// Valid Coupon function

function validFunction(userPrice, discountCuopon){

    let validCoupon = coupons.find(function(coupons) {
        return coupons.name == discountCuopon;
    });
    
    let couponsDiscount = validCoupon.discount;
   
    if (!validCoupon) {
        invalidCoupon.innerText = "Coupon invalid!"
        userFinalPrice.innerText = "";
    } else {
        console.log(Boolean(validCoupon));
        console.log(couponsDiscount);
        finalPrice(userPrice,couponsDiscount);
    }
}

// Result Event
function finalPriceFunction() {
    let userPrice = Number(price.value);
    let discountValue = Number(discount.value); 

    finalPrice(userPrice,discountValue);

    let discountCuopon = coupon.value.toLowerCase();
    validFunction(userPrice, discountCuopon);

}

// Reset Event 
function resetButton() {
    invalidCoupon.innerText = "";
    userFinalPrice.innerText = "";
    couponDisabled();
}