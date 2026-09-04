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
heading.textContent ="ivan"
console.log(heading.textContent);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading.textContent)

const projectsHeading = document.querySelector ("#services h2");
console.log(projectsHeading);

