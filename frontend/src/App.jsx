import Campaigns from "./components/Campaigns/Campaign";
import Categories from "./components/Categories/Categories";
import Footer from './components/Layout/Footer/Footer'
import Header from './components/Layout/Header/Header'
import Policy from './components/Layout/Policy/Policy'
import Products from './components/Layout/Products/Products';
import Sliders from "./components/Slider/Sliders";
import Blogs from "./components/Blogs/Blog";
import Brands from "./components/Brands/Brands";
import CampaignSingle from "./components/CampaignSingle/CampaignSingle";
import './App.css'

function App() {
  return (
    <>
    <Header />
    <Sliders/>
    <Categories />
    <Campaigns />
    <Products />
    <Blogs />
    <Brands />
    <CampaignSingle />
    <Policy />
    <Footer />
    </>
  )
}

export default App
