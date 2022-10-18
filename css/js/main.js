const typed = new Typed('.typed-cursor',{

    strings:['<b class="prof">Frontend Developer.</b>'],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 95, // Velocidad en mlisegundos para poner una letra,
	startDelay: 200, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 95, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '/', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

});

 // menu
const navMenu = document.querySelector("#navMenu");
const menuIzq = document.querySelector(".navbar-default");
const close = document.querySelector("#ournavbar");

navMenu.addEventListener('click',()=>{
	navMenu.classList.toggle("menu-active");
	menuIzq.classList.add("menu-active")
	
})

close.addEventListener("click",()=>{
	navMenu.classList.toggle("menu-active");
	menuIzq.classList.remove("menu-active")
});

