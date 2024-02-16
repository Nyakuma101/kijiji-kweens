import { Link, NavLink, matchPath, useLocation } from "react-router-dom";
import "./Review.scss";

function Reviews() {
  return (
    <div className="review__button-wrapper">
      {/* <button
        className="review__button review__button--cancel"
        onClick={() => navigate(`/`)}
      >
        Cancel
      </button> */}
      <button className="review__button review__button--save" type="submit">
        Buyer
      </button>
      <button className="review__button review__button--save" type="submit">
        Seller
      </button>
    </div>
  );
}

export default Reviews;
