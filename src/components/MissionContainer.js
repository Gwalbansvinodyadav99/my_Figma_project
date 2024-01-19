import { useMemo } from "react";
import "./MissionContainer.css";

const MissionContainer = ({
  imageDimensions,
  tagline,
  missionDescription,
  featureImageUrl,
  imageDimensionsAlt,
  propBottom,
  propRight,
  propRight1,
  propLeft,
}) => {
  const drivingGlobalUtilityContainerStyle = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  const missionStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const vectorIconStyle = useMemo(() => {
    return {
      right: propRight1,
      left: propLeft,
    };
  }, [propRight1, propLeft]);

  return (
    <div className="frame-div">
      <img className="vector-icon4" alt="" src={imageDimensions} />
      <div
        className="driving-global-utility-container"
        style={drivingGlobalUtilityContainerStyle}
      >
        <p className="driving-global-utility">{tagline}</p>
        <p className="driving-global-utility">{missionDescription}</p>
      </div>
      <b className="mission" style={missionStyle}>
        {featureImageUrl}
      </b>
      <img
        className="vector-icon5"
        alt=""
        src={imageDimensionsAlt}
        style={vectorIconStyle}
      />
    </div>
  );
};

export default MissionContainer;
