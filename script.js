var animarVisibles = function() {
  var elementos;
  var windowHeight;
  function init() {
    elementos = document.querySelectorAll('.oculto'); /*cojo los elementos con oculto*/
    elementosLista = document.querySelectorAll('.dcha'); /*cojo los elementos con ocultoLista*/
    windowHeight = window.innerHeight * 0.75;
    addEventHandlers();
    posicionar();
    /*al inicio las posiciones no son correctas hasta que scrolleas,
    los primeros elementos aparecen antes de tiempo mult por 0.75 para que no se note tanto*/
  }
  function actualizarAltura(){
    windowHeight = window.innerHeight * 0.75;
    posicionar()
  }
  function addEventHandlers() {
    window.addEventListener('scroll', posicionar); /*actualizar posiciones al hacer scroll*/
    window.addEventListener('resize', actualizarAltura); /*actualizar altura y posiciones al cambiar tamaño ventana*/
  }
  function posicionar() { /*calcular posicion de elemento - altura para ver si está en pantalla*/
    for (var i = 0; i < elementos.length; i++) {
      var positionFromTop = elementos[i].getBoundingClientRect().top;
      //console.log(positionFromTop);
      if (positionFromTop - windowHeight <= 0) { /*cambiar clase css para que salga la animacion*/
        elementos[i].className = elementos[i].className.replace(
          'oculto',
          'entrada_fade'
        );
      }
    }
    for (var i = 0; i < elementosLista.length; i++) {
      var positionFromTop = elementosLista[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) { /*cambiar clase css para que salga la animacion*/
        elementosLista[i].className = elementosLista[i].className.replace(
          'dcha',
          'entrada_derecha'
        );
      }
    }
  }
  return {
    init: init
  };
};

animarVisibles().init();


function ocultarHeader(){
  var grd= document.getElementById("mainGrid");
  var hdr = document.querySelector("header");
  hdr.style.visibility = "hidden";
  grd.className = grd.className.replace('grid', 'grid_noHeader');
}
/*
function sacarHeader(){
hdr.style.visibility = "visible";
grd.className = grd.className.replace('grid_noHeader', 'grid');
}*/

function comprobarPagina(){
  var ruta = window.location.pathname.split('/');
  var pagina = ruta[ruta.length -1];
  /*console.log(ruta);
  console.log(pagina);*/
  var priv = pagina.split("_");
  var privtype = priv[priv.length -2];
  /*console.log(priv);
  console.log(privtype);*/
  if (privtype.valueOf() === "privacy"){
    ocultarHeader();
  }
}

comprobarPagina();
