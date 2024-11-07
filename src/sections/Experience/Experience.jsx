import "./Experience.css";

const Experience = () => {
  const technologies = [
    {
      title: "HTML",
      level: "Proficient",
      imgSrc: "/assets/html_logo.svg.png",
      altText: "HTML icon",
    },
    {
      title: "CSS",
      level: "Competent",
      imgSrc: "/assets/css_logo.webp",
      altText: "CSS icon",
    },
    {
      title: "Wordpress",
      level: "Competent",
      imgSrc: "/assets/wp_logo.webp",
      altText: "Wordpress icon",
    },
    {
      title: "React",
      level: "Foundational",
      imgSrc: "/assets/react_logo.png",
      altText: "React icon",
    },
    {
      title: "JavaScript",
      level: "Foundational",
      imgSrc: "/assets/js_logo.webp",
      altText: "JavaScript icon",
    },
    {
      title: "PostgreSQL",
      level: "Basic",
      imgSrc: "/assets/postgresql_plain_wordmark_logo_icon_146390.webp",
      altText: "PostgreSQL icon",
    },
    {
      title: "Node JS",
      level: "Basic",
      imgSrc: "/assets/node_logo.png",
      altText: "Node JS icon",
    },
    {
      title: "PHP",
      level: "Basic",
      imgSrc: "/assets/php_logo.png",
      altText: "Php icon",
    },
  ];

  return (
    <>
      <section id="experience">
        <p className="experience-text-p1">Explore My</p>
        <h1 className="experience-title">Tech & Experience</h1>
        <div className="experience-details-container">
          <div className="details-container">
            <h2 className="experience-sub-title">Web-Development</h2>
            <div className="experience-container">
              {/* Map over the experience array to generate articles */}
              {technologies.map((technology, index) => (
                <article key={index}>
                  <img
                    src={technology.imgSrc}
                    alt={technology.altText}
                    className="icon"
                  />
                  <div>
                    <h3>{technology.title}</h3>
                    <p>{technology.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
