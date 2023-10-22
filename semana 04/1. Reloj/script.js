function dibujarReloj() {
    var canvas = document.getElementById("miCanvas");
    var contexto = canvas.getContext("2d");
    var centroX = canvas.width / 2;
    var centroY = canvas.height / 2;
    var radio = canvas.width / 2;

    // Borra el lienzo
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja el círculo del reloj
    contexto.beginPath();
    contexto.arc(centroX, centroY, radio, 0, 2 * Math.PI);
    contexto.fillStyle = "rgb(38, 236, 66)";
    contexto.fill();

    contexto.closePath();

    contexto.beginPath();
    contexto.arc(centroX, centroY, 10, 0, 2 * Math.PI);
    contexto.fillStyle = "white";
    contexto.fill();
    contexto.strokeStyle = "black";
    contexto.stroke();
    contexto.closePath();

    // Dibuja los números de las horas
    contexto.font = "20px Arial";
    contexto.fillStyle = "black";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";


    var hora = new Date();
    var horas = hora.getHours();
    var minutos = hora.getMinutes();
    var segundos = hora.getSeconds();


    for (var i = 1; i <= 12; i++) {
        var angulo = (i - 3) * 30 * (Math.PI / 180);
        var xNumero = centroX + (radio - 30) * Math.cos(angulo);
        var yNumero = centroY + (radio - 30) * Math.sin(angulo);
        contexto.fillText(i, xNumero, yNumero);
    }

    // Obtiene la hora actual

    // Dibuja las manecillas (después de los números)
    var radioHora = radio * 0.4;
    var radioMinuto = radio * 0.6;
    var radioSegundo = radio * 0.8;

    // Código para las manecillas aquí...

    // Dibuja la manecilla de las horas
    var anguloHora = (horas % 12) * 30 + (minutos / 60) * 30 - 90;
    var xHora = centroX + radioHora * Math.cos(anguloHora * (Math.PI / 180));
    var yHora = centroY + radioHora * Math.sin(anguloHora * (Math.PI / 180));

    contexto.beginPath();
    contexto.moveTo(centroX, centroY);
    contexto.lineTo(xHora, yHora);
    contexto.strokeStyle = "rgb(227, 92, 49)";
    contexto.lineWidth = 8;
    contexto.stroke();
    contexto.closePath();

    // Dibuja la manecilla de los minutos
    var anguloMinuto = minutos * 6 + (segundos / 60) * 6 - 90;
    var xMinuto = centroX + radioMinuto * Math.cos(anguloMinuto * (Math.PI / 180));
    var yMinuto = centroY + radioMinuto * Math.sin(anguloMinuto * (Math.PI / 180));

    contexto.beginPath();
    contexto.moveTo(centroX, centroY);
    contexto.lineTo(xMinuto, yMinuto);
    contexto.strokeStyle = "blue";
    contexto.lineWidth = 5;
    contexto.stroke();
    contexto.closePath();

    // Dibuja la manecilla de los segundos
    var anguloSegundo = segundos * 6 - 90;
    var xSegundo = centroX + radioSegundo * Math.cos(anguloSegundo * (Math.PI / 180));
    var ySegundo = centroY + radioSegundo * Math.sin(anguloSegundo * (Math.PI / 180));

    contexto.beginPath();
    contexto.fillStyle = "white"; // Color de relleno
    contexto.fillRect(160,235, 80, 30); // Dibuja el rectángulo
    contexto.closePath();

    // Dibuja los números de las horas
    contexto.font = "20px Arial";
    contexto.fillStyle = "black";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";

    contexto.fillText(`${horas}:${minutos}:${segundos}`, canvas.width / 2, canvas.height / 2 + 50);
    contexto.fillText("FIS", canvas.width / 2, canvas.height / 2 + 80);


    contexto.beginPath();
    contexto.moveTo(centroX, centroY);
    contexto.lineTo(xSegundo, ySegundo);
    contexto.strokeStyle = "yellow";
    contexto.lineWidth = 2;
    contexto.stroke();
    contexto.closePath();
}

// Actualiza el reloj cada segundo
setInterval(dibujarReloj, 1000);

// Dibuja el reloj inicialmente
dibujarReloj();
