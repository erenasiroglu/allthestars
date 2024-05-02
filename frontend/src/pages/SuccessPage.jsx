import { Button, Result } from "antd";
import { useContext, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

export const SuccessPage = () => {
  const { setCartItems } = useContext(CartContext);

  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  const extraContent = useMemo(
    () => [
      <Link to={"/"} key="home">
        <Button type="primary">Go to Home Page</Button>
      </Link>,

      <Button key="buy">My Orders</Button>,
    ],
    []
  );

  return (
    <div className="success-page">
      <div className="container">
        <Result
          status="success"
          title="Payment is successful"
          subTitle="Thank you for your order. We will send you an email with the details of your order."
          extra={extraContent}
        />
      </div>
    </div>
  );
};

export default SuccessPage;
