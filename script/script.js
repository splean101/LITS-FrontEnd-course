let buttonsArray = [...document.getElementsByTagName('button')];

//let buttonsArray = document.getElementsByTagName('button');
console.dir(buttonsArray);
//console.dir(buttonsArray[0]);//null

function showText(elem) {
  console.log(elem.previousElementSibling);
  if (elem.previousElementSibling.clientHeight === 80) {
    elem.previousElementSibling.style.height = '100%';
    elem.innerText = 'Show Less...';
  } else {
    elem.previousElementSibling.style.height = '80px';
    elem.innerText = 'Read More...';
  }
}

buttonsArray.forEach((element) => {
  element.addEventListener('onclick', showText(this));
});
