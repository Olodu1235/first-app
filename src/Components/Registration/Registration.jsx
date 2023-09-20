import React from "react";
import "./Registration.css";

import email_icon from "../../asset/email.png";
import phone_icon from "../../asset/phone.png";
const Registration = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">
          <h2>Instant Registration</h2>
          <h3>Deposit and start playing</h3>
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={phone_icon} alt="" />
          <input type="text" placeholder="Tel" />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="text" placeholder="Amount" className="amount" />
        </div>
      </div>
      <div className="submit_container">
        <button>Make a Deposit</button>
      </div>
    </div>
  );
};

export default Registration;
