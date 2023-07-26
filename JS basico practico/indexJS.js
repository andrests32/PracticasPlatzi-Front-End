const h1 = document.querySelector(`h1`);
const p = document.querySelector(`p`);
const parrafito = document.getElementsByClassName(`.parrafito`);
const pid = document.querySelector(`#pid`);
const input = document.querySelector(`input`);

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//Con este tipo de elemento "innerHTML" podemos hacer HTML directamente en JavaScrip y colocar codigo html malicioso, lo que por que seguridad se debe utilizar "innerText" para poder defender nuestro codigo de posibles ataques informaticos..!!

h1.innerHTML = `Patito <br> feo`;
h1.innerText = `Patito <br> feo`;



// console.log(h1.getAttribute(`class`));
// h1.setAttribute(`class`, `rojo`);

///Con estas propiedades podemos modificar las clases de cada elemento que tenga nuestro codigo de html 
h1.classList.add(`rojo`);
h1.classList.remove(`verde`);