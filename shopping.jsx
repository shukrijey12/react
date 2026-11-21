import React, { useState } from 'react';

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    if (!productName.trim() || productPrice === '') return;

    const newProduct = {
      id: Date.now(),
      name: productName.trim(),
      price: parseFloat(productPrice),
      quantity: 1,
    };

    setProducts([...products, newProduct]);

    // clear inputs after adding
    setProductName('');
    setProductPrice('');
  };

  // quantity kordhi
  const increaseQuantity = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  // quantity dhimi (haddii uu noqdo 0, waa la tirayaa)
  const decreaseQuantity = (id) => {
    setProducts(
      products
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <>
      <h1>Simple Shopping Cart</h1>

      <div>
        <h3>Add Product</h3>
        <input
          type="text"
          placeholder="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {products.length > 0 ? (
        <div>
         <p>Products in Cart</p>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)} -
                Quantity: {product.quantity}{' '}
                <button onClick={() => decreaseQuantity(product.id)}>-</button>{' '}
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </li>
            ))}
          </ul>
          <p>
            <strong>Total: ${total.toFixed(2)}</strong>
          </p>
        </div>
      ) : (
        <p>the cart is empty.</p>
      )}
    </>
  );
};

export default ShoppingCart;