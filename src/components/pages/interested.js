import React, { Component } from "react";
import axios from "axios";
import IntForm from "../form/intForm";
import Interest from "../../components/interest";

import Guest from "../../../static/assets/images/guests.jpg";

export default class Interests extends Component {
  constructor() {
    super();
    this.state = {
      interests: [],
    };
    this.handleNewPost = this.handleNewPost.bind(this);
  }
  handleNewPost() {
    this.getInterests();
  }
  getInterests() {
    axios
      .get("https://kcapstone-backend.herokuapp.com/interests", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
        this.setState({ interests: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // getOther() {
  //   axios
  //     .get("https://kcapstone-backend.herokuapp.com/interests", {
  //       headers: { "Access-Control-Allow-Origin": "*" },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ interests: response.data });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  componentDidMount() {
    this.getInterests();
    // this.getOther();
  }

  renderInterests() {
    return this.state.interests.map((interest) => {
      return <Interest key={interest.id} interestData={interest} />;
    });
  }

  render() {
    return (
      <div
        className="interest-container"
        style={{
          background: "url(" + Guest + ") repeat",
          backgroundSize: "100%",
          // backgroundPosition: "center",
        }}
      >
        <div className="interest-form left-column">
          <IntForm handleUpdateInterests={this.handleNewPost} />
        </div>
        <div className="right-column">
          <div className="title">
            <a>Visitors</a>
          </div>
          <audio
            controls
            autoPlay={true}
            volume={40}
            src="bigband.mp3"
            className="sound"
            type="audio/mp3"
          />
          <div className="information">{this.renderInterests()} </div>
        </div>
      </div>
    );
  }
}
