import toast from "react-hot-toast";

const AddMeals = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-4">Add Meal</h2>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Meal Title"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="">Select Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <input
            type="file"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Ingredients"
            rows="4"
            className="p-2 border border-gray-300 rounded-lg"
          ></textarea>
          <textarea
            placeholder="Description"
            rows="4"
            className="p-2 border border-gray-300 rounded-lg"
          ></textarea>
          <input
            type="number"
            placeholder="Price"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              toast.success("Meal added successfully!");
            }}
          >
            Add Meal
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMeals;
