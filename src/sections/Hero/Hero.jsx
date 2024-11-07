import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section id="profile">
        <div className="profile-pic-container">
          <img
            src="/assets/headshot.png"
            alt="Waltteri Heino profile picture"
          />
        </div>
        <div className="profile-text">
          <p className="profile-text-p1">Hello, I&rsquo;m</p>
          <h1 className="profile-name">Waltteri Heino</h1>
          <p className="profile-text-p2">
            <i>Aspiring</i> Full-Stack Web Developer
          </p>
          <div className="btn-container">
            <button
              onClick={() =>
                window.open("https://bc-portfolio.waltteriheino.com", "_blank")
              }
              className="btn btn-color-2"
            >
              Edu. portfolio
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-color-1"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="/assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/waltteri-h-1a28501a5/",
                  "_blank"
                )
              }
            />
            <img
              src="/assets/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() =>
                window.open("https://github.com/Waltsuuuu", "_blank")
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
