const data = new Date('1971-10-23 10:20:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
case 0:
    diaSemanaTexto = 'Domingo';
    break;
case 1:
    diaSemanaTexto = 'Segunda';  
    break;
case 2:
    diaSemanaTexto = 'Terca';
    break;
case 3:
    diaSemanaTexto = 'Quarta';
    break;
case 4:
    diaSemanaTexto = 'Quinta';
    break;
case 5:
    diaSemanaTexto = 'Sexta';
    break;
case 6:
    diaSemanaTexto = 'Sabado'; 
    break; 
default:
    diaSemanaTexto = '';    
}
console.log(diaSemana, diaSemanaTexto);

/*  COM 'IF' E 'ELSE  
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terca';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sabado';
} else {
    diaSemanaTexto = '';
}
console.log(diaSemana, diaSemanaTexto);*/