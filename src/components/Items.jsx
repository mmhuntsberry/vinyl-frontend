import React from "react";

const Items = (props) => {
  return (
    <ul>
      {props.data.map((item) => (
        <li
          style={{
            color: "red",
          }}
          key={item.id}
        >
          {item.artist}
        </li>
      ))}
    </ul>
  );
};

export default Items;
