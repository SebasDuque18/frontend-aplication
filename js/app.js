// importar los metodo del api.js
import { getPrenda,  deletePrenda, updatePrenda, getPrendaByID } from "./api";

document.addEventListener("DOMContentLoaded", async() => {
    const prendaslist = document.getElementById("prenda-list");

    const prendas = await getPrenda();
    prendaslist.inertHTML = prendas.map(prenda => `
       <div class="col-xs-12 col-sn-6 col-nd-3 card">   
       <div class="card-body d-flex flex-column justify-content-end">
        <h5 class="card-title">${prendas.name}</h5>
        <p class="card-text">${prenda.price}</p>
        <a onclick="viewPrendas(${prenda.id})" class="btn btn-primary">ver mas</a>
        </div>
        </div>
        `).join("");

});
 
// Metodo para ver los detalles del producto cuando damos click en el boton ver mas
window.viewPrenda = async (id) => {
    const prenda = await getPrendaByID(id);

    const prendasDetails = `
        <div class="col">
        <h3>${prenda.name}</h3>
        <p>${prenda.description}</p>
        <p>Precio: ${prenda.price}</p>
        <button class="btn bnt-warning" onclick="enableEdit(${prenda.id})">Editar</button>
         <button class="btn bnt-danger" onclick="deletePrenda(${prenda.id})">Eliminar</button>
         </div>
    `;
    document.getElementById("prenda-list").innerHTML = prendasDetails
};

// Vista para editar la informacion
window.enableEdit = async (id) => {
    const prenda = await getPrendaByID(id);

    const editform = `
        <div> class="row gap-3">
        <input type="text" id="name" value="${prenda.name}">
        <textarea id="description">${prenda.description}</textarea>
        <input type="number" id="price" value=${prenda.price}">
        <button class="btn btn-success" onclick="saveEdit(${id})
        ">Guardar</button>
        </div>
    `;
    document.getElementById("product-list").innerHTML = editform;
};

// Guardar la informacion actualizada
window.saveEdit = async (id) => {
    const prendaupdate = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: parseFloat(document.getElementById("price").value),
    };
    await updatePrenda(id, prendaupdate);
    location.reload(); // Recarga la pagina para ver los cambios
};

// Borrar el producto selecionado
window.deletePrenda = async (id) => {
    await deletePrenda(id);
    location.reload(); // Recarga la pagina para ver los cambios
}
