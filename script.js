console.log("Hello, World!");
console.log("From script.js file.");

const myName = "Kim";
let age = 16;
age = 17;

const myNumber = 9166246411; 
const myAddress = "Manapla";

console.log(`My name is ${myName}, ${age} years old.`);
console.log(`Number: ${myNumber}`);
console.log(`Address: ${myAddress}`)
console.log(67);



function greet(greeting, names =[]){
   if (Array.isArray(names)){
      names= names.join (",");
   } 
   return `${greeting} sa enyu, ${names}.`;

}

console.log(greet("Mayong aga" , ["Kim", "Kim", "Kim", "Kim"]));

const heading = document.querySelector ("h1");
heading.textContent = "Your Father's Name";
heading.style.color = "purple";
heading.style.background = "yellow";
heading.style.fontSize = "100px"; 
console.log(heading.textContent);

heading.addEventListener("click", function(){
   heading.style.color = "red";
   console.log ("Heading was clicked!");

});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading)

const projectsHeading = document.querySelector ("#services h2");
console.log(projectsHeading);

const toggleButton = document.querySelector ('#switch');
const body = document.querySelector('body');
let isOff =false; 


toggleButton.addEventListener ("click", function (){
   isOff = !isOff;
   if (isOff) {
      body.style.backgroundColor = "black";
      body.style.color = "white"; 

   }else {
      body.style.backgroundColor = "white";
      body.style.color = "black"; 

   }
   



});

