import "./FrameComponent.css";

const FrameComponent = ({ dimensionCode, carImageCode }) => {
  return (
    <div className="frame-wrapper">
      <div className="frame-wrapper1">
        <div className="group-parent">
          <img className="group-icon" alt="" src={dimensionCode} />
          <div className="frame-child2" />
          <div className="div2">{carImageCode}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
