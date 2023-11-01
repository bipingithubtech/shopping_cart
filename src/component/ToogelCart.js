import { FaPlus, FaMinus } from "react-icons/fa";
const ToogelCart = ({ setDecrimennt, setIncriment, amount }) => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-around",

          color: "#ffffff",
        }}
      >
        <button onClick={() => setDecrimennt()}>
          <FaMinus />
        </button>
        <div style={{ backgroundColor: "#fc050d" }}>{amount}</div>
        <button onClick={() => setIncriment()}>{<FaPlus />}</button>
      </div>
    </div>
  );
};

export default ToogelCart;
