import React from "react";

const Experience = () => {
  return (
    <div id="experience">
      <div className="ex_left">
        <div className="education">
          <h1>Education</h1>
          <p>中正大學化學工程學系 學士</p>
        </div>
        <div className="work_ex">
          <h1>Work Experience</h1>
          <p>映象有限公司 陽極助理工程師</p>
        </div>
      </div>
      <div className="ex_right">
        <div className="skill">
          <h1>Skill</h1>
          <ul>
            <li>HTML/CSS/JavaScript</li>
            <li>SCSS</li>
            <li>RWD響應式網頁設計</li>
            <li>AJAX 天氣、圖片網站API串取經驗</li>
            <li>React</li>
            <li>接觸過Bootstrap</li>
            <li>Git/GitHub 基本的push&pull</li>
            <li>Figma 基礎操作</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
