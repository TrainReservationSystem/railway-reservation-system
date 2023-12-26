import React from "react";
import Header from "../common/Header2";
import Footer from "../common/Footer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import React from "react";

const AboutUs = () => {
  return (
    <>
      <header>
        <div className="head">
          <img src="irctc-new-logo.png" alt="irctc logo" />
          <div className="links">
            <a href="#">Stock Market</a>
            <a href="aboutus.html">About Us</a>
            <a href="#">Our Business</a>
            <a href="#">Investor Corner</a>
            <a href="#">Schedule of Investors Meet</a>
            <a href="#">HR & Career</a>
            <a href="#">CSR & Sustainability</a>
            <a href="#">Tenders</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </header>

      <div className="main-head">
        <h1>About Us</h1>
        <div className="main-head--1">
          <a className="head-link" href="#">
            Home
          </a>
          |<p>About US</p>
        </div>
      </div>

      <section className="body">
        <div className="body-head">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon"
          >
            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
          </svg>

          <h3>About Us</h3>
        </div>
        <hr />

        <p>
          Indian Railway Catering and Tourism Corporation Ltd. (IRCTC) is a
          “Mini Ratna (Category-I)” Central Public Sector Enterprise under
          Ministry of Railways, Government of India. IRCTC was incorporated on
          27th September, 1999 as an extended arm of the Indian Railways to
          upgrade, professionalize and manage the catering and hospitality
          services at stations, on trains and other locations and to promote
          domestic and international tourism through the development of budget
          hotels, special tour packages, information & commercial publicity and
          global reservation systems. The authorized capital of the company is
          ₹250 crores and paid up capital is ₹160 crores. It's registered and
          Corporate Office is situated at New Delhi.
        </p>
        <hr />

        <h3>The core activities of the Company are detailed below:</h3>
        <hr />
        <ul className="list">
          <li>Catering & Hospitality</li>
          <li>Internet Ticketing</li>
          <li>Travel & Tourism</li>
          <li>Packaged Drinking Water (Rail Neer)</li>
        </ul>
        <hr />

        <h3>At present, the Company operates through:</h3>
        <hr />
        <ul className="list">
          <li>
            Fourteen Rail Neer Plants at Nangloi-Delhi, Danapur-Bihar,
            Palur-Tamil Nadu, Ambernath-Maharashtra, Amethi (Uttar Pradesh),
            Parassala-, Tamil Nadu, Bilaspur (Chhatisgarh) Hapur (Uttar
            Pradedh), Sanand- Gujaratd, Mandideep-Madhya Pradesh,
            Jagiroad-Assam, Maneri-(Madhya Pradesh), Nagpur, (Maharashtra) and
            Sankrail-Kolkatta
          </li>
          <li>
            Eleven Base Kitchens at located at New Delhi, Howrah, Ahmedabad,
            Patna, Mumbai Central, Mumbai CST, Ballarshah, Nagpur, Balasore,
            Sealdah and Kharagpur Jn 5 Zonal Offices, namely, New Delhi, Mumbai,
            Kolkata, Chennai, Secundrabad
          </li>
          <li>
            Five Zonal Offices at New Delhi, Mumbai, Kolkata, Chennai &
            Secundrabad
          </li>
          <li>
            Ten Regional Offices at Lucknow, Chandigarh, Jaipur, Bhopal,
            Ahmadabad, Guwahati, Bhubaneswar, Patna, Ernakulam and Bangalore
          </li>
          <li>One Internet Ticketing Office at New Delhi</li>
          <li>One Tourism office at New Delhi.</li>
        </ul>
      </section>
    </>
  );
};

export default AboutUs;
