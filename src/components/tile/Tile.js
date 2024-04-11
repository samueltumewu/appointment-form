import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">{name}</p>
      {
        Object.values(description).map((desc, index) => {
          return <p key={index} className="tile">{desc}</p>
        })
      }
    </div>
  );
};
