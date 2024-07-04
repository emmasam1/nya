import Banner from "../components/banner/Banner";
import UpcomingEvent from "../components/event/UpcomingEvent";
import Face from "../components/face/Face";
import MissionQuote from "../components/missionQuote/MissionQuote";
import Press_release from "../components/press/Press_release";

const Home = () => {

  return (
    <div>
      <Banner />
      <Press_release />
      <MissionQuote />
      <Face />
      <UpcomingEvent />
    </div>
  );
};

export default Home;
