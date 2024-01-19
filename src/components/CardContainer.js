import { useMemo } from "react";
import FrameComponent from "./FrameComponent";
import "./CardContainer.css";

const CardContainer = ({
  featureTitle,
  pageSubtitle,
  walletDescription,
  productImageDimensions,
  itemNumber,
  propTop,
  propLeft,
  propHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="vector-parent1" style={frameDivStyle}>
      <img className="vector-icon6" alt="" src="/vector7.svg" />
      <div className="canopus-gtx-wallet-parent" style={frameDiv1Style}>
        <div className="canopus-gtx-wallet">{featureTitle}</div>
        <div className="securely-store-your-digital-as-parent">
          <div className="securely-store-your">{pageSubtitle}</div>
          <div className="canopus-gtx-wallet1">{walletDescription}</div>
        </div>
        <div className="explore-more-parent">
          <div className="explore-more">EXPLORE MORE</div>
          <img className="frame-icon1" alt="" src="/frame.svg" />
        </div>
      </div>
      <FrameComponent dimensionCode="/group-281@2x.png" carImageCode="3" />
    </div>
  );
};

export default CardContainer;
