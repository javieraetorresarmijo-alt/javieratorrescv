//VISTA PREVIA DE EJERCICIOS
const MARCO = document.getElementById('vista-marco');
const TITULO_VISTA = document.getElementById('vista-titulo');
const EJERCICIOS = document.querySelectorAll('.ejercicio');
const ESCRITORIO = window.matchMedia('(min-width:1024px)');

//CARGA UN EJERCICIO EN EL IFRAME Y LO MARCA COMO ACTIVO
function mostrarEjercicio(ejercicio){
    const enlace = ejercicio.querySelector('.ejercicio__titulo a');
    MARCO.src = enlace.href;
    TITULO_VISTA.textContent = 'Vista previa · ' + enlace.textContent.trim();
    for(const e of EJERCICIOS){
        e.classList.remove('activo');
    }
    ejercicio.classList.add('activo');
}

//al hacer clic en ejercicio se muestra en el iframe
for(const ejercicio of EJERCICIOS){
    ejercicio.addEventListener('click', function (evento){
        if(!ESCRITORIO.matches){
            return;
        }
        if(evento.target.closest('.ejercicio__ver')){
            return;//boton ver abre pagina en pestaña nueva
        }
        evento.preventDefault();
        mostrarEjercicio(ejercicio);
    });
}

//en escritorio arranca mostrando el primer ejercicio
if(ESCRITORIO.matches){
    mostrarEjercicio(EJERCICIOS[0]);
}
ESCRITORIO.addEventListener('change', function(){
    if(ESCRITORIO.matches && !MARCO.getAttribute('src')){
        mostrarEjercicio(EJERCICIOS[0]);
    }
});

