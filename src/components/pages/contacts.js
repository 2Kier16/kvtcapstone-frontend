import React, { Component } from "react";
// import ContactForm from "../../components/form/ContactForm";
import Pic from "../../../static/assets/images/egypt6.jpg";
import { SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";

export default class contacts extends Component {
  render() {
    return (
      <div
        className="contact-container"
        style={{
          width: "100%",
          background: `url(${Pic}) no-repeat`,
          backgroundBlend: "screen",
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      >
        <div className="pyramid">
          <div className="triangle">
            <div className="icons">
              <div className="react-icon">
                <p>
                  <a href="https://www.linkedin.com/in/kier-turpin-64502122b/">
                    <SiLinkedin size={70} />
                  </a>
                </p>
              </div>
              <div className="react-icon">
                <p>
                  <a href="https://www.facebook.com/KierV76/">
                    <SiFacebook size={70} />
                  </a>
                </p>
              </div>
              <div className="react-icon">
                <p>
                  <a href="https://www.instagram.com/kier_penny/">
                    <SiInstagram size={70} />
                  </a>
                </p>
              </div>
            </div>
            {/* <div className="contact-form-r">
            <ContactForm />
          </div> */}
          </div>
          <div className="label">
            <audio
              controls
              autoPlay={true}
              volume={40}
              src="nip.mp3"
              className="sound"
              type="audio/mp3"
            />
            <p>Social Media Center</p>
          </div>
        </div>
      </div>
    );
  }
}
