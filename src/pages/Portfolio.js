import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import weatherApp from "../images/weather_app.jpg";
import imageSearch from "../images/img_search.jpg";
import snake from "../images/snake.jpg";
import bouncingBall from "../images/bouncing_ball.jpg";
import chocollage from "../images/chocollage.jpg";
import mario from "../images/mario.jpg";
import ikea from "../images/ikea.jpg";

const portfolios = [
  {
    name: "台灣好天氣",
    img: weatherApp,
    description: "#React #Api串接 #PWA",
    url: "https://victor3750.github.io/realtime-weather-app/",
  },
  {
    name: "圖片搜尋網站",
    img: imageSearch,
    description: "#React #Api串接 #SCSS",
    url: "https://victor3750.github.io/image-search/",
  },
  {
    name: "小遊戲：貪吃蛇",
    img: snake,
    description: "#JavaScript #Canvas",
    url: "https://victor3750.github.io/Snake/",
  },
  {
    name: "小遊戲：彈跳球",
    img: bouncingBall,
    description: "#JavaScript #Canvas",
    url: "https://victor3750.github.io/Bouncing_Ball/",
  },
  {
    name: "虛擬巧克力品牌網站",
    img: chocollage,
    description: "#切版 #RWD",
    url: "https://victor3750.github.io/chocollage_project/",
  },
  {
    name: "瑪利歐首頁切版",
    img: mario,
    description: "#切版 #3D效果",
    url: "https://victor3750.github.io/mario-web/",
  },
  {
    name: "IKEA首頁切版",
    img: ikea,
    description: "#切版 #Bootstrap",
    url: "https://victor3750.github.io/ikea-web/",
  },
];
const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio_container">
        {portfolios.map((portfolio, index) => {
          return <PortfolioCard portfolio={portfolio} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
