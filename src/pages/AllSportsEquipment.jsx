import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllSportsEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, []);

  const sortedEquipments = [...equipments].sort((a, b) => {
    return sortOrder === "asc"
      ? a.price - b.price
      : b.price - a.price;
  });

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  }

  return (
    <div className="overflow-x-auto mx-auto container w-full max-w-screen-xl">
      <h2 className="text-3xl mt-3 font-bold mb-6 text-center">
        All Sports Equipment
      </h2>
      <button
        onClick={toggleSortOrder}
        className="btn btn-sm bg-blue-400 mb-3 text-white "
      >
        Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
      </button>
      <table className="table w-full">
        <thead>
          <tr className="bg-base-200 text-base font-semibold text-gray-700">
            <th>Number</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {sortedEquipments.map((equipment, index) => (
            <tr key={equipment._id} className="hover">
              <td>{index + 1}</td>
              <td>
                <img
                  src={equipment.photo}
                  alt={equipment.name}
                  className="h-12 w-12 object-cover rounded"
                />
              </td>
              <td>{equipment.name}</td>
              <td>{equipment.category}</td>
              <td>{equipment.price}</td>
              <td>{equipment.stock}</td>
              <td>
                <Link
                  to={`/products/${equipment._id}`}
                  className="btn btn-sm bg-blue-400 text-white"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSportsEquipment;
