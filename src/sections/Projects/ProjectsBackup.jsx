import { useState, useEffect } from "react";
import "./Projects.css";
import Popup from "./components/Popup.jsx";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);

  const projects = [
    {
      name: "EFHK Live Arrivals",
      img: "src/assets/project-1.png",
      description:
        "This project is a simple web application that displays live arrival data for Helsinki-Vantaa airport. The data is fetched from the Finavia API and displayed in a user-friendly format. The application is built using React and styled with CSS.",
      githubLink: "#",
    },
    {
      name: "Project Two",
      img: "src/assets/project-2.png",
      description: "Description for Project Two...",
      githubLink: "#",
    },
    {
      name: "Project Three",
      img: "src/assets/project-3.png",
      description: "Description for Project Three...",
      githubLink: "#",
    },
    {
      name: "Project Four",
      img: "src/assets/project-4.png",
      description: "Description for Project Four...",
      githubLink: "#",
    },
    {
      name: "Project Five",
      img: "src/assets/project-5.png",
      description: "Description for Project Five...",
      githubLink: "#",
    },
  ];

  const openModal = (project) => {
    setModalProject(project);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  // Handle left and right navigation
  const goToPreviousProject = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - visibleProjectsCount : prevIndex - 1
    );
  };

  const goToNextProject = () => {
    setStartIndex((prevIndex) =>
      prevIndex >= projects.length - visibleProjectsCount ? 0 : prevIndex + 1
    );
  };

  // Only show projects based on the current start index and visibleProjectsCount
  const visibleProjects = projects.slice(startIndex, startIndex + visibleProjectsCount);

  // Update visibleProjectsCount based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleProjectsCount(1); // Mobile view: show 1 project at a time
      } else if (window.innerWidth < 1024) {
        setVisibleProjectsCount(2); // Tablet view: show 2 projects at a time
      } else {
        setVisibleProjectsCount(3); // Desktop view: show 3 projects at a time
      }
    };
  
    // Set the initial value
    handleResize();
  
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
  
    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects">
      <p className="project-text-p1">Browse My Recent</p>
      <h1 className="project-section-title">Projects</h1>
      <div className="carousel-container">
        <button className="carousel-nav left" onClick={goToPreviousProject}>
          &#8592;
        </button>

        <div className="project-container">
          {visibleProjects.map((project, index) => (
            <div className="single-project-container color-container" key={index}>
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
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn">
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
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
