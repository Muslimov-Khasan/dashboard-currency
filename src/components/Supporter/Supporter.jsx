import "./Supporter.css";
import Check from "../../Assets/img/check.svg";
import Copy from "../../Assets/img/copy.png";
import Repeat from "../../Assets/img/repeat.svg";
import Circle from "../../Assets/img/circle.svg";
import Wallet from "../../Assets/img/wallet.svg";
import Calendar from "../../Assets/img/calendar.svg";

const Supporter = () => {
  return (
    <>
      <div className="contianer">
        <div className="inner-rectangle">

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

        <ul className="rectangle-container">
          <li className="group-child6" />
          <div className="group-div">
            <div className="change-amount-parent">
              <div className="change-amount">Change Amount</div>
              <img className="repeat-icon" alt="" src={Repeat} />
            </div>
          </div>
          <div className="rectangle-parent1">
            <li className="group-child8" />
            <div className="cancel-recurring-parent">
              <div className="change-amount">Cancel Recurring</div>
              <img className="repeat-icon" alt="" src={Circle} />
            </div>
          </div>
          <div className="rectangle-parent2">
            <li className="group-child9" />
            <div className="change-payment-method-parent">
              <div className="change-amount">Change Payment Method</div>
              <img className="repeat-icon" alt="" src={Wallet} />
            </div>
          </div>
          <div className="rectangle-parent3">
            <li className="group-child10" />
            <div className="change-date-parent">
              <div className="change-amount">Change Date</div>
              <img className="repeat-icon" alt="" src={Calendar} />
            </div>
          </div>
        </ul> 
        </div>
      </div>
    </>
  );
};

export default Supporter;