var micolor = "#000f0f";
var miotrocolor = "Grey";
var mitercercolor = "Black";
var escala = 0.5;

function cargarCanvasAside(){
	var elemento = document.getElementById('canvas');
	if(elemento && elemento.getContext){
		var contexto = elemento.getContext('2d');
		if(contexto){

			contexto.fillStyle=(mitercercolor);
			contexto.beginPath();
			contexto.arc(escala*25,escala*45,escala*20,0,Math.PI*2,true);
			contexto.closePath;
			contexto.fill();

			contexto.fillStyle=(mitercercolor);
			contexto.beginPath();
			contexto.arc(escala*78,escala*45,escala*20,0,Math.PI*2,true);
			contexto.closePath;
			contexto.fill();

			contexto.fillStyle=(micolor);
			contexto.beginPath();
			contexto.arc(escala*50,escala*90,escala*40,Math.PI,Math.PI*2,false);
			contexto.closePath;
			contexto.fill();
		};
		return contexto;
	}
}
window.addEventListener('load', function(){

	var c=document.getElementById("micanvas");
	var cxt=c.getContext("2d");
	cxt.fillStyle=(micolor);

	cxt.beginPath();
	cxt.arc(escala*50,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	cxt.fillStyle=(micolor);

	cxt.beginPath();
	cxt.arc(escala*50,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();
	cargarCanvasAside();
});


