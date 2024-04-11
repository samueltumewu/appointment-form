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
          placeholder="name"
          onChange={(e)=>setName(e.target.value)}
          required/>
        <input 
          value={phone} 
          type="tel"
          name="phone"
          placeholder="phone number"
          onChange={(e)=>setPhone(e.target.value)}
          required/>
        <input 
          value={email} 
          type="email"
          name="email"
          placeholder="email (ex: test@mail.com)"
          onChange={(e)=>setEmail(e.target.value)}/>
        <input type="submit" name="submit" value="Add Contact"/>
      </form>
    </>
  );
};

