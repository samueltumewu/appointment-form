import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <div>
      {contacts.map((contact, index)=>{
        const {name, ...desc} = contact;
        return <Tile key={index} name={name} description={desc}/>
      })}
    </div>
  );
};
