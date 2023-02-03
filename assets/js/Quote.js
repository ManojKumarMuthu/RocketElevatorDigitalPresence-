const residental = document.getElementById('residental')
const commercial = document.getElementById('commercial')
const industrial = document.getElementById('industrial')

const numberOfAppartments = document.getElementById('number-of-appartments')
const numberOfFloors = document.getElementById('number-of-floors')
const numberOfElevators = document.getElementById('number-of-elevators')
const maxOccupancy = document.getElementById('maximum-occupancy')
const extraFeildForFloors = document.getElementById('extra-feild-for-floors')

const appartmentInput = document.getElementById('appartments-input')
const floorsInput = document.getElementById('floors-input')
const elevatorsInput = document.getElementById('elevators-input')
const maximumInput = document.getElementById('maximum-input')
const extraFloorInput = document.getElementById('extra-floor-input')

const appartmentsOutput = document.getElementById('appartments-output')
const floorsOutput = document.getElementById('floors-output')
const elevatorsOutput = document.getElementById('elevators-output')
const maximumOutput = document.getElementById('maximum-output')

const standard = document.getElementById('standard');
const premium = document.getElementById('premium');
const excellent = document.getElementById('excellent');


const numberOfAppartmentOutput = document.getElementById('number-of-appartments-output');
const numberOfFloorsOutput = document.getElementById('number-of-floors-output');
const numberOfElevatorsOutput = document.getElementById('number-of-elevators-output');
const maximumOccupancyOutput = document.getElementById('maximum-occupancy-output');



numberOfAppartments.style.display = 'none'
numberOfFloors.style.display = 'none'
numberOfElevators.style.display = 'none'
maxOccupancy.style.display = 'none'
extraFeildForFloors.style.display ='none'

// numberOfFloorsOutput.style.display = 'none'
// numberOfElevatorsOutput.style.display = 'none'
// maximumOccupancyOutput.style.display = 'none'

function displayEveryThing() {
  numberOfFloorsOutput.style.display = 'block'
  numberOfElevatorsOutput.style.display = 'block'
  maximumOccupancyOutput.style.display = 'block'
}

residental.addEventListener('click', () => {
    numberOfAppartments.style.display = 'block'
    extraFeildForFloors.style.display = 'block'
    numberOfFloors.style.display = 'none'
    numberOfElevators.style.display = 'none'
    maxOccupancy.style.display = 'none'
     resetFunction()
     resetFunction1()
  });

commercial.addEventListener('click', () => {
  numberOfFloors.style.display = 'block'
  maxOccupancy.style.display = 'block'
  numberOfAppartments.style.display = 'none'
  numberOfElevators.style.display = 'none'
  extraFeildForFloors.style.display = 'none'
   resetFunction()
   resetFunction2()
});

industrial.addEventListener('click', () => {
  numberOfElevators.style.display = 'block'
  numberOfAppartments.style.display = 'none'
  numberOfFloors.style.display = 'none'
  maxOccupancy.style.display = 'none'
  extraFeildForFloors.style.display = 'none'
   resetFunction()
   resetFunction3()
});

function  resetFunction(){
appartmentsOutput.value = 0
floorsOutput.value = 0
elevatorsOutput.value = 0 
maximumOutput.value = 0
}

// Industrial number of elevators calculation
elevatorsInput.addEventListener('input',()=>{ resetFunction(); resetFunction1(); calculateElevators()});

function resetFunction1() {
  appartmentInput.value = ''
  floorsInput.value = ''
  maximumInput.value = ''
  extraFloorInput.value = ''
}

function calculateElevators() {
  
  appartmentsOutput.value= elevatorsInput.value
  };

// Residential number of elevators calculation

appartmentInput.addEventListener('input',()=>{ resetFunction(); resetFunction2(); calculateAppartmentsPerFloor()});
extraFloorInput.addEventListener('input',()=>{ resetFunction(); resetFunction2(); calculateAppartmentsPerFloor()});

