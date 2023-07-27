// const h1 = document.querySelector(`h1`); // "querySelector" lo utilizamos como si fueta un CSS enviadole nombre de un elemento utilizando #, un id, el punto. recordaremos que utilizamos los (#, un id, el punto.) como selectores de acurdo a la importancia que le damos a las clases..
// const p = document.querySelector(`p`);
// const parrafito = document.getElementsByClassName(`.parrafito`); //"getElementById" con el elemento antes dicho ya no tenemos que colocar ningun selector de importancia ya que el (getElementById) lo hace solo debemos poner el nombre del id o la clase y funciona con alta importancia..
// const pid = document.getElementById(`pid`);
// const input = document.querySelector(`input`);
// // 
// console.log(input.value)
// // 
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });
// // // 
// // //Con este tipo de elemento "innerHTML" podemos hacer HTML directamente en JavaScrip y colocar codigo html malicioso, lo que por que seguridad se debe utilizar "innerText" para poder defender nuestro codigo de posibles ataques informaticos..!!
// // // 
// h1.innerHTML = `Patito <br> feo`;
// h1.innerText = `Patito <br> feo`;
// // //  
// // // 
// // // 
// // // console.log(h1.getAttribute(`class`));
// // // h1.setAttribute(`class`, `rojo`); 
// // // 
// // ///Con estas propiedades podemos modificar las clases de cada elemento que tenga nuestro codigo de html 
// // h1.classList.add(`rojo`);
// // h1.classList.remove(`verde`); 
// // // h1.classList.toggle(`verde`); 
// // // h1.classList.contains(`verde`); 
// // // 
// input.value="456" 
// // // 
// // /// Aqui tenemos un ejemplo de como podemos colocar una imagen sin la necesidad de crearla directamente en html lo que hacemos aqui es que metemos con codigo JS dentro de una clase con el atrinuto (append o appendChild) que realizan la misma funcion de incrustar la imagen con un atributo a una class.
// // // 
// // const img = document.createElement(`img`);
// // img.setAttribute(`src`, `https://images.pexels.com/photos/16164299/pexels-photo-16164299/free-photo-of-paisaje-naturaleza-hierba-acantilado.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load`);
// // console.log(img);
// // // 
// // pid.innerHTML = "" //CON ESTA SINTAXIS LO QUE LOGRAMOS ES HACER QUE NUESTRO PARRAFO QUE COLOCAMOS EN HTML DESAPAREZCA DEBIDO AL innerHTML ya que crea un string vacio
// // // 
// // pid.append(img);
// // // 
// // // 
// // // 
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // SEGUNDA CLASE DE MANIPULACION DEL DOM CON ESCUCHAR LOS EVENTOS DE LOS USURIOS UTILIZANDO LOS VALUES DE CADA UNO DE LAS ETIQUETAS..

// const h1 = document.querySelector(`h1`);
// const input1 = document.querySelector(`#calculo1`);
// const input2 = document.querySelector(`#calculo2`);
// const btn = document.querySelector(`#btnCalcular`);
// const pResult = document.querySelector(`#result`);

// function btnOnClick() {
//   const sumaInputs = input1.value + input2.value;  ///Si queremos hacer que estos dos valores no se concatenen tenemos opciones como (number o parseInt) estos nos ayudan a comvertios los string en numeros cada uno tiene una propiedad que se debe tomar en cuenta para cambiar antes a numero ,,, Tenemos una nueva opcion que se usa anteponiendo el signo + antes para que se conviertan en numero se la conoce como unitaryPlus es con el signo mas + (const sumaInputs = +input1.value  +input2.value;) de este modo se sumaran como una operacion matematica..
//   pResult.innerText ="Resultado: " +  sumaInputs;
// } 

/////////////////////////////////////////////////////////////////////////
// ESTA CLASE SE TRATA DE UNA NUEVA FUNCION LLAMADA (addEventListener) 

const h1 = document.querySelector(`h1`);
const form = document.querySelector(`#form`);
const inputC1 = document.querySelector(`#Calc1`);
const inputC2 = document.querySelector(`#Calc2`);
const btn = document.querySelector(`#btnCalculos`)
const pResultado = document.querySelector(`#resultado`);


//ESTE EJEMPLO NOS SIRVE PARA addEventListener///

// btn.addEventListener(`click`, butOnClick); //PARA HACER QUE (addEventListener) FUNCIONE CORRECTAMENTE DENTRO DE LOS PARAMETROS YA NO COLOCAMOS LOS () DE NUESTRA FUNCION , POR QUE addEventListener LO HACE POR DEFECTO SI AGREAMOS LOS () ESTARIAMOS DICIENDO QUE EJECUTE UNA FUNCION QUE YA FUE EJECUTADA..

// function butOnClick () {
//     const sumaInpts = inputC1.value + inputC2.value;
//     pResultado.innerText = "RESULTADO: " + sumaInpts;
// }

////AHORA HAREMOS EL MISMO PERO CON UN FORMULARIO/// NOTA: IMPORTANTE CUANDO UTILIZAMOS FORMULARIO ESTA ETIQUETA LO QUE HACE ES QUE EL ULTIMO BOTON QUE HAYA DENTRO DE NUESTRO CODIGO LO CONVIERTA EN UN SUMMIT ES COMO UN EFECTO DE QUE LA PAGINA SOLITA SE ESTE RECARGANDO O REFRESCANDO ESTO ES POR DEFECTO.


/////ESTE ES UN METODO PARA PREVENIR QUE LA PAGINA SE RECARGUE//
// form.addEventListener(`submit`, sumarInputValues);

// function sumarInputValues(event) {
//     console.log({event});
//     event.preventDefault(); ///CUANDO COLOCAMOS EL event.preventDefault(); HACEMOS QUE LA PAGINA NO SE RECARGUE DEBIDO AL DEFAULT DE FORMULARIO COMO SE MENCIONA ARRIBA. 
//     const sumaInpts = inputC1.value + inputC2.value;
//     pResultado.innerText = "RESULTADO: " + sumaInpts;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////// ESTE ES UN PROCESO MAS CORTO EN DONDE DECLARAMOS QUE LA ETIQUETA DE BUTTON DE HTML SE DE TIPO BOTON COMO EN EL SIGUENTE EJEMPLO (<button type="button" id="btnCalculos">Calcular</button>) ES DECIR LE ESTAMOS ASIGNANDO  type="button" LO QUE SE INTERPRETA QUE YA NO DEBE HACER SUBMIT OSEA RECARGARSE LA PAGINA CUANDO TOMA POR DEFAUL EL ULTIMO BOTON POR DEFAULT..

btn.addEventListener(`click`, sumarInputValues);

function sumarInputValues() {
        
    const sumaInpts = inputC1.value + inputC2.value;
    pResultado.innerText = "RESULTADO: " + sumaInpts;
}





