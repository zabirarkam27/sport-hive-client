import { Helmet } from 'react-helmet-async';
import Slider from '../components/Slider';
import Products from '../components/Products';
const Home = () => {

      return (
        <div className="mx-auto container w-full max-w-screen-xl">
          <Helmet>Home || SportHive</Helmet>
          <Slider />
          <Products />
        </div>
      );
};

export default Home;
