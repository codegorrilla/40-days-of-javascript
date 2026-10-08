// day 17 - DOM => its not part of JS, DOM is the programming interface that language like JS needs to execute programming operations.

/*
    - What is DOM
    - Understanding DOM types
    - Accessing DOM
    - Manipulate the DOM
    - Mini project (s)
	- Devtools and DOM
    - Tasks
*/

// DOM types
// 1. Document - the root element, it represents the entire DOM tree =>
console.log(document);
console.log(document.head);
console.log(document.URL);

// 2. Node - A generic term for any element in the DOM tree (element nodes, text nodes, attribute nodes)

// 3. Element - A specific type of Node that represents HTML tags/ elements.

// 4. NodeList - An array of Nodes

// 5. Attr - represents the attribute of a Node <img src="" alt =""

// 6. NameNodeMap - A collection of Attr.

// Accessing the DOM

let titleElem = document.getElementById("heading");
console.log(titleElem);

let infoElems = document.getElementsByClassName("info");
console.log(infoElems); // array like not array

[...infoElems].forEach((elem) => {
	//using spread operator converts the array like to an array
	console.log(elem);
});

console.log(document.getElementsByTagName("p"));

// Selectors => Query Selector and Query Selector all
let para = document.querySelectorAll("p.info");
console.log(para);

let hOne = document.querySelector("#heading");
console.log(hOne);

function hightlightText() {
	console.log("About to highlight a text");

	const paraElems = document.querySelectorAll("p.info");

	paraElems.forEach((elem) => (elem.style.backgroundColor = "yellow"));
}

function filterList() {
	const inputElem = document.getElementById("searchInput");

	const input = inputElem.value;

	const listElems = document.querySelectorAll("ul#itemList li");

	listElems.forEach(
		(item) =>
			(item.style.display =
				item.innerText.toLowerCase().includes(input.toLowerCase()) ?
					"block"
				:	"none"),
	);
}
