import React from "react";

const ContactUs = () => {
  return (
    <div className="overlay">
      <header>
        <div className="header">
          <h2 className="header-text">You may Contact Us</h2>
        </div>
      </header>
      <main className="main">
        <div className="main-header">
          <p>
            <strong>Customer Care Numbers :</strong>
            <span>14646 (Language: Hindi and English)</span>
          </p>
        </div>

        <div className="main-booking-contact">
          <p>
            <strong>For Railway tickets booked through IRCTC</strong>
          </p>
          <ul className="lists">
            <li className="list">
              <strong>General Information</strong>
            </li>
            <li className="list">
              <strong>I-tickets/e-tickets :</strong>
              <a href="mailto:care@irctc.co.in">care@irctc.co.in</a>
            </li>
            <li className="list">
              <strong>For Cancellation E-tickets :</strong>
              <a href="mailto:etickets@irctc.co.in">etickets@irctc.co.in</a>
            </li>
            <li className="list">
              <strong>For IRCTC iMudra Prepaid Wallet & Card :</strong>
              <a href="mailto:imudracare@irctc.co.in">imudracare@irctc.co.in</a>
            </li>
          </ul>
        </div>

        <div className="body">
          <p>
            For IRCTC SBI Card users who do not receive the card within 01 month
            from the date of application kindly call on the Railway SBI Card
            Helpline nos. at 0124-39021212 or 18001801295 (if calling from
            BSNL/MTNL line) or send email to{" "}
            <a href="mailto:customercare@sbicard.com">
              customercare@sbicard.com
            </a>
            . For other queries on your IRCTC SBI card account, kindly email at{" "}
            <a href="mailto:loyaltyprogram@irctc.co.in">
              loyaltyprogram@irctc.co.in
            </a>
          </p>
        </div>
      </main>

      <footer className="footer">
        <ul>
          <li>
            <strong>Registered Office / Corporate Office</strong>
          </li>
          <li>
            <strong>
              Indian Railway Catering and Tourism Corporation Ltd.,
            </strong>
          </li>
          <li>
            <strong>B-148, 11th Floor, Statesman House,</strong>
          </li>
          <li>
            <strong>Barakhamba Road, New Delhi 110001</strong>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default ContactUs;
