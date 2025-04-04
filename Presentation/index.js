const button = document.getElementById('boton');
const h1 = document.querySelector('#fullname');
const button2 = document.getElementById('boton2');
const body = document.querySelector('body');
const button3 = document.getElementById('boton3');

button.addEventListener('click', function(){
    var h1VAR = h1.textContent;
    debugger;
    if (h1.style.color === '') {
        h1.style.color = 'blue';
        h1.innerHTML = '1º DAM - Lenguaje de Marcas';
    } else {
        h1.style.color = 'red';
        h1.innerHTML = 'Samuel Márquez Ruiz';
    }
    body.style.backgroundColor = 'white';
});
button2.addEventListener('click', function(){
    h1.style.color = 'red';
    h1.textContent = 'Samuel Márquez Ruiz';
    body.style.backgroundColor = 'yellow';
});
button3.addEventListener('click', function(){
    if (body.style.backgroundColor === '') {
        body.style.backgroundColor = 'blue';
    } else {
        body.style.backgroundColor = '';
    }
});