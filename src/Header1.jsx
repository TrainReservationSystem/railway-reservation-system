import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import trainLogo from "./assets/trainLogo.jpg";
import { Link, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import AboutUs from "./AboutUs";

const Header = () => {
  return (
    <>
      <div className="container">
        {/* <img src={trainLogo} alt="logo" className="img-fluid h-25 w-25"></img>u */}
        <Link to="/login"> Login</Link>
        {" | "}
        <Link to="/register"> register</Link>
        {" | "}
        {/* <Link to="/landing"> Landing</Link>
        {" | "} */}
        <Link to="/about"> About Us</Link>
        {" | "}
        <Link to="/contact"> Contact Us</Link>
        {" | "}
        <Link to="/login"> Dashboard</Link>

        {/* <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/" component={Landing} exact />
          <Route path="/about" component={AboutUs} exact />
        </Switch> */}
      </div>
    </>
  );
};

export default Header;
