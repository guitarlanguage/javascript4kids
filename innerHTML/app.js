var headingElement = document.getElementById('main-heading');

console.log(headingElement.innerHTML);

var newHeadingText = prompt('enter new heading text');

headingElement.innerHTML = newHeadingText;