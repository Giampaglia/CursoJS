const numero = Number(prompt('Digite um numero:'));
const numberTitle = document.getElementById('numberTitle');
const text =document.getElementById('text');

numberTitle.innerHTML = numero;

text.innerHTML = '';
text.innerHTML += `<p>A raiz quadrada do seu número é:${numero ** 0.5}</p>`; 
text.innerHTML += `<p>${numero} é inteiro ?${Number.isInteger(numero)}</p>`; 
text.innerHTML += `<p>É nam ?${Number.isNaN(numero)}</p>`; 
text.innerHTML += `<p>Arrendondado para cima:${Math.floor(numero)}</p>`; 
text.innerHTML += `<p>Arrendondado para cima:${Math.ceil(numero)}</p>`; 
text.innerHTML += `<p>Numero com duas casas decimais:${numero.toFixed(2)}</p>`; 




