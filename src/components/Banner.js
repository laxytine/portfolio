import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/banner.css';
import resume from '../assets/resume.pdf';
import me from '../assets/images/me.png';

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="text-section">
              <h4 id="hi">Hi!</h4>
              <div className="intro">
                <p className="text">I'm</p>
                <h1 id="name">Justine Joy Canta</h1>
              </div>
              <div className="role">
                <h3 className="role">FULL STACK WEB DEVELOPER</h3>
                <h3 className="role">ELECTRONICS TECHNICIAN</h3>
              </div>
              <div>
                <p className="caption1">BRIDGING THE GAP:</p>
                <p className="subcaption">From Electronics Engineer to Web Developer</p>
                <p className="caption2">MERGING PRECISION WITH CREATIVITY.</p>
                <p className="subcaption">Embarking on a new journey to craft remarkable digital experiences!</p>
              </div>
              <div className="button-container">
                <a href={resume} download className="button">DOWNLOAD MY RESUME</a>
                <Link to="/contact" className="button">GET IN TOUCH</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="images-section">
              <img src={me} alt="Profile2" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
