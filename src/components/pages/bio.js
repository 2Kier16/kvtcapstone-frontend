import React from "react";
import profilePicture from "../../../static/assets/images/myself.jpg";

export default function () {
  return (
    <div className="bio-page-wrapper">
      <div
        className="leftSide-column"
        style={{
          background: `url(${profilePicture} ) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="rightSide-column">
        <p>Kier VaSean Turpin</p>

        <div>&nbsp;</div>

        <div className="mini-bio">
          Hi, <br />
          I'm Kier, Nice to meet your.
          <div>&nbsp;</div>I love music and hope to one day release an album. On
          each page you will here some of the samples that i have made. Have a
          bless Day!, & here is some Lorem ipsum for your viewing pleasure until
          i write a Full bio.
          <div>&nbsp;</div>Maecenas faucibus mollis interdum. Integer posuere
          erat a ante venenatis dapibus posuere velit aliquet. Sed posuere
          consectetur est at lobortis. Etiam porta sem malesuada magna mollis
          euismod. Donec sed odio dui. Aenean lacinia bibendum nulla sed
          consectetur. Maecenas sed diam eget risus varius blandit sit amet non
          magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.
          Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
          malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra
          augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Praesent commodo cursus magna,
          vel scelerisque nisl consectetur et. Nullam quis risus eget urna
          mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros. Vestibulum id ligula porta felis euismod semper.
        </div>
        <audio
          controls
          autoPlay={true}
          volume={40}
          src="slow.mp3"
          className="sound"
          type="audio/mp3"
        />
      </div>
    </div>
  );
}
