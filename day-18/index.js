console.log("Day18: DOM manipulation");

// What will we learn today?

// - Creating Elements
// - Inserting content
// - Modifying content
// - Removing content
// - Read, Write and Remove Attributes
// - Traversing/ Navigating DOM
// - Manipulating Styles
// - Manipulating Classes
// - Controlling Visibilities
// - Build Project(s)
// - Tasks

// Creating Elements
const paraElem = document.createElement("p");
paraElem.innerText = "This text added dynamically";

document.body.appendChild(paraElem);

console.log(paraElem);

// Insert Element
const span = document.createElement("span");
span.innerText = "I am a span";

const pElem = document.querySelector("p");
const header = document.querySelector("h2");

document.body.insertBefore(span, header.nextElementSibling);

// Modifying Content
const pElemMod = (pElem.innerHTML = "<u>Hello, how are you doing</u>");

const divElem = document.querySelector("div");

console.log(divElem.textContent);
console.log(divElem.innerText); //consider CSS visibility

// Removing/ Replacing elements
const list = document.getElementById("myList");
// const itemToRemove = list.children[0];
// list.removeChild(itemToRemove);
// console.log(list.children);

document.getElementById("removeMe").remove();

//list.innerText = "";

//list.replaceChildren(pElem);

//Traversing DOM

// parentElement
{
	const spanElem = document.getElementById("text");

	console.log("Parent element", spanElem.parentElement.parentElement);
	console.log("Parent node", spanElem.parentNode.parentNode);
}

// children / childNodes

const mainId = document.getElementById("main");

// console.log("Children", mainId.childNodes);
// console.log("First Child", mainId.firstElementChild);
// console.log("Last Child", mainId.lastElementChild);

//console.log("2nd sibling", mainId.firstElementChild.nextSibling);

console.log("text inside first list element", list.children[1].childNodes);

console.log(mainId.id);
