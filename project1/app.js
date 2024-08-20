import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching products from the test server API
    const fetchProducts = async () => {
      try {
        // API call to fetch products
        const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000');
        
        // Handle different status codes
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          setError(`Error: Received status code ${response.status}`);
        }
      } catch (err) {
        // Log the error details and set a user-friendly error message
        console.error("Error fetching data:", err);
        if (err.response) {
          setError(`Error: Received status code ${err.response.status}`);
        } else if (err.request) {
          setError("Error: No response received from server.");
        } else {
          setError(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Top 10 Laptops on AMZ</h1>
      </header>
      <main>
        <ul className="product-list">
          {products.map((product, index) => (
            <li key={index} className="product-item">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
