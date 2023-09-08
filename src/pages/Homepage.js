import React from "react";
import avatar from "../images/avatar.jpg";

const Homepage = () => {
  return (
    <div id="home_page">
      <div className="avatar">
        <div className="avatar_container">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="opening">Hello! I'm Victor</div>
    </div>
  );
};

export default Homepage;
