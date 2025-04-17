import { Helmet } from 'react-helmet-async';
import Slider from '../components/Slider';
import Products from '../components/Products';
const Home = () => {

      return (
        <div className="md:mx-auto md:container w-full px-1 md:px-0 md:max-w-screen-xl">
          <Helmet>Home || SportHive</Helmet>
          <Slider />
          <Products />
        </div>
      );
};

export default Home;
