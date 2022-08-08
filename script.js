let buttonsArray = document.getElementsByTagName('button');
console.dir(buttonsArray); /*HTMLCollection(0)
0: button
1: button
2: button
3: button
4: button
5: button
length: 6
[[Prototype]]: HTMLCollection*/

console.dir(buttonsArray.item(0));//null

buttonsArray.forEach(element => {//Uncaught TypeError: buttonsArray.forEach is not a function
    console.log(element)
});
