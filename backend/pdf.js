const PDF = require('pdfkit');
const fs = require('fs');

var doc = new PDF();

doc.pipe(fs.createWriteStream (__dirname+'/Prueba.pdf'));

doc.font('Times-Bold').text('INSTITUTO TECNOLOGICO DE ADMINISTRACION DE EMPRESAS',{
align:'center'    
})


doc.image('././node_modules/Logo/intae.jpg',180,100,{
fit: [250,300],
align:'center',
valign:'center', 
})

doc.font('Times-Bold').text('DATOS DE ALUMNO',75,400,{
    align:'center'
})


doc.font('Times-Bold').text('Nombre Completo:_______________',75,450,{
    align:'justify'
})


doc.font('Times-Bold').text('Identidad:_______________',75,500,{
    align:'justify'
})


doc.font('Times-Bold').text('Seccion:_______________',75,550,{
    align:'justify'
})

doc.font('Times-Bold').text('Modalidad:_______________',75,600,{
    align:'justify'
})

doc.font('Times-Bold').text('Jornada:_______________',75,650,{
    align:'justify'
})

doc.end();

console.log('Archivo Generado');
