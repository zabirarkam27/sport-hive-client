import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const SportsCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const productCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(productCategories);
      });
  }, []);

    return (
      <div className="mt-32">
        <h2 className="my-8 text-4xl font-bold text-center">Sports Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, id) => (
            <CategoryCard key={id} name={category} />
          ))}
        </div>
      </div>
    );
};

export default SportsCategories;
