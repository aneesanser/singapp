import Home from "../components/Home";
import Form1 from "../components/Form1";
import Section from "../components/Section";
import Footer from "./Footer";
import FeaturedListing from "./FeaturedListing";
import FeaturedNighbourhoods from "./FeaturedNighbourhoods";

function Dashbord() {
  return (
    <div>
      <Home />
      <FeaturedListing />
      <FeaturedNighbourhoods />\
      <Section />
      <Form1 />
      <Footer />
    </div>
  );
}

export default Dashbord;
