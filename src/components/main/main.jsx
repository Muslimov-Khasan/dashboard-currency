import "./main.css";
import Check from "../../Assets/img/check.svg";
import Copy from "../../Assets/img/copy.png";

const Main = () => {
  return (
    <>
      <div className="contianer">
        <div className="rectangle-parent">
          
          <div className="group-child" />
          <div className="group-item" />
          <div className="status-parent">
            <p className="status">Status</p>
            <div className="success-parent">
              <p className="success">Success</p>
              <img className="check-icon" alt="" src={Check} />
            </div>
          </div>
          <div className="group-inner" />
          <p className="supporter">Supporter</p>
          <a className="charlotte-ann" href="#link">
            Charlotte Ann
          </a>
          <p className="campaign">Campaign</p>
          <a className="workout-for-water" href="#link">
            Workout for water
          </a>
          <div className="line-div" />
          <div className="eur-parent">
            <p className="eur">€20.60 EUR</p>
            <div className="donation">
              <strong className="donation1">Donation</strong>
              <span className="dollar-sign-icon">&#36;</span>
            </div>
          </div>
          <p className="usd">≈ $22.22 USD</p>
          <div className="dyhy694y-parent">
            <div className="dyhy694y">DYHY694Y</div>
            <div className="id">
              <span>ID</span>
              <span className="span">{` `}</span>
            </div>
            <img className="copy-icon" src={Copy} alt="Copy" />
          
          </div>

        </div>
      </div>
    </>
  );
};

export default Main;