const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey, I'm Red!";

content.appendChild(para);


const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3";

content.appendChild(h3);

const div2 = document.createElement("div");
div2.style.backgroundColor = "pink";
div2.style.border = "black";

content.appendChild(div2);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

div2.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";

div2.appendChild(p);



