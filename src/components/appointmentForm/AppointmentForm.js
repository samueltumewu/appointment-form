import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(()=>{
    return contacts.map((contact) => contact.name)
  },[contacts]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          type="text"
          value={title}
          placeholder="Who'd you like to meet?"
          required
          onChange={(e)=>setTitle(e.target.value)}/>
        <ContactPicker
          contactNames={contactNames}
          name="contact"
          onChange={(e)=>{setContact(e.target.value)}}/>
        <input 
          name="date"
          type="date"
          value={date}
          min={getTodayString()}
          required
          onChange={(e)=>setDate(e.target.value)}/>
        <input 
          name="name"
          type="time"
          value={time}
          required
          onChange={(e)=>setTime(e.target.value)}/>
        <input type="submit" value="Add Appointment"/>
      </form>
    </>
  );
};
