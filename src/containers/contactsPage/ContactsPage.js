import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addNewContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currName, setCurrName] = useState('');
  const [currPhone, setCurrPhone] = useState('');
  const [currEmail, setCurrEmail] = useState('');
  const [isNameDuplicated, setIsNameDuplicated] = useState(false);

  useEffect(()=>{
    setIsNameDuplicated(
      contacts.some((contact) => contact.contactName === currName)
    )
  },[currName])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isNameDuplicated) {
    addNewContact(currName, currPhone, currEmail);
    setCurrName('');
    setCurrEmail('');
    setCurrPhone('');
   } else {
    alert(`${currName} already exist. Please use different name!`)
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
            email={currEmail}
            setEmail={setCurrEmail}
            name={currName}
            setName={setCurrName}
            phone={currPhone}
            setPhone={setCurrPhone}
            handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
