const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// paragraph
const paragraph = document.createElement('p');
paragraph.textContent = 'Hey I am Red paragraph!';
paragraph.setAttribute('style', 'color: red;'); 
container.appendChild(paragraph);
// document.body.appendChild(paragraph);

// h3
const h3 = document.createElement('p');
h3.textContent = 'Hey I am blue h3!';
h3.setAttribute('style', 'color: blue;');
container.appendChild(h3);
// document.body.appendChild(h3);

// create element div
const div = document.createElement('div');
div.setAttribute("style", 'background; pink; border; 1px solid black;');
// create h1 element within the DIV and add it to the container
const h1 = document.createElement('h1');
h1.textContent = 'Hey I am another h1!';
// create p element within the div and add it to the container
const p = document.createElement('p');
p.textContent = 'Me too!'
//append both h1 and p to the div element
div.appendChild(h1);
div.appendChild(p);
//append the div to the parent container
container.appendChild(div);