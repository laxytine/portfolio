import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/banner.css';
import resume from '../assets/resume.pdf';

export default function Banner() {
  return (
    <div className="banner">
      <div>
        <h1 className="title1">BRIDGING THE GAP:</h1>
        <h1 className="title2">Electronics Engineer to Web Developer</h1>
        <h3 className="subtitle">MERGING PRECISION WITH CREATIVITY</h3>
      </div>
      <div className="button-container">
          <a href={resume} download className="button">DOWNLOAD MY RESUME</a>
          <Link to="/contact" className="button">GET IN TOUCH</Link>
        </div>
    </div>
  );
};

