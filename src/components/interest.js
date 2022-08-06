import React from "react";

export default function interest(props) {
  return (
    <div className="infoListContainer">
      <h5>
        <a>Visitors Name:</a> {props.interestData.author}
      </h5>
      <h1>
        <a>Interest:</a> {props.interestData.interest}
      </h1>
      <h3>
        <a>Zodiac Sign:</a> {props.interestData.zodiac}
      </h3>
      <p>
        <a>Book:</a> {props.interestData.book}
      </p>
      <h6>
        <a>Describe Yourself:</a> {props.interestData.description}
      </h6>
    </div>
  );
}
