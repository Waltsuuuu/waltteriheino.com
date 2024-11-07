import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable"; // Import the swipeable hook
import "./Projects.css";
import Popup from "./components/Popup.jsx";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);

  const projects = [
    {
      name: "EFHK-Flights",
      img: "/assets/project-1.png",
      description:
        "This web-app provides real-time arrival information for Helsinki Airport (HEL) using the Finavia Public Flights API.\n\n" +
        "Built using React for the frontend, Axios for making HTTP requests, and vanilla CSS for styling.\n\n" +
        "The backend, running on Render.com, is powered by Node.js and Express, with xml2js used to parse the XML data returned by the Finavia API into JSON, making it easier to manipulate and send to the frontend in a readable format.\n\n" +
        "Using a backend allows the app to bypass CORS issues, securely manage API keys, and process data before sending it to the frontend.\n\n" +
        "Updated flight data is fetched every two minutes.",
      liveDemoLink: "https://efhk-flights.waltteriheino.com/",
      githubLink: "https://github.com/Waltsuuuu/efhk-flights-backend",
    },
    {
      name: "BC-Portfolio",
      img: "/assets/bc-portfolio-project.png",
      description:
        "A portfolio website built using React to showcase completed assignments for each course. It highlights my progress and skills in web development technologies like HTML, CSS, JavaScript, and React, along with other areas such as UI/UX design, PHP, SQL, Git, and unit testing with CI/CD.\n\n" +
        "The site’s layout is powered by React’s useState to control collapsible course sections, making navigation clean and interactive. Key components like Header, Kurssi, and TutkinnonOsa modularize the structure.",
      liveDemoLink: "https://bc-portfolio.waltteriheino.com",
      githubLink: "https://github.com/Waltsuuuu/bc-portfolio-react",
    },
    {
      name: "Project Three",
      img: "/assets/proj-sample-3.png",
      description: "Description for Project Three...",
      liveDemoLink: "#",
    },
    {
      name: "Project Four",
      img: "/assets/proj-sample-4.png",
      description: "Description for Project Four...",
      liveDemoLink: "#",
    },
    {
      name: "Project Five",
      img: "/assets/proj-sample5.png",
      description: "Description for Project Five...",
      liveDemoLink: "#",
    },
  ];

  // Popup Functions
  const openModal = (project) => {
    setModalProject(project);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  // Calculate visible projects with wrap-around effect
  const visibleProjects = Array.from({ length: visibleProjectsCount }).map(
    (_, i) => projects[(startIndex + i) % projects.length]
  );

  // Navigation Functions
  const goToPreviousProject = () => {
    // Move back by one project, wrapping around if needed
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const goToNextProject = () => {
    // Move forward by one project, wrapping around if needed
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextProject(),
    onSwipedRight: () => goToPreviousProject(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Allows mouse swipe on desktop
  });

  // Update visibleProjectsCount based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleProjectsCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleProjectsCount(2);
      } else {
        setVisibleProjectsCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" {...handlers}>
      <p className="project-text-p1">Browse My Recent</p>
      <h1 className="project-section-title">Projects</h1>
      <div className="carousel-container">
        <button className="carousel-nav left" onClick={goToPreviousProject}>
          &#8592;
        </button>

        <div className="project-container">
          {visibleProjects.map((project, index) => (
            <div
              className="single-project-container color-container"
              key={index}
            >
              <div>
                <img
                  src={project.img}
                  alt={project.name}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                {project.name}
              </h2>
              <div className="source-code">
                <img
                  src="/assets/github.png"
                  alt="My Github profile"
                  className="icon"
                  onClick={() => window.open(project.githubLink, "_blank")}
                />
                <p onClick={() => window.open(project.githubLink, "_blank")}>
                  View code{" "}
                </p>
              </div>
              <div className="btn-container">
                <button
                  onClick={() => window.open(project.liveDemoLink, "_blank")}
                  className="btn btn-color-2 project-btn"
                >
                  Live demo
                </button>
                <button
                  className="btn btn-color-1"
                  onClick={() => openModal(project)}
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-nav right" onClick={goToNextProject}>
          &#8594;
        </button>
      </div>

      {showModal && (
        <Popup
          onClose={closeModal}
          projectHeader={modalProject.name}
          projectContent={modalProject.description}
        />
      )}
    </section>
  );
};

export default Projects;
