import "./About.css";
import Team from "/images/team.png";
import Contact from "/images/contact.png";
import Donate from "/images/donate.png";
import Catering from "/images/catering.png";
function About() {
  return (
    <div className="about-container">
      <div className="flex-column">
        <h2 className="section-title">All About Us!</h2>
        <div className="about">
          {/* about cards begin */}
          {/* careers card */}
          <div className="about-card">
            <h4 className="about-card-title">Careers</h4>
            <div className="about-card-img-container">
              <img src={Team} />
            </div>
            <div className="about-card-content">
              <p>Join our team!</p>
            </div>
          </div>
          {/* catering card */}
          <div className="about-card">
            <h4 className="about-card-title">Contact Us</h4>
            <div className="about-card-img-container">
              <img src={Contact} />
            </div>
            <div className="about-card-content">
              <p>
                Have a suggestion? Or do you just want to tell us how great
                we're doing!
              </p>
            </div>
          </div>
          {/* contact card */}
          <div className="about-card">
            <h4 className="about-card-title">Catering</h4>
            <div className="about-card-img-container">
              <img src={Catering} />
            </div>
            <div className="about-card-content">
              <p>Let the savory scenes come to you!</p>
            </div>
          </div>
          {/* donations card */}
          <div className="about-card">
            <h4 className="about-card-title">Donate</h4>
            <div className="about-card-img-container">
              <img src={Donate} />
            </div>
            <div className="about-card-content">
              <p>Sharing is caring! Learn more about our partner charities</p>
            </div>
          </div>
          {/* about cards end */}
        </div>
      </div>
    </div>
  );
}

export default About;
