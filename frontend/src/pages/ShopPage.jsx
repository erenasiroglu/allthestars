import Categories from "../components/Categories/Categories"
import Header from "../components/Layout/Header/Header"
import Products from "../components/Layout/Products/Products"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import Policy from "../components/Layout/Policy/Policy"
import Footer from "../components/Layout/Footer/Footer"

const ShopPage = () => {
  return (
    <>
    <Header />
        <Categories />
        <Products />
        <CampaignSingle />
        <Products />
        <Policy />
        <Footer />
    </>
  )
}

export default ShopPage
