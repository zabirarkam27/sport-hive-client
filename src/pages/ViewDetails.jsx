import { useLoaderData, useNavigate } from "react-router-dom";

const ViewDetails = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const {
    name,
    photo,
    rating,
    stock,
    price,
    customization,
    description,
    email,
  } = product;

  return (
    <div className="bg-base-200 min-h-screen flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-xl p-6 md:p-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src={photo}
            alt={name}
            className="w-full max-w-sm rounded-lg shadow-xl"
          />

          <div className="flex-1 w-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">
              {name}
            </h1>

            <div className="flex items-center gap-1 mt-1 text-yellow-500 justify-center lg:justify-start">
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  className={`text-lg ${
                    num <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-sm text-gray-500 ml-1">({rating})</span>
            </div>

            <p className="text-xl md:text-2xl font-semibold text-emerald-600 mt-3 text-center lg:text-left">
              ${price}
            </p>
            <p className="text-green-600 font-medium mt-1 text-center lg:text-left">
              {stock} Available
            </p>

            <div className="mt-4">
              <p className="font-medium">Customization:</p>
              <p className="text-sm text-gray-600">{customization}</p>
            </div>

            <div className="mt-2">
              <p className="font-medium">Description:</p>
              <p className="text-sm text-gray-600">{description}</p>
            </div>

            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <span>📧</span> {email}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="btn bg-blue-500 text-white rounded-full">
                Buy Now
              </button>
              <button
                className="btn bg-gray-300 text-black rounded-full"
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
