import React, { useEffect } from "react";
import "./Popup.css";
import PropTypes from "prop-types";

const Popup = ({ onClose, projectHeader, projectContent }) => {
  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          <h2>{projectHeader}</h2>
          <p>
            {" "}
            {projectContent.split("\n").map((str, index) => (
              <React.Fragment key={index}>
                {str}
                <br />
              </React.Fragment>
            ))}
            
          </p>
          <button className="close" onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  onClose: PropTypes.func,
  projectHeader: PropTypes.string,
  projectContent: PropTypes.string,
};

export default Popup;
