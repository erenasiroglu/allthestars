import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Layout } from "./layouts/Layouts";
import CartProvider from "./context/CartProvider";
import ScrollToTop from "./components/ScrollToTop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </BrowserRouter>
);
