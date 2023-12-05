import { product } from './product.js';
import { ProductManager } from './productManager.js';


//Instanciar el adminitrador de productos
const productManager = new ProductManager();

// Evento del formulario para agregar

document.getElementById('product-form-events').addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtenemos los valores del formulario
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;
    const precio = document.getElementById('precio').value;

    const product = new Product(id, nombre, cantidad, precio);

    productManager.addProduct(product);

    //Limpiar el formulario
    document.getElementById('product-form-events').reset();

    //Mostrar la lista de productos
    productManager.showProducts();
});