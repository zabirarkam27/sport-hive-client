import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    
  const {
      name,
      photo,
      category,
      price,
      rating,
      description,
    } = product;
    
    return (
      <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-sm px-4">
        <figure className="relative">
          <img src={photo} alt={name} />
          <div className="badge badge-neutral text-lg p-3 font-bold absolute top-4 right-4">
            {price + " $"}
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {description.length > 35 ? (
              <>
                {description.slice(0, 35)}
                <span className="text-blue-600 cursor-pointer">
                  ...Read More
                </span>
              </>
            ) : (
              description
            )}
          </p>
          <div className="card-actions flex items-center justify-between">
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  className={`text-yellow-400 text-2xl ${
                    num <= rating ? "opacity-100" : "opacity-30"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="badge badge-outline">{category}</div>
          </div>
          <Link
            // to={`/equipment-details/${product._id}`}
          >
            <button className="btn btn-sm rounded-full mt-2 bg-blue-500 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    );
};

export default ProductCard;