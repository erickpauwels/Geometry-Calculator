
// Mean function

const mean = (array) => {
    const acumulate = (acumular, newNumber) => acumular + newNumber;
    let finalAcumulate = array.reduce(acumulate, 0);
    let average = finalAcumulate / array.length;
    return average;
}

// Median function for salaries

