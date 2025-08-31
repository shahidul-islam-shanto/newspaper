
import Header from "../Shared/Header/Header";
import NavBer from "../Shared/Navber/NavBer";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import DragonNewsHome from "../../Components/DragonNewsHome/DragonNewsHome";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  // const [newsPaper, setNewPaper] = useState([]);
  const newsPaper = useLoaderData();

 
  return (
    <>
      <div className="container-2">
        <Header />
        <BreakingNews />
        <NavBer />
        <div className="grid grid-cols-12 gap-4 justify-center py-16">
          <div className="col-span-3">
            <LeftSideNav />
          </div>
          <div className="col-span-6">
            <h4 className="mb-5">Dragon News Home: {newsPaper.length}</h4>
            <div className="">
              {newsPaper.map((news) => (
                <DragonNewsHome key={news.id} newsPaper={news} />
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <RightSideNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
