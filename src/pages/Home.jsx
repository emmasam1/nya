import Banner from "../components/banner/Banner";
import UpcomingEvent from "../components/event/UpcomingEvent";
import MissionQoute from "../components/missionQoute/MissionQoute";
import Press_release from "../components/press/Press_release";

const Home = () => {

  return (
    <div>
      <Banner />
      <Press_release />
      <MissionQoute />
      <UpcomingEvent />
    </div>
  );
};

export default Home;
