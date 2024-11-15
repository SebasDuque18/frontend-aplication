const API_URL = "http://localhost:3000/api/prenda"

export const  getPrenda = async () => {
    const response = await fetch(API_URL)
    return response.json();
};

//Obtener producto por ID
export const getPrendaByID = async (id) => {
    const  response = await fetch (`${API_URL}/${id}`)
    return response.json();
};

// Crear producto
export const addPrenda = async (prenda) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-type": "aplication/json" },
        body: JSON.stringify(prenda)
    })
    return response.json();
};

// Actualizar un producto
export const updatePrenda = async (id, prenda) => {
    const response = await fetch(`${API_URL}/${id}`,{
        method: "PUT",
        headers: { "Content-type": "aplication/json" },
        body: JSON.stringify(prenda)
    })
    return response.json();
};

// Borrar un producto
export const deletePrenda = async (id) => {
    return fetch(`${API_URL}/${id}`,{
        method: "DELETE",
    });
    
};