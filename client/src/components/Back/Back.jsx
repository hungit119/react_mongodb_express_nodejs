import "./back.scss";
import BackIcon from "../../access/back.png";
const Back = () => {
  return (
    <div className="back">
      <img className="backIcon" src={BackIcon} alt="" />
      <p className="text-back">QUAY LẠI</p>
    </div>
  );
};

export default Back;
