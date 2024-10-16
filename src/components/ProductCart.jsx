import { useEffect, useState } from "react";
import { ProductData } from "../api/ProductApi";

export const ProductCart = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");

  const productCom = async () => {
    try {
      const res = await ProductData();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching product data", error);
    }
  };

  useEffect(() => {
    productCom();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredProducts = data.filter((product) => {
    if (category === "all") return true;
    return product.category === category;
  });

  return (
    <div className="product-list">
      <h1>Product Catalog</h1>

      <label htmlFor="category-filter">Filter by Category: </label>
      <select id="category-filter" value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
