import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layouts";
import ReactDOM from "react-dom/client";
import CartProvider from "./context/CartProvider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </BrowserRouter>
);
