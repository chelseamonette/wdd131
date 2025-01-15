const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value ;

deleteButton.textContent = '❌';
let del = document.getElementById("close-button");
console.log(del.ariaLabel);

li.append('deleteButton');

list.append(li);