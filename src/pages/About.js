import React from "react";
import github from "../images/icons/github.svg";
import facebook from "../images/icons/facebook.svg";
import instagram from "../images/icons/instagram.svg";
import email from "../images/icons/email.svg";
import mobile from "../images/icons/mobile.svg";
import avator2 from "../images/avatar2.jpeg";

const About = () => {
  return (
    <div id="about">
      <div className="information">
        <div className="avatar_container2">
          <img src={avator2} alt="avatar2" />
        </div>
        <h1>廖韋程</h1>
        <h2>Victor Liao</h2>
        <div className="social_media">
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/victor3750">
            <img src={github} alt="github" />
          </a>
          <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/victor.liao.14">
            <img src={facebook} alt="facebook" />
          </a>
          <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/victor3750">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="contact">
          <div className="email">
            <img src={email} alt="email" />
            <span>vic.vic86@hotmail.com</span>
          </div>
          <div className="mobile">
            <img src={mobile} alt="mobile" />
            <span>0937345746</span>
          </div>
        </div>
      </div>
      <div className="description">
        <h1>About me</h1>
        <p>
          曾於模型公司擔任陽極助理工程師，負責處理各種電子產品的表面質感與色彩，於今年初開始學習前端開發，使用框架為React，樂於學習任何新技術，目前正尋求相關職位或實習機會。
        </p>
      </div>
    </div>
  );
};

export default About;
