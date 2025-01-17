const arr=[];
inicio();
async function inicio() {
    if (await rellenaArray() != null) {
        arrJuegos = await rellenaArray();
    }
   
}
document.querySelector("#formulario").addEventListener("submit",(ev)=> {
   
    const obj={
        nombre:document.querySelector("#nombre").value,
        email:document.querySelector("#email").value,
        mensaje:document.querySelector("#mensaje").value,
        cancion:document.querySelector("#cancion").value,
        impacto:document.querySelector("#impacto").value
    }

    arr.push(obj);
    
    guardar(arr);

    ev.preventDefault();
    

});

async function guardar(arr) {
    datosJSON=JSON.stringify(arr);
    let url="https://btsapp-2c58d-default-rtdb.firebaseio.com//btsContact.json";
    const datatype= await fetch(url, {
    method:'PUT',
    body: datosJSON,
    headers: {
        'Content-Type':'application/json'
    }
    });
    const response= await datatype.json()
    alert("Gracias por contactarnos");
    limpiar();
}


async function rellenaArray() {
    let url="https://btsapp-2c58d-default-rtdb.firebaseio.com//btsContact.json";
    const datatype= await fetch(url);
    const response= await datatype.json();
    return response;
}

function limpiar() {
    document.querySelector("#formulario").reset();
}