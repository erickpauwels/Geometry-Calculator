// EJ DE ARRAY DE SALARIOS 

const salaries = [
    {
        name: "pepito",
        salarie: 25000,
    },
    {
        name: "maria",
        salarie: 30000,
    },
    {
        name: "maria",
        salarie: 30000,
    },
    {
        name: "maria",
        salarie: 30000,
    },
    {
        name: "maria",
        salarie: 30000,
    },
    {
        name: "juan",
        salarie: 40000,
    },
    {
        name: "pedro",
        salarie: 80000,
    },
    {
        name: "pedro",
        salarie: 9000,
    },
    {
        name: "pedro",
        salarie: 150000,
    },
    {
        name: "pedro",
        salarie: 9000,
    },
    {
        name: "pedro",
        salarie: 150000,
    },
    {
        name: "pedro",
        salarie: 9000,
    },
    {
        name: "pedro",
        salarie: 150000,
    },

    {
        name: "pedro",
        salarie: 150000,
    },
    {
        name: "pedro",
        salarie: 9000,
    },
    {
        name: "pedro",
        salarie: 150000,
    },
    {
        name: "pedro",
        salarie: 9000,
    },
    {
        name: "pedro",
        salarie: 150000,
    },
    {
        name: "pedro",
        salarie: 9000,
    },
    {
        name: "pedro",
        salarie: 150000,
    },
    {
        name: "pedro",
        salarie: 9000,
    },
    {
        name: "pedro",
        salarie: 150000,
    },
]

//----------------- MEDIAN SALARIES WIth .MAP - .SORT - .REDUCE -------------------//
 //Transform and sort to select only the argument "salarie"
const salariesArray = salaries.map((numbers) => numbers.salarie).sort((a,b) =>a-b);
console.log(salariesArray);

//Median Salaries
const medianSalaries = () => {
    // If the array is Even or NOt
    if (salariesArray.length % 2 === 0) {
        let number1 = salariesArray.length /2;
        let number2 = number1 - 1;
        console.log(salariesArray[number1], salariesArray[number2]);
        //Set Mean function with arguments number 1 & number2
        return mean([salariesArray[number1], salariesArray[number2]]);
    }else{
        // Math.floor to round out the length array to a round number
        let notEven = Math.floor(salariesArray.length / 2);
         console.log(`array length ${salariesArray.length}`);
        return salariesArray[notEven];
    }
}

//-------------------TOP 10% SALARIES-----------------------//


const topSalaries = () => {
    let positionStart = Math.floor(salariesArray.length * 90)/100;
    // Use .SLICE to create a new array istead of chanching the original with .Splice
    let newarray = salariesArray.slice(positionStart, salariesArray.length); 
    /*   // IF I USE .SPLICE 
    let positionEnd = salariesArray.length - positionStart;
    console.log(`eND: ${positionEnd} `); */
    return newarray;
}

console.log(topSalaries());

const medianTopSalaries = function (salaries2){
    if (salaries2.length % 2 === 0) {
        let number1 = salaries2.length /2;
        let number2 = number1 - 1;
        console.log(salaries2[number1], salaries2[number2]);
        //Set Mean function with arguments number 1 & number2
        return mean([salaries2[number1], salaries2[number2]]);
    }else{
        // Math.floor to round out the length array to a round number
        let notEven = Math.floor(salaries2.length / 2);
         console.log(`array length ${salaries2.length}`);
        return salaries2[notEven];
    }
}

/* const top10salaries = salariesArray.splice(positionStart, positionEnd); 
console.log(top10salaries); */

//-----------MEDIAN OF TOP10%-------//

/* let medianTop10 = medianSalaries(top10salaries);
console.log(`Median top 10 ${medianTop10}`); */
    