function resetFunction2() {
  floorsInput.value = ''
  elevatorsInput.value = '' 
  maximumInput.value = ''
}

function calculateAppartmentsPerFloor() {
  
  let floors = parseFloat(extraFloorInput.value);
  let appartments = parseFloat(appartmentInput.value);

  // Check if both values are numbers
  if (!isNaN(floors) && !isNaN(appartments)) {
    // Check if the number of floors is not zero
    if (floors < 20) {
      // Calculate the value of the appartmentsOutput element
    let z = (appartments/floors) / 6;
    let zz = Math.ceil(z);
      appartmentsOutput.value = zz ;
      console.log(appartmentsOutput.value);
    }

    else if (floors > 20) {
    let y = (appartments/floors)/6;
    let yy = Math.ceil(y);
    let yyy = Math.ceil(floors/20);
    let yyyy = yy * yyy;
        appartmentsOutput.value = yyyy;
    }

    else if(floors === 20){
      // Set the value of the appartmentsOutput element to an error message
    let x = (appartments/floors)/6;
    let xx = Math.ceil(x);
    let xxx = xx * 2;
      appartmentsOutput.value = xxx;
    }
  } 
  else {
    // Set the value of the appartmentsOutput element to an error message
    appartmentsOutput.value = "Error: Invalid input";
  }
}


// Commercial number of elevators calculation

maximumInput.addEventListener('input', ()=>{ resetFunction(); resetFunction3(); calculatePeoplesPerFloor()});
floorsInput.addEventListener('input', ()=>{ resetFunction(); resetFunction3(); calculatePeoplesPerFloor()});

function resetFunction3() {
  appartmentInput.value = ''
  elevatorsInput.value = ''
  extraFloorInput.value = ''
}

function calculatePeoplesPerFloor() {
  
  let floors1 = parseFloat(floorsInput.value);
  let maxOcc = parseFloat(maximumInput.value);

  // Check if both values are numbers
  if (!isNaN(floors1) && !isNaN(maxOcc)) {
    // Check if the number of floors is not zero
    if (floors1 >= 2) {
    let a = floors1 * maxOcc;
    let aa = a / 200;
    let aaa = Math.ceil(aa);
    let aaaa = floors1 / 10;
    let aaaaa = Math.ceil(aaaa);
    let aaaaaa = aaa * aaaaa;
    let aaaaaaa = aaaaaa + aaaaa;
      appartmentsOutput.value = aaaaaaa;
    }
    else {
      appartmentsOutput.value = "Error: Invalid input";
    }
  } 
  else {
    // Set the value of the appartmentsOutput element to an error message
    appartmentsOutput.value = "Error: Invalid input";
  }
}


standard.addEventListener('click', calculateprices);

function calculateprices() {
  console.log(standard.value)
  let eleNeeded = parseFloat(appartmentsOutput.value);
floorsOutput.value = 8000;
elevatorsOutput.value = ((eleNeeded * 8000) / 100) * 10;
maximumOutput.value = (eleNeeded * 8000) + ((eleNeeded * 8000) / 100) * 10 ; 
}


premium.addEventListener('click', calculateprices1);

function calculateprices1() {
  console.log(premium.value)
  let eleNeeded1 = parseFloat(appartmentsOutput.value);
floorsOutput.value = 12000;
elevatorsOutput.value = ((eleNeeded1 * 12000) / 100) * 15;
maximumOutput.value = (eleNeeded1 * 12000) + ((eleNeeded1 * 12000) / 100) * 15 ; 
}

excellent.addEventListener('click', calculateprices2);

function calculateprices2() {
  console.log(excellent.value)
  let eleNeeded2 = parseFloat(appartmentsOutput.value);
floorsOutput.value = 15000;
elevatorsOutput.value = ((eleNeeded2 * 15000) / 100) * 20;
maximumOutput.value = (eleNeeded2 * 15000) + ((eleNeeded2 * 15000) / 100) * 20 ; 
}

