import React, { useState } from "react";
import CommonModal from "./CommonModal";

export default function CommonCard({ id, name, userEmail,mainState,userName,phone }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    {isModalOpen &&
      <CommonModal
       handleCloseModal={handleCloseModal}
       name={name}
       userEmail={userEmail}
       id={id}
       mainState={mainState}
       userName={userName}
       phone={phone}
       />
    }
      <div className="card"
        style={{
          borderRadius: "18px",
          width: "18%",
          height: "350px",
        }}
      >
        <div>
          <img
            src={`https://robohash.org/${id}?200x200`}
            alt="robotsImage"
            style={{ width: "100%" }}
          />
        </div>
        <div>{userName}</div>
        <div>{userEmail}</div>
        {<button onClick={handleOpenModal} style={{direction:"top-bottom-left-right",padding:"10px 10px 10px 10px"}}className="button">Show details</button>}
      </div>
    </>
  );
}
