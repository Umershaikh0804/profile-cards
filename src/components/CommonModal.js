import React from "react";
import useConsole from "../hooks/useConsole";

export default function CommonModal({ handleCloseModal, name, userEmail, id,mainState ,userName,phone}) {
  const onClose = () => {
    handleCloseModal();
  };
    useConsole("I am from custom hook");
  return (
    <div className="App">
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <img src={`https://robohash.org/${id}?200x200`} alt="robotsImage" style={{ width: "100%" }} />
            <p>{id}</p>
            <p>{userName}</p>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{userEmail}</p>
            <p>{mainState}</p>
            <button onClick={onClose}style={{direction:"top-bottom-left-right",padding:"8px 8px 8px 8px"}}className="button2">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
