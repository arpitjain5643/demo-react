import { useState, useEffect } from "react";
import React from "react";
import "./Modal.css"; // Import the custom CSS file

export default function UnderDevelopmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the modal when the component mounts
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">🚧 Website Under Development 🚧</h2>
            <p className="modal-message">
              The developer has a job to do! Please wait for the latest updates.
            </p>
            <p style={{color:'red'}}>Sorry for the Inconvinenece </p>
            <button className="modal-button" onClick={() => setIsOpen(false)}>
              Okay, Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
