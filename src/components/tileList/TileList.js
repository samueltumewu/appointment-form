import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <div>
      {contacts.map((contact, index)=>{
        const {contactName, ...desc} = contact;
        return <Tile key={index} name={contactName} description={desc}/>
      })}
    </div>
  );
};
