import { useCallback } from "react";
import EllipseIcon from "../components/EllipseIcon";
import SectionCard1 from "../components/SectionCard1";
import FinancialFreedomSection from "../components/FinancialFreedomSection";
import SectionCard from "../components/SectionCard";
import FormContainer from "../components/FormContainer";
import "./Upro.css";

const Upro = () => {
  const onGroup1261152727Variant2ContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='uPROText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="upro">
      <div className="upro-child" />
      <img className="layer-1-icon" alt="" src="/layer-1.svg" />
      <div className="upro-item" />
      <div className="upro-inner" />
      <img className="layer-1-icon1" alt="" src="/layer-11@2x.png" />
      <div className="ellipse-div" />
      <div className="upro-child1" />
      <div className="upro-child2" />
      <EllipseIcon />
      <div className="upro-child3" />
      <div className="upro-child4" />
      <div className="upro-child5" />
      <div className="upro-child6" />
      <img className="layer-1-icon2" alt="" src="/layer-12@2x.png" />
      <img className="layer-1-icon3" alt="" src="/layer-13@2x.png" />
      <img className="layer-1-icon4" alt="" src="/layer-14@2x.png" />
      <img className="union-icon" alt="" />
      <div className="frame-parent">
        <div className="countries-parent">
          <div className="countries">Countries</div>
          <div className="div">36+</div>
        </div>
        <div className="frame-child" />
        <div className="transactions-sec-parent">
          <div className="countries">Transactions / Sec</div>
          <div className="div1">20000+</div>
        </div>
        <div className="frame-child" />
        <div className="trade-per-day-parent">
          <div className="countries">Trade per Day</div>
          <div className="m">1M+</div>
        </div>
      </div>
      <SectionCard1 />
      <FinancialFreedomSection />
      <div className="frame-group">
        <div className="probinar-parent">
          <div className="probinar">Probinar</div>
          <div className="proud-pioneers-in">
            Proud pioneers in blockchain education, Probinar delivers
            cutting-edge courses that transform individuals into experts in
            blockchain, cryptocurrencies, and decentralized applications.
          </div>
        </div>
        <div className="probinar-parent">
          <div className="probinar">Stake UPRO</div>
          <div className="proud-pioneers-in">
            Stake UPRO is your key to establishing a solid financial foundation.
            Whether you're a staking novice or a seasoned pro, we have custom
            plans just for you.
          </div>
        </div>
        <div className="probinar-parent">
          <div className="probinar">UPRO Bazaar</div>
          <div className="proud-pioneers-in">
            Your Key to a Shopping Wonderland: Uprobazzar.com is not just a
            platform; it's your passport to a world of shopping delights.
            Experience the ease of shopping with UPRO today!
          </div>
        </div>
      </div>
      <div className="ecosystem-wrapper">
        <div className="ecosystem">Ecosystem</div>
      </div>
      <SectionCard />
      <div className="frame-container">
        <img className="frame-inner" alt="" src="/frame-696.svg" />
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/vector12.svg" />
          <div className="payment-gateway-parent">
            <div className="payment-gateway">Payment Gateway</div>
            <div className="accept-upro-for">
              Accept UPRO for your products, redefining convenience. Merchant
              Payment API launching soon for secure and lightning-fast
              transactions!
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-div" />
      <div className="clip-path-group-parent">
        <img
          className="clip-path-group"
          alt=""
          src="/clip-path-group1@2x.png"
        />
        <div className="upro1">UPRO</div>
      </div>
      <div className="group-div" />
      <div
        className="group-1261152727variant2"
        onClick={onGroup1261152727Variant2ContainerClick}
      >
        <img
          className="clip-path-group1"
          alt=""
          src="/clip-path-group2@2x.png"
        />
        <div className="upro2" data-scroll-to="uPROText">
          UPRO
        </div>
      </div>
      <img className="vector-icon1" alt="" src="/vector13.svg" />
      <button className="frame-button" autoFocus={true} disabled={true}>
        <div className="vector-group">
          <img className="vector-icon2" alt="" src="/vector14.svg" />
          <div className="contact-us">Contact Us</div>
          <button className="frame-child1" />
        </div>
        <img className="frame-icon" alt="" src="/frame-677@2x.png" />
      </button>
      <div className="vector-container">
        <img className="vector-icon2" alt="" src="/vector15.svg" />
        <div className="build-on-upro">Build on UPRO</div>
      </div>
      <div className="pinnacle-of-crypto">Pinnacle of Crypto Communities</div>
      <div className="embark-on-a-container">
        <p className="embark-on-a">
          Embark on a Financial Revolution with Ultrapro Blockchain.
        </p>
        <p className="embark-on-a">
          Unleash the power of financial innovation and step into a
          decentralized realm of boundless possibilities. Join the ranks of
          millions worldwide who rely on Ultrapro Blockchain for its
          unparalleled technology, expansive global footprint, and unwavering
          commitment to pushing the boundaries of innovation.
        </p>
      </div>
      <img className="arwork-1-icon" alt="" src="/arwork-1@2x.png" />
      <div className="home-parent">
        <div className="home">Home</div>
        <div className="home">Product</div>
        <div className="home">Services</div>
        <div className="home">Why Us</div>
        <div className="home">Resources</div>
        <div className="home">About</div>
      </div>
      <FormContainer />
    </div>
  );
};

export default Upro;
