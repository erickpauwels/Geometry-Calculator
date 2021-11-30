 
// Print Values 
const list = [];
const printValues = () =>{
    let number = Number(values.value);
    list.push(number);
    printedValues.textContent = `${list}`;    
    form.reset();
    return false;
};

// Delete lasT value 
const deleteValue = () =>{
    list.pop();  
    printedValues.textContent = list;
    if (list.length<1) {
        printedValues.textContent = "NO MORE VALUES TO DELETE";
    }
}

//Reset Values
const resetValues = () =>{
    list.splice(0, list.length);
    printedValues.textContent = `Values DELETED`; 
}

//---------------- MEAN - with .reduce--------------------//
function mean(numberlist) {
    const acumulate = (acumular, newNumber) => acumular + newNumber;
    let finalAcumulate = numberlist.reduce(acumulate, 0);
    let average = finalAcumulate / numberlist.length;
    return average;
}

//--------------- MEDIAN - with .sort-----------------//
//order function 
function sortOrder(a,b) {
    return a-b;
}

//Array function
function median (list) {
    // order elements 
    list.sort(sortOrder);
    //If even or not  
    if(list.length % 2 === 0) {
        let number1 = list.length / 2 ;
        let number2 = number1 - 1;
        // Getting average
        return mean([list[number1], list[number2]]);
    }else {
        // aproximated number without decimals
        const notEven = Math.floor(list.length/2);
        return list[notEven];
    }
}

//--------------MODE with .MAP / .SORT / .POP ------------------// 

function mode (list){

    //Use Map for transform array to object and count the elements.
    // create new object 
    let newList={};
    list.map(function(e){
        if (newList[e]) {
            newList[e] += 1;
        }else {
            newList[e] = 1;
        }
    });

    // Transform in array with object.entries and SORT it
    const arrayList = Object.entries(newList).sort(function(a,b){
        return a[1] - b[1];
    })

    console.log(arrayList);
    //With .POP() we select the last element that is sorted 
    let mode = arrayList.pop();
    console.log(mode);
    return mode[0];
}

