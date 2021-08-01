import "../styles.scss";

export default function Card({ type, summary, icon, color }) {
  const CardHeader = ({ type }) => {
    return (
      <>
        <div className="card--header">
          <img className="card--header_icon" src={icon} alt="" />
          <h1 className="card--header_type">{type}</h1>
        </div>
      </>
    );
  };

  const CardSummary = ({ summary }) => (
    <div className="card--summary">{summary}</div>
  );

  const CardButton = () => {
    var buttonColor = {
      color: color
    };

    return (
      <>
        <div className="card--button-section">
          <button className="card--button-section_button" style={buttonColor}>
            Learn More
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={`'card' ${type}`}>
        <CardHeader type={type} />
        <CardSummary summary={summary} />
        <CardButton />
      </div>
    </>
  );
}
