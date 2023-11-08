console.log('Inicio del Programa'); //1

setTimeout(()=>{
    console.log('El primer Timeout'); //5
}, 3000);

setTimeout(()=>{
    console.log('El segundo Timeout'); //3
}, 0);

setTimeout(()=>{
    console.log('El tercero Timeout'); //4
}, 0);

console.log('Fin del Programa'); //2