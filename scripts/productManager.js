import { Product } from "./product";

export class Product{
    #products;

    constructor(){
        this.#products = [];
 
    }

    //Metodo para obtener la lista de productos
    listProducts(){
        return this.#products;
    }

    //Metodo para agregar el producto
    addProduct(product){
        this.#products.push(product);
    }

    //Metodo para actualizar un producto
    updateProductById(id, updateProduct){
        const index = this.#products.findIndex(product => product.id === id);
        this.#products[product] = updateProduct;

        //Si no existe error (es coincidente en el index)
        if(index !== -1){
            this.#products[index] = updateProduct;

        }
    }

    //Metodo para eliminar

    deleteProductById(id){
        const index = this.#products.findIndex(product => product.id === id);

        if(index !== -1){
            this.#products.splice(index, 1);
        }
    }

    //Metodo para mostrar todos los productos dentro del array

    showProducts(){
        for(const product of this.#products){
            console.log(`ID: ${product.id} - Nombre: ${product.nombre} - Cantidad: ${product.cantidad} - Precio: ${product.precio}`)
        }
    }

    //Getters y setters
    get products(){
        return this.#products;
    }

    set products(value){
        this.#products = value;
    }









}
