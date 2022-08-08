import React from "react";
import AnimatedLogo from "../../static/assets/animated_logo/k.gif";

const App = () => {
  return (
    <div className="app">
      <div className="animated_container">
        <img src={AnimatedLogo} alt="k.gif" />
        <audio
          controls
          autoPlay={true}
          volume={40}
          src="anime.mp3"
          className="sound"
          type="audio/mp3"
        />
      </div>
    </div>
  );
};

export default App;
