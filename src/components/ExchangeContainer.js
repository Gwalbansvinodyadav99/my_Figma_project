import { useMemo } from "react";
import FrameComponent from "./FrameComponent";
import "./ExchangeContainer.css";

const ExchangeContainer = ({
  componentDimensions,
  imageDimensions,
  featureDescription,
  featureTitle,
  dexDescription,
  propTop,
  propLeft,
  propHeight,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const excitingNewsUltraproStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="vector-parent2" style={frameDiv2Style}>
      <img className="vector-icon7" alt="" src="/vector7.svg" />
      <FrameComponent dimensionCode="/group-282@2x.png" carImageCode="5" />
      <div className="exchange-parent">
        <div className="exchange">{featureDescription}</div>
        <div className="ultrapro-dex-launching-soon-parent">
          <div className="ultrapro-dex-launching">{featureTitle}</div>
          <div
            className="exciting-news-ultrapro"
            style={excitingNewsUltraproStyle}
          >
            {dexDescription}
          </div>
        </div>
        <div className="coming-soon-wrapper">
          <div className="coming-soon">COMING SOON</div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeContainer;
