import Categories from "../components/Categories/Categories"
import Header from "../components/Layout/Header/Header"
import Products from "../components/Layout/Products/Products"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import Footer from "../components/Layout/Footer/Footer"

const ShopPage = () => {
  return (
    <>
    <Header />
        <Categories />
        <Products />
        <CampaignSingle />
        <Products />
        <Footer />
    </>
  )
}

export default ShopPage
