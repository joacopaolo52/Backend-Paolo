class ProductManager {
    constructor() {
        this.products = [];
    }
  
    getProducts() {
        return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        let newProduct = { title, description, price, thumbnail, code, stock };

        let id = 1;
        if (this.products.length > 0) {
            id = this.products[this.products.length - 1].id + 1;
        }

        let existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.log(`El código del producto ya está en uso.`);
            return;
        }

        newProduct.id = id;
        this.products.push(newProduct);

    }

    getProductById(id) {
        if (this.products.find(product => product.id === id)) {
            return this.products.find(product => product.id === id);
        } else {
            console.log(`Error: No existe producto con el ID: ${id}`);
        }
        
    }
    
}

const Productos = new ProductManager();

console.log(Productos.getProducts());

Productos.addProduct({
    title: 'Producto de Prueba',
    description: 'Este es un producto de prueba',
    price: 200,
    thumbnail: 'Sin Imagen',
    code: 'abc123',
    stock: 25
});

console.log(Productos.getProducts());

Productos.addProduct({
    title: 'Producto de Prueba',
    description: 'Este es un producto de prueba',
    price: 200,
    thumbnail: 'Sin Imagen',
    code: 'abc123',
    stock: 25
});




console.log("Producto con ID 1:");
console.log(Productos.getProductById(1));

console.log("Producto con ID 5:");
console.log(Productos.getProductById(5));