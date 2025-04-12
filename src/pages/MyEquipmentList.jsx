import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MyEquipmentList = () => {
    const [equipments, setEquipments] = useState([]);



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${id}`,{
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setEquipments(equipments.filter((equipment) => equipment._id !== id));
                            Swal.fire(
                              "Deleted!",
                              "Your equipment has been deleted successfully."
                            );
                    }
                })
            }
        })
    }
    return (
      <div>
        <h2 className="text-3xl font-bold mb-6">My Equipment List</h2>
        <ul className="space-y-4">
          {equipments.map((equipment) => (
            <li
              key={equipment._id}
              className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={equipment.photo}
                  alt={equipment.name}
                  className="h-20 w-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-xl font-semibold">{equipment.name}</h3>
                  <p className="text-gray-600">
                    Category: {equipment.category}
                  </p>
                  <p className="text-gray-600">Price: ${equipment.price}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Link
                  to={`/update-equipments/${equipment._id}`}
                  className="btn btn-primary"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(equipment._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default MyEquipmentList;