import "./Card.css";
import CardCoupon from "./CardCoupon";
import CardProgress from "./CardProgress";
import CardTable from "./CardTable";
import CardTotals from "./CardTotals";

const Card = () => {
  return (
    <section className="card-page">
      <div className="container">
        <div className="card-page-wrapper">
          <form className="card-form">
            <CardProgress />
            <div className="shop-table-wrapper">
              <CardTable />
              <CardCoupon />
            </div>
          </form>
          <div className="card-collaterals">
            <CardTotals />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
