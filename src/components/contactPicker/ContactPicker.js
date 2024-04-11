import React from "react";

export const ContactPicker = ({contactNames, name, onChange}) => {
  return (
    <>
      <select
        onChange={onChange}
        name={name}>
          <option key={-1} name={""}>No Contact Selected</option>
          {
            contactNames.map(contactName => {
              return <option key={contactName} value={contactName}>{contactName}</option>
            })
          }
      </select>
    </>
  );
};
