/* eslint-disable react/prop-types */

const AllMealCard = ({ meal }) => {
  return (
    <div>
      <div
        key={meal._id}
        className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-lg"
      >
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-2">{meal.title}</h3>
        <p className="text-gray-600">{meal.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 font-bold">${meal.price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllMealCard;
