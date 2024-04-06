import PropTypes from "prop-types";

const SliderItem = ({imgSrc}) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imgSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">SUMMER 2024</p>
        <h2 className="slider-heading">Save up to 70%</h2>
        <a href="#" className="btn btn-lg btn-primary">
          Explore Now
        </a>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default SliderItem;