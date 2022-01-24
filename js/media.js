 
// Print Values 
const list = [];
const printValues = () =>{
    // e.preventDefault();
    let number = Number(values.value);
    list.push(number);
    console.log(list);
    // order elements 
    let listInOrder = list.sort(sortOrder);
    console.log(listInOrder);
    quantity.textContent = `${list.length}`;
    printedValues.textContent = `${list}` ; 
    values.value = "";
};

// Delete lasT value 
const deleteValue = () =>{
    list.pop();  
    printedValues.textContent = list;
    quantity.textContent = `${list.length}`;
    if (list.length<1) {
        printedValues.textContent = "Missing Data!";
        resultsContainer.style.display = "none"
    }
}

//Reset Values
const resetValues = () =>{
    list.splice(0, list.length);
    resultsContainer.style.display = "none"
    printedValues.textContent = `Values Deleted!`;
    quantity.textContent = `${list.length}`; 
}

//---------------- MEAN - with .reduce - function in helpers.js --------------------//


//--------------- MEDIAN - with .sort-----------------//
//order function 
function sortOrder(a,b) {
    return a-b;
}

//Array function
function median(list) {
    // order elements 
    list.sort(sortOrder);
    console.log(list);
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

function mode(list){

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

// PRINT RESULTS 
resultsContainer.style.display = "none";
const getResults = () =>{
    list.length<1 ? resultsContainer.style.display = "none":resultsContainer.style.display = "block";
    // mean function in helpers.js
    meanSpan.textContent= `Mean: ${mean(list)}`
    modeSpan.textContent= `Mode: ${mode(list)}`;
    medianSpan.innerHTML = `Median: ${median(list)}`;;
}