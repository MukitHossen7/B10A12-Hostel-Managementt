import Banner from "../../components/Banner/Banner";
// import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import MealNutritionInfo from "../../components/MealNutritionInfo/MealNutritionInfo";
import MealsCategory from "../../components/MealsCategory/MealsCategory";
import MembershipSection from "../../components/MembershipSection/MembershipSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MembershipSection></MembershipSection>
      <MealsCategory></MealsCategory>
      <MealNutritionInfo></MealNutritionInfo>
      {/* <FeedbackForm></FeedbackForm> */}
    </div>
  );
};

export default Home;
