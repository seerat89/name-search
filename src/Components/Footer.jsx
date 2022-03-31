import React from 'react';
import gitHublogo from '../assets/GitHub.png';

function Footer() {
  return (
    <footer>
      <span>
        <a
          href="https://github.com/seerat89/name-search"
          rel="noreferrer"
          target="_blank"
        >
          <img src={gitHublogo} alt="GitHub Logo" />
        </a>
      </span>
    </footer>
  );
}

export default Footer;
