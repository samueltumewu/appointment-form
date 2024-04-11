import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addNewAppointments}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [appointmentName, setAppointmentName] = useState('');
  const [appointmentContact, setAppointmentContact] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addNewAppointments(appointmentName, appointmentContact, appointmentDate, appointmentTime);
    setAppointmentName('');
    setAppointmentContact('');
    setAppointmentDate('');
    setAppointmentTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          title={appointmentName}
          setTitle={setAppointmentName}
          contact={appointmentContact}
          setContact={setAppointmentContact}
          date={appointmentDate}
          setDate={setAppointmentDate}
          time={appointmentTime}
          setTime={setAppointmentTime}
          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};