import Style from "./index.module.less";
import Carousel from "@/components/carousel";
import Popular from './components/Popular'
import UserCard from "./components/UserCard";
const Home = () => {
  return (
    <div className={Style.home}>
      <Carousel />
      <div className={Style.container}>
        <Popular></Popular>
        <UserCard></UserCard>
      </div>
    </div>
  );
};

export default Home;