let edad;

edad = Number(prompt('ingrese la edad '))

if ( edad < 10){
    alert('es un niño')
} else if ( edad >=10 && edad <15 ){
    alert('es preadolecente')
} else if ( edad >=15 && edad <18){
    alert('es un adolecente')
} else if (edad >=18 && edad <50){
    alert('es un adulto')
} else if (edad >= 50){
    alert('es adulto mayor')
}