import { useEffect, useState } from "react";
import axios from "axios";
import CartButton from "../components/CartButton";
import { Link } from "react-router";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const[category,setCategory]=useState("all")
  const sortOptions = [
    { value: "all", label: "All" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "sort-old", label: "Sort Old" },
    { value: "sort-new", label: "Sort New" },
    { value: "price-high", label: "Price: High to Low" },
  ];
  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "fruits", label: "fruits" },
    { value: "food", label: "food" },
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
  ];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  });
  const filterProducts = (products,filter,category) => {
    let result = products;
    // category
    if(category!=="all"){
      result = products.filter((product) => product.category === category);
    }
    // sort price new old high
    if(filter==="price-low"){
      result = result.sort((a, b) => a.price - b.price);
    }else if(filter==="price-high"){
      result = result.sort((a, b) => b.price - a.price);
    }else if(filter==="sort-old"){
      result = result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }else if(filter==="sort-new"){
      result = result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
   return result
  };
  const displayProducts = filterProducts(products,filter,category);
  return (
    <div className="relative min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-2">
          <h1 className="font-bold text-3xl">Products</h1>
          <div className="flex gap-4">
            <select value={category} onChange={(e) => setCategory(e.target.value)} name="category" id="category">
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 rounded-lg border-1 border-green-500"
            name="filter"
            id="filter"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
          {displayProducts.map((product) => (
            <div
              key={product._id}
              className="relative flex flex-col bg-white p-4 rounded-lg space-y-3 group mb-4"
            >
              <Link to={`/product/${product._id}`}>
              <div className="flex justify-center items-center">
                <img
                  className="w-[80%] h-60 rounded-lg"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div>
                <h2 className="font-bold text-2xl hover:text-green-600">
                  {product.name}
                </h2>
                <h4 className="text-gray-600 text-xl">{product.category}</h4>
                <div className="flex justify-baseline items-center gap-4">
                  <div className="text-yellow-400 w-auto">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="font-bold text-2xl">${product.price}</p>
                </div>
              </div>
              </Link>
              <div className="absolute -bottom-5 right-[30%]  flex items-center">
                <CartButton product={product}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
