function task1(){
 const userName = prompt('What is your name?');
// alert('Hello, ' + userName + '!');
alert(`Hello, ${userName}!`);
}

function task2(){
    const birthYear = parseInt(prompt('Enter your birth year'), 10);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    alert(`You are ${age} years old!`);   
}

function task3(){
    const sideLength = parseInt(prompt('Enter side length of the square'), 10);
    const squarePerimeter = 4 * sideLength;
    alert(`The square perimeter is ${squarePerimeter}.`);
}

function task4(){
    const radius = parseInt(prompt('Enter circle radius'), 10);
    const area = Math.PI * Math.pow(radius, 2); //or r + r
    alert(`The area of the circle is ${area}.`);
}

function task5(){
    const distance = parseFloat(prompt('Enter the distance between two cities in km'));
    const time = parseFloat(prompt('Enter the time (in hours) you need to get to the place of destination'));
    const speed = distance / time;
    alert(`You have to travel at ${speed} km per hour.`);
}

function task6(){
    const dollar = parseFloat(prompt('Enter the ammount in US dollars'));
    const exchangeRate = 0.91;
    const euro = dollar * exchangeRate;
    const roundedeuro = Math.round(euro);
    alert(` ${roundedeuro} Euro.`);
}

