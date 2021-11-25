// Cuadrado con arrow function

const calculateSquarePerimeter = () =>{
    let side = squareSide.value; 
    const squarePerimeter = side * 4;
    console.log(`Perimetro Cuadrado: ${squarePerimeter} cm`);
}

const calculateSquareArea = ()=> {
    let side = squareSide.value;
    const squareArea = (side) => side * side;
    console.log(`Area Cuadrado: ${squareArea(side)} cm2`);
}

// Triangulo 

const trianglePerimeter = () => {
    let base = Number(triangleBase.value);
    let side1 = Number(triangleSide1.value);
    let side2 = Number(triangleSide2.value);
    if (side1 == false || side2 == false || base == false) {
        console.log(`Falta un dato`);
    }else {   
    const perimeter = side1 + side2 + base;
    console.log(`Perimetro del Triangulo ${perimeter} cm`);
    }
}


function calculateTriangleArea() {
    let base = Number(triangleBase.value);
    let height = Number(triangleHeight.value);
    if (height == false || base == false) {
        console.log(`Falta un dato`);
    }else {   
        const triangleArea = (base, height)=>(base * height)/2;
        console.log(`Area del Triangulo ${triangleArea(base, height)} cm2`);
    }
    
}

const heightCalculator = () => {
    let base = Number(triangleBase.value);
    let side1 = Number(triangleSide1.value);
    var height = Math.sqrt(side1**2-(base**2/4));
    console.log(height);
    triangleHeight.value = height;
}


// Triangulo Isoceles 

// Circulo

const pi = Math.PI;

 const diameter = () =>{
     let radio = Number(radioValue.value);
     const diameterCircle = (radio) => radio *2;
     console.log(`Diametro es ${diameterCircle(radio)}`);
}

function circunference () {
    let radio = Number(radioValue.value);
    const circleCircunference = (radio) => pi*2*radio;
    console.log(`La circunferencia es ${circleCircunference(radio)}`);
}


function circleArea(){
    let radio = Number(radioValue.value);
    var area = (radio*radio)*pi;
    console.log(`El area es ${area}`);
}


