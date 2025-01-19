import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MealCard = ({ meal }) => {
  const { title, image, averageRating, price, _id } = meal || {};
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={image}
          className="w-full h-48 object-cover transform transition duration-500 ease-in-out hover:scale-110 "
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Price:</span> {price} $
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Rating:</span> {averageRating} ⭐
          </p>
          <Link to={`/meal/${_id}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
