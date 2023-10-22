const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = canvas.width / 3;
const data = [
    { value: 10, color: 'rgb(165, 49, 227)', label: '10%' },
    { value: 20, color: 'rgb(21, 74, 216)', label: '20%' },
    { value: 30, color: 'rgb(84, 250, 12)', label: '30%' },
    { value: 40, color: 'rgb(241, 93, 13)', label: '40%' },
];

let startAngle = 0;

data.forEach((segment) => {
    const endAngle = (Math.PI * 2 * segment.value) / 100 + startAngle;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = segment.color;
    ctx.fill();

    // Etiqueta numérica en el centro de cada segmento
    const labelX = centerX + (radius / 1.5) * Math.cos(startAngle + (endAngle - startAngle) / 2);
    const labelY = centerY + (radius / 1.5) * Math.sin(startAngle + (endAngle - startAngle) / 2);
    ctx.fillStyle = 'black'; // Color de la etiqueta
    ctx.font = '18px Arial'; // Tamaño de la fuente para las etiquetas
    ctx.fillText(segment.label, labelX, labelY);

    startAngle = endAngle;
});

// Agregar leyenda dentro del canvas
const legendX = centerX + radius + 10;
let legendY = centerY - radius;

data.forEach((segment) => {
    ctx.fillStyle = segment.color;
    ctx.fillRect(legendX, legendY, 20, 20);

    ctx.fillStyle = 'black'; // Color de la etiqueta
    ctx.font = '18px Arial'; // Tamaño de la fuente para la leyenda
    ctx.fillText(segment.label, legendX + 30, legendY + 15);

    legendY += 30; // Espacio entre elementos de la leyenda
});

// Agregar el título dentro del canvas
ctx.fillStyle = 'black'; // Color del título
ctx.font = '24px Arial'; // Tamaño de la fuente para el título
ctx.fillText('GRÁFICO DE PASTEL', centerX - 110, centerY - radius - 30);
