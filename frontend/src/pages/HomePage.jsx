import Campaigns from "../components/Campaigns/Campaign";
import Categories from "../components/Categories/Categories";
import Products from "../components/Layout/Products/Products";
import Sliders from "../components/Slider/Sliders";
import Blogs from "../components/Blogs/Blog";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

const HomePage = () => {
  return (
    <>
      <Sliders />
      <Categories />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
    </>
  );
};

export default HomePage;
