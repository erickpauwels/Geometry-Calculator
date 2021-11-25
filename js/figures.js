/*---------- Cuadrado------------ */

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

/*------------ Triangulo------------ */ 

//Perimeter
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

//Area
function calculateTriangleArea() {
    let base = Number(triangleBase.value);
    let height = Number(normalHeight.value);
    if (height == false || base == false) {
        console.log(`Falta un dato`);
    }else {   
        const triangleArea = (base, height)=>(base * height)/2;
        console.log(`Area del Triangulo ${triangleArea(base, height)} cm2`);
    }
    
}


/*-------- Triangulo Isoceles------ */ 

//Altura
const heightCalculator = () => {
    let base = Number(baseIsosceles.value);
    let sides = Number(equalSides.value);
    var height = Math.sqrt(sides**2-(base**2)/4);
    console.log(height);
    triangleHeight.value = height;
} 

//Perimeter
const isoscelesPerimeter = () => {
    let base = Number(baseIsosceles.value);
    let sides = Number(equalSides.value);
    if (sides == false|| base == false) {
        console.log(`Falta un dato`);
    }else {   
    const perimeter = (sides*2) + base;
    console.log(`Perimetro del Triangulo Isoceles ${perimeter} cm`);
    }
}

//Area


/*---------------- Circulo-------------------------------- */

const pi = Math.PI;

//Diametro
 const diameter = () =>{
     let radio = Number(radioValue.value);
     const diameterCircle = (radio) => radio *2;
     console.log(`Diametro es ${diameterCircle(radio)}`);
}

//Circunferencia
function circunference () {
    let radio = Number(radioValue.value);
    const circleCircunference = (radio) => pi*2*radio;
    console.log(`La circunferencia es ${circleCircunference(radio)}`);
}

//Area
function circleArea(){
    let radio = Number(radioValue.value);
    var area = (radio*radio)*pi;
    console.log(`El area es ${area}`);
}


