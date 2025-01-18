// import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import AllMealCard from "../../components/AllMealCard/AllMealCard";
import InfiniteScroll from "react-infinite-scroll-component";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const axiosPublic = useAxiosPublic();
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);

  const fetchMeals = async () => {
    const { data } = await axiosPublic.get(
      `/api/meals?search=${search}&category=${category}`
    );
    setMeals(data);
  };

  // const fetchMeals = async (pageNum = 1, reset = false) => {
  //   try {
  //     const { data } = await axiosPublic.get(
  //       `/api/meals?search=${search}&category=${category}&page=${pageNum}`
  //     );
  //     if (reset) {
  //       setMeals(data);
  //     } else {
  //       setMeals((prevMeals) => [...prevMeals, ...data]);
  //     }
  //     if (data.length === 0) {
  //       setHasMore(false);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching meals:", error);
  //     setHasMore(false);
  //   }
  // };
  // const fetchMoreMeals = () => {
  //   const nextPage = page + 1;
  //   setPage(nextPage);
  //   fetchMeals(nextPage);
  // };
  useEffect(() => {
    fetchMeals();
  }, [search, category]);

  // useEffect(() => {
  //   setPage(1);
  //   setHasMore(true);
  //   fetchMeals(1, true);
  // }, [search, category]);
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <div className="w-11/12 md:11/12 lg:w-11/12 xl:container mx-auto px-4 py-6">
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
          <option value="">All Categories</option>
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
      <InfiniteScroll
        dataLength={meals.length}
        next={fetchMeals}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals?.map((meal) => (
            <AllMealCard key={meal._id} meal={meal}></AllMealCard>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MealsPage;
