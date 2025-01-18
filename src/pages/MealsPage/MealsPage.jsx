// import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import AllMealCard from "../../components/AllMealCard/AllMealCard";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const axiosPublic = useAxiosPublic();
  // const [priceRange, setPriceRange] = useState([0, 100]);
  // const [hasMore, setHasMore] = useState(true);
  // const [page, setPage] = useState(1);

  const fetchMeals = async () => {
    const { data } = await axiosPublic.get(
      `/api/meals?search=${search}&category=${category}`
    );
    setMeals(data);
  };
  //   ...data?.meals
  useEffect(() => {
    // setMeals([]);
    // setPage(1);
    fetchMeals();
  }, [search, category]);
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Meals</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search meals..."
          className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/3"
          onChange={handleSearch}
        />
        <select
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <div className="flex items-center gap-2">
          <span>Price:</span>
          <input
            type="number"
            placeholder="Min"
            className="border border-gray-300 px-2 py-1 rounded-md w-16"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="border border-gray-300 px-2 py-1 rounded-md w-16"
          />
        </div>
      </div>
      {meals.length === 0 && (
        <div className="flex items-center justify-center py-10">
          <h2 className="text-3xl font-semibold italic">No meals found</h2>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals?.map((meal) => (
          <AllMealCard key={meal._id} meal={meal}></AllMealCard>
        ))}
      </div>
    </div>
  );
};

export default MealsPage;
