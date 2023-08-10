import React, { useState } from "react";
import CommonCard from "./CommonCard";
import useFetchApi from "../hooks/useFetchApi"

export default function ProfileCards({ mainState }) {
  const [data] = useFetchApi("https://jsonplaceholder.typicode.com/users");
  const [searchData, setSearchData] = useState("");

  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearchData(event.target.value);
  };

  const filteredUserList = data?.filter((user) =>
    user.name.toLowerCase().includes(searchData.toLowerCase())
  );
  console.log(filteredUserList);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search User Name"
          style={{
            height: "35px",
            width: "20%",
            borderRadius: "8px",
            border: "2px solid #666666",
          }}
          onChange={onSearchChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        {filteredUserList &&
          filteredUserList?.map((item) => (
            <CommonCard
              key={item.id} // Add a unique "key" prop for the list items
              id={item.id}
              userName={item.username}
              userEmail={item.email}
              mainState={mainState}
              name={item.name}
              phone={item.phone}
            />
          ))}
      </div>
    </>
  );
}
