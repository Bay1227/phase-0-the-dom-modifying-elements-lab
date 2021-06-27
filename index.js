// Write your code here!
document.querySelector('main').remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';

const header = document.getElementById('h1');
newHeader.innerHTML = "<h1>Victory</h1><h3>Bay, is the champion</h3>"
