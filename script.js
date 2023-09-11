document.addEventListener('DOMContentLoaded', () => {  
    document.getElementById('Enviar').addEventListener('click', () => {
        enviarDatos();
    });
    
    });  

function enviarDatos() {
    let nom = document.getElementById('nombre').value;
    let ap = document.getElementById('apellido').value;
    let gru = document.getElementById('grupo').value;
    let sub = document.getElementById('subgrupo').value;


fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo275', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    name: nom,
    apellido: ap,
    grupo: gru,
    subgrupo: sub
  })
})
.then(response => response.json())
.then(data => { 
    document.getElementById('nombre').value="";
    document.getElementById('apellido').value="";
    document.getElementById('grupo').value=0;
    document.getElementById('subgrupo').value=0;
    alert('Se envió correctamente!');
  });

     }