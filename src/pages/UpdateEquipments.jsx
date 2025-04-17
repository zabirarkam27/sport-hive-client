import Lottie from "lottie-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import animationData from "../assets/animations/arrow.json";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const UpdateEquipments = () => {
  const product = useLoaderData();
  const {
    _id,
    name,
    photo,
    category,
    price,
    stock,
    customization,
    description,
    authorName,
    email,
    } = product;

  const navigate = useNavigate();
  const [processingTime, setProcessingTime] = useState(null);
  const [rating, setRating] = useState(parseInt(product.rating));

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const updateEquipment = {
      name: form.name.value,
      photo: form.photo.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      stock: parseInt(form.stock.value),
      rating: form.rating.value,
      description: form.description.value,
      customization: form.customization.value,
      authorName: form.authorName.value,
      email: form.email.value,
    };

    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Product updated successfully!", "success");
          navigate("/my-equipment-list");
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-4xl font-bold mb-8">Update Products</h2>
      <form onSubmit={handleUpdate}>
        <div className="flex flex-col md:flex-row gap-3">
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Image URL</legend>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input w-[280px]"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Item Name</legend>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-[280px]"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input w-[280px]"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Price</legend>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input w-[280px]"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Customization</legend>
              <input
                type="text"
                name="customization"
                defaultValue={customization}
                className="input w-[280px]"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Stock Status</legend>
              <input
                type="text"
                name="stock"
                defaultValue={stock}
                className="input w-[280px]"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Author Name</legend>
              <input
                type="text"
                name="authorName"
                defaultValue={authorName}
                className="input w-[280px]"
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Author Email</legend>
              <input
                type="text"
                name="email"
                defaultValue={email}
                className="input w-[280px]"
                readOnly
              />
            </fieldset>
            <div>
              <fieldset className="fieldset md:mt-2 w-[280px]">
                <legend className="fieldset-legend">
                  Processing Time (days)
                </legend>
                <div className="flex items-center ">
                  <div className="w-10 h-10 justify-start">
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      data-tooltip-id="submit-tooltip"
                      data-tooltip-content="Select processing date"
                    />
                  </div>
                  <DatePicker
                    selected={processingTime}
                    onChange={(e) => setProcessingTime(e)}
                    placeholderText="Select a date"
                    className="input w-[240px] justify-end"
                  />
                </div>
              </fieldset>
            </div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Rating</legend>
              <div className="rating rating-lg md:mt-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <input
                    key={num}
                    type="radio"
                    name="rating"
                    defaultValue={rating}
                    className="mask mask-star-2"
                    value={num}
                    checked={parseInt(rating) === num}
                    onChange={() => setRating(num)}
                  />
                ))}
              </div>
            </fieldset>
          </div>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Description</legend>
          <textarea
            name="description"
            defaultValue={description}
            className="textarea h-24 w-[280px] md:w-[572px]"
          ></textarea>
        </fieldset>
        <input
          type="submit"
          value="Update Product"
          className="btn my-6 w-[280px] md:w-[572px]"
          data-tooltip-id="submit-tooltip"
          data-tooltip-content="Click to add a new product"
        />
        <Tooltip id="submit-tooltip" />
      </form>
    </div>
  );
};

export default UpdateEquipments;
