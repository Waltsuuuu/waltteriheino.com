import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="desktop-nav">
      <div className="logo">
        <svg
          width="200"
          height="200"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="400" rx="100" fill="white" />
          <path
            d="M112.949 167.687V158.059L55.5 158.059L17 138L55.5 138L214.628 138V158.059H179.379V167.687H193.69L177.572 238.395H176.969L154.223 167.687H164.015V158.059H130.122V167.687H140.064L117.468 237.944H116.715L99.2417 167.687H112.949ZM214.628 273.891H160.564H87.4922L79.9922 249L73 226L64.5 197L55.5 167.687H87.4922L112.347 255.847H121.385L146.24 177.616H146.993L172.601 255.847H181.488L204.686 167.687H214.628V273.891Z"
            fill="black"
          />
          <path
            d="M210.97 273.891V138L327.138 138L384 205.891L327.138 273.891H292.652H265.425H238.198H210.97ZM284.179 255.847H342.226L350.278 246.218H307.527V167.687H319.879V158.059H284.179V167.687H296.531V201.386H242.152V167.687H254.504V158.059H218.803V167.687H231.155V246.218H218.803V255.847H254.504V246.218H242.152V210.714H296.531V246.218H284.179V255.847Z"
            fill="black"
          />
          <path
            d="M318.5 211.125V211.625H319H322.75H323.25V211.125V207.375V206.875H322.75H319H318.5V207.375V211.125ZM331.625 211.125V211.625H332.125H343.375H343.875V211.125V198V197.5H343.375H339.625H339.125V198V201.25H332.125H331.625V201.75V203.125H330.25H329.75V203.625V209.25V209.75H330.25H331.625V211.125ZM346.625 211.125V211.625H347.125H356.5H357V211.125V209.25V208.75H356.5H349.5V207.875H358.375H358.875V207.375V203.625V203.125H358.375H357V201.75V201.25H356.5H347.125H346.625V201.75V203.125H345.25H344.75V203.625V209.25V209.75H345.25H346.625V211.125ZM365.375 211.125V211.625H365.875H369.625H370.125V211.125V209.75H371.5H372V209.25V207.875H373.375H373.875V207.375V201.75V201.25H373.375H369.625H369.125V201.75V206.875H366.375V201.75V201.25H365.875H362.125H361.625V201.75V207.375V207.875H362.125H363.5V209.25V209.75H364H365.375V211.125ZM339.125 204.125V208.75H334.5V204.125H339.125ZM354.125 204.125V205H349.5V204.125H354.125Z"
            fill="white"
            stroke="black"
          />
        </svg>{" "}
      </div>

      {/* Hamburger Icon for Mobile */}
      {!isMenuOpen && (
        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      )}
      {/* Navigation Links */}
      <div className={`nav-links-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {isMenuOpen && (
            <div onClick={toggleMenu}>
              <svg
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#0F1729"
                />
              </svg>
            </div>
          )}
          <li
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
          >
            <a>Projects</a>
          </li>
          <li
            onClick={() => {
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
          >
            <a>Tech & Experience</a>
          </li>
          <li
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
              toggleMenu();
            }}
          >
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
