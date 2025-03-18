import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Lottie from "lottie-react";
import animationData from "../assets/animations/arrow.json";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Swal from "sweetalert2";

const AddEquipments = () => {
  const [rating, setRating] = useState(0);
  const [processingTime, setProcessingTime] = useState("");

  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const email = form.email.value;
    const authorName = form.authorName.value;
    const description = form.description.value;

    const newProduct = {
      name,
      photo,
      category,
      price,
      customization,
      stock,
      email,
      authorName,
      rating,
      processingTime,
      description,
    };

    console.log(newProduct);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedID) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-4xl font-bold mb-8">Add Products</h2>
      <form onSubmit={handleAddProduct}>
        <div className="flex flex-col md:flex-row gap-3">
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Image URL</legend>
              <input type="text" name="photo" className="input w-[280px]" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Item Name</legend>
              <input type="text" name="name" className="input w-[280px]" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <input type="text" name="category" className="input w-[280px]" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Price</legend>
              <input type="text" name="price" className="input w-[280px]" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Customization</legend>
              <input
                type="text"
                name="customization"
                className="input w-[280px]"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Stock Status</legend>
              <input type="text" name="stock" className="input w-[280px]" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Author Name</legend>
              <input
                type="text"
                name="authorName"
                className="input w-[280px]"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Author Email</legend>
              <input type="text" name="email" className="input w-[280px]" />
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
                    className="mask mask-star-2"
                    value={num}
                    checked={rating === num}
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
            className="textarea h-24 w-[280px] md:w-[572px]"
          ></textarea>
        </fieldset>
        <input
          type="submit"
          value="Add Product"
          className="btn my-6 w-[280px] md:w-[572px]"
          data-tooltip-id="submit-tooltip"
          data-tooltip-content="Click to add a new product"
        />
        <Tooltip id="submit-tooltip" />
      </form>
    </div>
  );
};

export default AddEquipments;
