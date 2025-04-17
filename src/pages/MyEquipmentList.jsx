import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyEquipmentList = () => {
  const [equipments, setEquipments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(
          (equipment) => equipment?.email === user?.email
        );
        setEquipments(filteredData);
      });
  }, [user]);

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
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Equipment List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {equipments.map((product) => (
          <div key={product._id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={product.photo}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <div className="flex items-center gap-2 mt-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    className={`text-lg ${
                      num <= product.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-500">
                  ({product.rating})
                </span>
                <span className="text-green-600 font-medium ml-4">
                  {product.stock} Available{" "}
                </span>
              </div>

              <p className="text-2xl font-semibold text-emerald-600 mt-2">
                ${product.price}
              </p>

              <div className="mt-3">
                <p className="font-medium">Customization</p>
                <p className="text-sm text-gray-600">{product.customization}</p>
              </div>

              <div className="mt-2">
                <p className="font-medium">Description</p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>

              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <span>📧</span> {product.email}
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Link
                  to={`/update-equipments/${product._id}`}
                  className="btn btn-sm bg-blue-400 text-white"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-sm btn-error text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipmentList;
