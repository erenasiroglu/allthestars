import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Spin, message } from "antd";
import { useState } from "react";
import "./Search.css";

const Search = ({ isSearchShow, setIsSearchShow }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleCloseModal = () => {
    setIsSearchShow(false);
    setSearchResults(null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const productName = e.target[0].value.trim();

    if (productName.length === 0) {
      message.warning("Please enter a product name.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/api/products/search/${productName}`);

      if (!res.ok) {
        message.error("Something went wrong.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""}`}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Search for products</h3>
        <p className="modal-text">
          Start typing to see products you are looking for.
        </p>
        <form className="search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Search a product" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>RESULTS FROM PRODUCT</h3>
          </div>
          <Spin spinning={loading} />
          <div
            className="results"
            style={{
              display: `${
                !searchResults || searchResults.length === 0 ? "flex" : "grid"
              }`,
            }}
          >
            {!searchResults && (
              <b
                className="result-item"
                style={{ justifyContent: "center", width: "100%" }}
              >
                {loading
                  ? "Searching..."
                  : "Start typing to see products you are looking for."}
              </b>
            )}
            {searchResults?.length === 0 && (
              <p
                className="result-item"
                style={{ justifyContent: "center", width: "100%" }}
              >
                😔The product you were looking for was not found😔
              </p>
            )}
            {searchResults?.length > 0 &&
              searchResults.map((resultItem) => (
                <Link
                  to={`product/${resultItem._id}`}
                  className="result-item"
                  key={resultItem._id}
                >
                  <img
                    src={resultItem.img[0]}
                    className="search-thumb"
                    alt=""
                  />
                  <div className="search-info">
                    <h4>{resultItem.name}</h4>
                    <span className="search-sku">SKU: PD0016</span>
                    <span className="search-price">
                      ${resultItem.price.current.toFixed(2)}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={handleCloseModal}
        ></i>
      </div>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
    </div>
  );
};

Search.propTypes = {
  isSearchShow: PropTypes.bool,
  setIsSearchShow: PropTypes.func,
};

export default Search;
