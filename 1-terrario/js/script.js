dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

function dragElement(terrariumElement) {
  //la función afecta a todos los elementos del terrarium
  //posiciones iniciales
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;
  //pointerdown se refiere a hacer click con el ratón sobre el elemento
  //pointerDrag hace que se pueda mover tras seleccionarlo

  function pointerDrag(e) {
    //función para que se mueva el elemento con el ratón
    e.preventDefault();
    console.log(e); //output de info
    //cambio de posiciones
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onpointermove = elementDrag; //cuando el ratón se mueve, el elemento también
    document.onpointerup = stopElementDrag; //cuando el ratón se suelta, el elemento se detiene
  }

  function elementDrag(e) {
    //función de se mueve el elemento
    //cambio de posiciones
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log(pos1, pos2, pos3, pos4); //output de info

    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
    //las nuevas posiciones se modifican mediante el cálculo de pixeles
  }

  function stopElementDrag() {
    //función de se detiene el elemento
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
