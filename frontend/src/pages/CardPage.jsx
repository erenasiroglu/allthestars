import { Fragment } from "react"
import Card from "../components/Card/Card"
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"

const CardPage = () => {
  return (
    <Fragment>
        <Header />
        <Card />
        <Footer />
    </Fragment>
  )
}

export default CardPage