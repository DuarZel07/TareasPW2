var http = require('http');
var url = require('url');
// Daniel Hernan Duarte Zelaya T32211252
// Con esta linea creamos nuestro servidor en el cual le damos dos parametros
http.createServer(function(req, res){
    var s = url.parse(req.url, true); // Esta linea creamos la variable que parsea el parametro de la URL
    var numeros = s.query; // Con esta linea hacemos que nuestra variable sea en query
    res.writeHead(200, {'Content-Type': 'text/html'}); // Aqui damos una conexion correcta de nuestro sevidor y que se lea en HTML
    let result = " "; // aqui creamos una variable vacia a la cual le asignaremos valores mas adelante
    result = parseFloat(numeros.num1) * parseFloat(2); // La varialble almacena el valor de s y numeros en su totalidad con lo asignado anteriormente y esta se multiplica por 2 para mostrar el doble
    res.write("El doble de " + numeros.num1 + " = " + result);// Aqui mostramos un mensaje y el resultado del doble del numero el cual se recibe en parametro
    res.write('<br>');// Este es un simple salto de linea
    result = parseFloat(numeros.num1) * parseFloat(3); // La varialble almacena el valor de s y numeros en su totalidad con lo asignado anteriormente y esta se multiplica por 3 para mostrar el triple
    res.write("El triple de " + numeros.num1 + " = " + result);//  Aqui mostramos un mensaje y el resultado del triple del numero el cual se recibe en parametro
    res.end(); // Con esto cerramos el server
}).listen(3030); // este es el puerto del servidor
//http://localhost:3030/?num1=20   ESTA ES LA URL CON LOS PARAMETROS PARA QUE REFLEJE EL RESULTADO DE LA MISMA