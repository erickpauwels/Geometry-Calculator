// Display sections 


const geoSection = () => {
    geometrySection.style.display = "block";
    mediaSection.style.display = "none"
    percentageSection.style.display = "none";
    salariesSection.style.display = "none";
}

const meSection = () =>{
    mediaSection.style.display = "block"
    geometrySection.style.display = "none"
    percentageSection.style.display = "none";
    salariesSection.style.display = "none";
}

const peSection = () =>{
    salariesSection.style.display = "none";
    percentageSection.style.display = "block";
    mediaSection.style.display = "none"
    geometrySection.style.display = "none"
}

const saSection = () =>{
    salariesSection.style.display = "block";
    percentageSection.style.display = "none";
    mediaSection.style.display = "none"
    geometrySection.style.display = "none"
}