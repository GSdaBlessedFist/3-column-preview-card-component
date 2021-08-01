import "../styles.scss";
import Card from "./Card";
import sedanPic from "../images/icon-sedans.svg";
import suvPic from "../images/icon-suvs.svg";
import luxuryPic from "../images/icon-luxury.svg";

export default function Container() {
  const x = getComputedStyle(document.documentElement);
  const sedanColor = x.getPropertyValue("--brightOrange");
  const suvColor = x.getPropertyValue("--darkCyan");
  const luxuryColor = x.getPropertyValue("--DARKCyan");
  console.log(sedanColor);

  var cardInfo = [
    {
      type: "SEDANS",
      summary:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      icon: sedanPic,
      color: sedanColor
    },
    {
      type: "SUVs",
      summary:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-raod adventures.",
      icon: suvPic,
      color: suvColor
    },
    {
      type: "Luxury",
      summary:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      icon: luxuryPic,
      color: luxuryColor
    }
  ];

  return (
    <>
      <div className="container">
        <Card
          type={cardInfo[0].type}
          summary={cardInfo[0].summary}
          icon={cardInfo[0].icon}
          color={cardInfo[0].color}
        />
        <Card
          type={cardInfo[1].type}
          summary={cardInfo[1].summary}
          icon={cardInfo[1].icon}
          color={cardInfo[1].color}
        />
        <Card
          type={cardInfo[2].type}
          summary={cardInfo[2].summary}
          icon={cardInfo[2].icon}
          color={cardInfo[2].color}
        />
      </div>
    </>
  );
}
