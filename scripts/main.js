import { product } from './product.js';
import { ProductManager } from './productManager.js';


//Instanciar el adminitrador de productos
const productManager = new ProductManager();

// Evento del formulario para agregar

document.getElementById('product-form-events').addEventListener('submit', (event) => {
    event.preventDefault();

    const id = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productQuantity = document.getElementById('product-quantity').value;
    
    //Crear una instancia de Product con los valores del formulario
    const newProduct = new Product(Date.now(), productName, productPrice, productQuantity);

    //agrega el nuevo producto al administrador de productos
    productManager.addProduct(newProduct);

    //Limpiar el formulario
    this.reset();


    //Actualizamos la tabla de inventario
    updateInventoryTable();

    

});