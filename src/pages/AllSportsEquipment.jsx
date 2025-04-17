import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllSportsEquipment = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setEquipments(
                equipments.filter((equipment) => equipment._id !== id)
              );
              Swal.fire(
                "Deleted!",
                "Your equipment has been deleted successfully."
              );
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto mx-auto container w-full max-w-screen-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">My Equipment List</h2>
      <table className="table w-full">
        <thead>
          <tr className="bg-base-200 text-base font-semibold text-gray-700">
            <th>Number</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment, index) => (
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
                  to={`/update-equipments/${equipment._id}`}
                  className="btn btn-sm bg-[#87CEFA]"
                >
                  <img
                    className="w-5"
                    src="https://img.icons8.com/?size=100&id=N9EgMvh1MGMk&format=png&color=000000"
                    alt=""
                  />
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(equipment._id)}
                  className="btn btn-sm btn-error"
                >
                  <img
                    className="w-5"
                    src="https://img.icons8.com/?size=100&id=52620&format=png&color=000000"
                    alt=""
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSportsEquipment;
