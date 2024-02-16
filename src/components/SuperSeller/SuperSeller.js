import { useState } from "react";
import "./SuperSeller.scss";
import { useParams, useNavigate } from "react-router-dom";

export default function SuperSeller({ user }) {
  const navigate = useNavigate();
  const becomeSuperSeller = () => {
    if (
      isMemberForOneYear(user.memberSince) &&
      hasMinimumReviews(user.totalReviews) &&
      hasMinimumRating(user.averageRating)
    ) {
      // Perform action to make the user a superseller
      alert("Congratulations! You are now a superseller!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      alert("You do not meet the criteria to become a superseller.");
    }
  };

  const isMemberForOneYear = (memberSince) => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

    return new Date(memberSince) <= oneYearAgo;
  };

  const hasMinimumReviews = (totalReviews) => {
    return totalReviews >= 10;
  };

  const hasMinimumRating = (averageRating) => {
    return averageRating >= 4;
  };

  return (
    <div className="profile__container">
      <h1>User Profile Summary</h1>
      <p>Username: {user.username}</p>
      <p>Member Since: {user.memberSince}</p>
      <p>Total Reviews: {user.totalReviews}</p>
      <p>Average Rating: {user.averageRating}</p>
      <button onClick={becomeSuperSeller}>Become Super Seller</button>
    </div>
  );
}
