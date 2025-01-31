import React from "react";
import Instagram from "../assets/images/instagram.png";
import Facebook from "../assets/images/facebook.png";
import Youtube from "../assets/images/youtube.png";
import Notion from "../assets/images/Notion.png";
import Figma from "../assets/images/figma.png";

const Icons = () => {
  const iconUrls = [Instagram, Facebook, Youtube, Figma, Notion];

  const containerStyle = {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px 0",
    position: "relative",
  };

  const iconStyle = {
    width: "50px",
    height: "50px",
    margin: "0 20px",
    borderRadius: "10px",
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  const renderIcons = () => {
    // Ensure the total number of icons spans the container width
    const totalIcons = Math.ceil(window.innerWidth / (70 + 20)) * 2; // Adjust for icon width + margin
    const extendedIcons = Array(totalIcons)
      .fill(iconUrls)
      .flat();

    return extendedIcons.map((url, index) => (
      <img key={index} src={url} alt={`Icon ${index}`} style={iconStyle} />
    ));
  };

  return (
    <div style={containerStyle}>
      {/* Inject the keyframes into the style */}
      <style>{keyframes}</style>
      <div
        style={{
          display: "flex",
          animation: "scroll 10s linear infinite",
          width: `${iconUrls.length * 2 * (70 + 20)}px`, // Adjust for icon width + margin
        }}
      >
        {renderIcons()}
      </div>
    </div>
  );
};

export default Icons;
