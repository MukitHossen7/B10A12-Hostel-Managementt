import Banner from "../../components/Banner/Banner";
import MealsCategory from "../../components/MealsCategory/MealsCategory";
import MembershipSection from "../../components/MembershipSection/MembershipSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MembershipSection></MembershipSection>
      <MealsCategory></MealsCategory>
    </div>
  );
};

export default Home;
