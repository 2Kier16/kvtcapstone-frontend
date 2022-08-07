import React, { Component } from "react";
import { AiFillContacts } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { TiPointOfInterest } from "react-icons/ti";
import { MdAnimation } from "react-icons/md";

import One from "../../../static/assets/images/1.png";
import Hello from "../../../static/assets/images/hello.jpg";
import Text from "../../../static/assets/images/text.jpg";
import Me from "../../../static/assets/images/mme.jpg";
import Pharaoh from "../../../static/assets/images/pharaoh.jpg";

export default class home extends Component {
  render() {
    return (
      <div className="knavigation-hub">
        <div className="items-list">
          <div className="item col-l">
            <figure>
              <img src="../../../static/assets/images/text.jpg" />
            </figure>

            <a className="btn btn-sm" href="/contacts" title="Kontact">
              <AiFillContacts /> Kontact
            </a>
          </div>

          <div className="item col-r">
            <figure>
              <img src="../../../static/assets/images/mme.jpg" />
            </figure>

            <a className="btn btn-sm" href="/bio" title="Mini-Bio">
              <SiAboutdotme /> Mini-Bio
            </a>
          </div>

          <div className="item col-l">
            <figure>
              <img src="../../../static/assets/images/hello.jpg" />
            </figure>

            <a className="btn btn-sm" href="/interests" title="Interest">
              <TiPointOfInterest /> Visiter Info
            </a>
          </div>
          <div className="item col-r">
            <figure>
              <img src="../../../static/assets/images/1.png" />
            </figure>

            <a className="btn btn-sm" href="/" title="Animated Logo">
              <MdAnimation />
              K'Innovation
            </a>
          </div>
        </div>
      </div>
    );
  }
}
