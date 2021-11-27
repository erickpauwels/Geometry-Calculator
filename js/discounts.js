
// Disables Inputs 
coupon.disabled = true;
const couponAble = () =>{discount.value= ""; coupon.disabled = false; discount.disabled = true;}
const couponDisabled = () =>{coupon.value = ""; invalidCoupon.innerText = ""; coupon.disabled = true;discount.disabled = false;}

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

const validFunction = (userPrice, discountCuopon)=>{

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



function finalPriceFunction() {

    var userPrice = Number(price.value);
    var discountValue = Number(discount.value); 
    var discountCuopon = coupon.value.toLowerCase();

    if (discountValue && userPrice) {
        finalPrice(userPrice,discountValue);    
    }else if (discountCuopon && userPrice){
        console.log(`hola`);
        validFunction(userPrice, discountCuopon);
    }else{
        userFinalPrice.innerText = "Missing data!"
    }

}

// Reset Event 
function resetButton() {
    invalidCoupon.innerText = "";
    userFinalPrice.innerText = "";
    couponDisabled();
}