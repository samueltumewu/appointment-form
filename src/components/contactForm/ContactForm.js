import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          value={name} 
          type="text"
          name="name"
          onChange={(e)=>setName(e.target.value)}
          required/>
        <input 
          value={phone} 
          type="tel"
          name="phone"
          onChange={(e)=>setPhone(e.target.value)}
          required/>
        <input 
          value={email} 
          type="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}/>
        <input type="submit" name="submit" value="Add Contact"/>
      </form>
    </>
  );
};

