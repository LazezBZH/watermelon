import Figure from "./Figure";
import "./Figures.css";
import figuresData from "./figuresData";

export default function Figures() {
  return (
    <div className="me">
      {figuresData.map((fig, index) => (
        <Figure key={index} img={fig.img} alt={fig.alt} txt={fig.text} />
      ))}
    </div>
  );
}
