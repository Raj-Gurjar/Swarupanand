import React from "react";
// import "./Modal.css"; // Make sure to create this CSS file

const Modal = ({ message, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
