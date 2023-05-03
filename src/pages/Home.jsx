import { HomeDescriptions, HomeDetails } from '../config';
import '../style/Home.css';

const Home = () => {
  return (
    <main className="home_container">
      <div className="home_details">
        <HomeDetails />
        <HomeDescriptions />
      </div>
    </main>
  );
};

export default Home;