/*const boton_todo = document.getElementById("boton_todo");
boton_todo.addEventListener("click", () => {
    console.log("He dado click");
})*/

const input = document.getElementById("input");
const boton_todo = document.getElementById("boton_todo");
const contenido_todo = document.querySelector(".contenido_todo");
let id = 1;

function ingresarTareas() {
    const contenedor_list = document.createElement("div");
    const contenedor_list1 = document.createElement("div");
    const checkbox = document.createElement("input");
    const parrafo = document.createElement("p");
    const div_boton = document.createElement("div");
    const button = document.createElement("button");
    const icono = document.createElement("i");

    parrafo.innerHTML = input.value;
    contenedor_list.classList.add("contenido_listado");
    contenedor_list1.classList.add("contenido_listo_1");
    checkbox.classList.add("casilla");
    checkbox.setAttribute("type", "checkbox");
    parrafo.classList.add("actividad");
    div_boton.classList.add("contenido_listado_boton");
    button.classList.add("boton_eliminar");

    button.setAttribute("id", id++);
    icono.classList.add("fas", "fa-trash-alt");

    contenedor_list.appendChild(contenedor_list1);
    contenedor_list.appendChild(div_boton);
    contenedor_list1.appendChild(checkbox);
    contenedor_list1.appendChild(parrafo);
    button.appendChild(icono);
    div_boton.appendChild(button);

    contenido_todo.appendChild(contenedor_list);

    input.value = "";

    function removertodo(id) {
        document.getElementById(id).parentElement.parentElement.remove();
    }

    button.addEventListener("click", () => {
        removertodo(button.getAttribute("id"));
    })
}

boton_todo.addEventListener("click", () => {
    if (input.value === "" || input.value.trim() === "") {
        window.alert("Entrada Vacia");
    } else {
        ingresarTareas();
    }
});