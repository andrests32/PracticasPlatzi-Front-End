const h1 = document.querySelector(`h1`); // "querySelector" lo utilizamos como si fueta un CSS enviadole nombre de un elemento utilizando #, un id, el punto. recordaremos que utilizamos los (#, un id, el punto.) como selectores de acurdo a la importancia que le damos a las clases..
const p = document.querySelector(`p`);
const parrafito = document.getElementsByClassName(`.parrafito`); //"getElementById" con el elemento antes dicho ya no tenemos que colocar ningun selector de importancia ya que el (getElementById) lo hace solo debemos poner el nombre del id o la clase y funciona con alta importancia..
const pid = document.getElementById(`pid`);
const input = document.querySelector(`input`);
// 
console.log(input.value)
// 
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
// 
//Con este tipo de elemento "innerHTML" podemos hacer HTML directamente en JavaScrip y colocar codigo html malicioso, lo que por que seguridad se debe utilizar "innerText" para poder defender nuestro codigo de posibles ataques informaticos..!!
// 
h1.innerHTML = `Patito <br> feo`;
h1.innerText = `Patito <br> feo`;
// 
// 
// 
// console.log(h1.getAttribute(`class`));
// h1.setAttribute(`class`, `rojo`); 
// 
///Con estas propiedades podemos modificar las clases de cada elemento que tenga nuestro codigo de html 
h1.classList.add(`rojo`);
h1.classList.remove(`verde`); 
// h1.classList.toggle(`verde`); 
// h1.classList.contains(`verde`); 
// 
input.value="456" 
// 
/// Aqui tenemos un ejemplo de como podemos colocar una imagen sin la necesidad de crearla directamente en html lo que hacemos aqui es que metemos con codigo JS dentro de una clase con el atrinuto (append o appendChild) que realizan la misma funcion de incrustar la imagen con un atributo a una class.
// 
const img = document.createElement(`img`);
img.setAttribute(`src`, `https://images.pexels.com/photos/16164299/pexels-photo-16164299/free-photo-of-paisaje-naturaleza-hierba-acantilado.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load`);
console.log(img);
// 
pid.innerHTML = "" //CON ESTA SINTAXIS LO QUE LOGRAMOS ES HACER QUE NUESTRO PARRAFO QUE COLOCAMOS EN HTML DESAPAREZCA DEBIDO AL innerHTML ya que crea un string vacio
// 
pid.append(img);
// 
// 
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
SEGUNDA CLASE DE MANIPULACION DEL DOM////home/andrests/Escritorio/JS basico practico.




