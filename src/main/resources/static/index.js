/**
 * 
 */
let enviar = document.getElementById('enviar_reg');

var id = document.querySelector('#ID_USUARIO').value;
var user = document.querySelector('#NOMBRE_USUARIO').value;
var pass = document.querySelector("#contra").value;


let datos = {
	"id_USUARIO": id,
	"nombre_USUARIO": user,
	"pass": pass
}


enviar.addEventListener('click', function () {
/*
	$.ajax({
		type:"POST",
		url: "http://192.168.1.102:8080/users",
		data: {
			json_string:JSON.stringify(datos)
		}, 

		success: function(response){
			console.log(response);
		}
	})*/


	
	console.log(datos);

/*
	const HTTP = new XMLHttpRequest();
	const url = 'http://192.168.1.102:8080/users';

	
	HTTP.open("POST",url);
	HTTP.setRequestHeader("Content-Type", "application/json");
	HTTP.send(JSON.stringify(datos));
	
	
	HTTP.onreadystatechange=(e)=>{
		console.log(HTTP.);
	}*/
});

