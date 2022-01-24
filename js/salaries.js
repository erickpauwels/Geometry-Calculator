
//New Array
const salaries = [];

// Change % value
function update (){
    p = e.options[e.selectedIndex].value;
    p > 0 ? localStorage.setItem("percentage",p) : NaN;
    }

// Constructor
function sal (name, salarie){
    this.name = name,
    this.salarie =salarie
}
  

//Set VALUES btn

function setValues() {
    let finalObject = new sal(nameSalaries.value,Number(numberSalaries.value));
    salaries.push(finalObject);
    // h2Value.innerHTML = "Values";
    //Print Values
    const p1 = document.createElement('p');
    salaries.forEach(e => {
       p1.innerHTML = `<i class="far fa-dot-circle"></i> ${e.name} - $${e.salarie}`
       valuesSalaries.appendChild(p1);
    });

    //Quantity
    quantityPrices.textContent = `${salaries.length}`;

    //.MAP & .SORT methods
    const salariesArray = salaries.map((numbers) => numbers.salarie).sort((a,b) =>a-b);
    console.log(salariesArray);
    localStorage.setItem("Array", JSON.stringify(salariesArray));

    nameSalaries.value = "";
    numberSalaries.value = "";
}

//Get resuls BTn
getResultsBtn.addEventListener('click', ()=>{

    let salariesArray = JSON.parse(localStorage.getItem("Array"));
    console.log(salariesArray);

    // Final PRICE 
    totalPriceSpan.innerHTML = totalPrice(salariesArray);

    //Median Salaries Function
    medianSalaries(salariesArray);
    console.log(`Median Salaries: ${medianSalaries(salariesArray)}`);
    medianResults.innerText = medianSalaries(salariesArray);

    let getPercentage = Number(localStorage.getItem("percentage"))
    console.log(getPercentage);

    //Top 10% salaries
    topSalaries(salariesArray,getPercentage);
    console.log(`Top % Salaries: ${topSalaries(salariesArray,getPercentage)}`);
    topPercentage.innerText = ` ${topSalaries(salariesArray,getPercentage)}`;

    //Median Top% Salaries
    medianTopSalaries(topSalaries(salariesArray, getPercentage));
    console.log(`Median Top%: ${medianTopSalaries(topSalaries(salariesArray,getPercentage))}`);
    topMedian.innerText = medianTopSalaries(topSalaries(salariesArray,getPercentage));
})

//Reset Values
const resetSalariesValues = () =>{
    // h2Value.innerHTML = "Values Deleted";
    valuesSalaries.innerText = "";
    quantityPrices.textContent = "0";
    localStorage.clear();
}


//-----------------TOTAL------------------------//

const totalPrice = (array) => {
    const acumulatePrice = (acumulate, position) => acumulate + position;
    let finalPrice = array.reduce(acumulatePrice,0);
    return finalPrice;
}

//----------------- MEDIAN SALARIES WIth .MAP - .SORT - .REDUCE -------------------//


//Median Salaries
const medianSalaries = (salariesArray) => {
    // If the array is Even or NOt
    if (salariesArray.length % 2 === 0) {
        let numberi = salariesArray.length /2;
        let number2 = numberi - 1;
        //Set Mean function with arguments number i & number2
        return mean([salariesArray[numberi], salariesArray[number2]]);
    }else{
        // Math.floor to round out the length array to a round number
        let notEven = Math.floor(salariesArray.length / 2);
        return salariesArray[notEven];
    }
}


//-------------------TOP % SALARIES-----------------------//

const topSalaries = (salariesArray, percentage) => {
    let positionStart = Math.floor(salariesArray.length * percentage)/100;
    // Use .SLICE to create a new array istead of chanching the original with .Splice
    let newarray = salariesArray.slice(positionStart, salariesArray.length); 
    /*   // IF I USE .SPLICE 
    let positionEnd = salariesArray.length - positionStart;
    console.log(`eND: ${positionEnd} `); */
    return newarray;
}

//-----------MEDIAN OF TOPi0%-------//
const medianTopSalaries = (salaries2) => {

    if (salaries2.length % 2 === 0) {
        let numberi = salaries2.length /2;
        let number2 = numberi - 1;
        //Set Mean function with arguments number i & number2
        return mean([salaries2[numberi], salaries2[number2]]);
    }else{
        // Math.floor to round out the length array to a round number
        let notEven = Math.floor(salaries2.length / 2);
        return salaries2[notEven];
    }
}
