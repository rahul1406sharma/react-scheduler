import React from 'react';
import Appointment from './appointment/appointment';
import classes from './list.css';

const appointmentList = (props) => {
    
    const appointments = [];
    for (let appointment of props.appointments) {
        appointments.push(
            {
                title: appointment.title,
                time: appointment.time
            }
        );
    }
    
   const appointmentsOutput = appointments.map((appt,index) => {
         return (<Appointment key={index} title={appt.title} time={appt.time} />);
    });
    
    
    return (
        <ul className={classes.appointmentList}>
       {appointmentsOutput}
        </ul>
        );
}

export default appointmentList;