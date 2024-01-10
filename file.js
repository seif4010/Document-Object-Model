const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// paragraph
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = 'Hey I am Red paragraph!';
paragraph.setAttribute('style', 'color: red;'); 

// h3
const h3 = document.createElement('p');
h3.classList.add('h3');
h3.textContent = 'Hey I am blue h3!';
h3.setAttribute('style', 'color: blue;'); 

// DIV
const div = document.createElement('div');