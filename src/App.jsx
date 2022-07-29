
import React, { useState } from 'react';
import './App.css';
import productData from './products.json';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (id) => {
    const remaining = products.filter(elem => elem._id !== id);
    setProducts(remaining);
  }

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setProducts(productData);
    } else {
      const filtered = productData.filter(elem => elem.name.toLowerCase().includes((e.target.value).toLowerCase()));
      setProducts(filtered);
    }
  }

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <input type="text" placeholder="🔎" onChange={(e) => handleSearch(e)} />
      {products.map(elem => {
        return (
          <div key={elem._id}>
            <p>{elem.name}</p>
            <button onClick={() => handleDelete(elem._id)}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;

