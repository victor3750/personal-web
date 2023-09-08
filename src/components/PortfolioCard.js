import React from "react";

const PortfolioCard = ({ portfolio }) => {
  return (
    <a href={portfolio.url} target="_blank" rel="noreferrer noopener" id="portfolio_card">
      <div
        className="web_img"
        style={{
          background: `center url(${portfolio.img})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="web_text">
        <h2 className="web_name">{portfolio.name}</h2>
        <p className="desc">{portfolio.description}</p>
      </div>
    </a>
  );
};

export default PortfolioCard;
