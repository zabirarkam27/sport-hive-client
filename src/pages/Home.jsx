import { Helmet } from 'react-helmet-async';
import Slider from '../components/Slider';
import Products from '../components/Products';
import FAQ from '../components/FAQ';
import SportsCategories from '../components/SportsCategories';
import Community from '../components/Community';
const Home = () => {

      return (
        <div className="md:mx-auto md:container w-full space-y-28 px-1 md:px-0 md:max-w-screen-xl">
          <Helmet>Home || SportHive</Helmet>
          <Slider />
          <Products />
          <FAQ />
          <SportsCategories />
          <Community/>
        </div>
      );
};

export default Home;
