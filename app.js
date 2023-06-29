const input = document.querySelector("#id");
const buscador = document.querySelector("#buscador");
const nombre = document.querySelector("#nombre");
const tipo = document.querySelector("#tipo");
const nivel = document.querySelector("#nivel");

buscador.addEventListener("click", (e) => {
    e.preventDefault();
    let bandera = false
    nombre.textContent = "";
    tipo.textContent = "";
    nivel.textContent = "";
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == input.value){
            bandera = true;
            nombre.textContent = `Nombre: ${data[i].nombre}`;
            tipo.textContent = `Tipo: ${data[i].tipo}`;
            nivel.textContent = `Nivel: ${data[i].nivel}`;
    }
}
});