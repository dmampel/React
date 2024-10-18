import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from './Header';


const localizer = momentLocalizer(moment);

export default function BigCalendar({theme, handleClick}) {
    const [events, setEvents] = useState([
    {
        title: 'Evento 1',
        start: new Date(),
        end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },
    ]);

    return (
        <div className={`${theme ? 'bg-gradient-to-l from-white to-purple-500 text-black' : 'bg-gradient-to-r from-black to-blue-900 text-white'} min-h-screen`}>
            <Header theme={theme} handleClick={handleClick}/>
            <div className="calendar-container">
                <h2>Mi Calendario con Eventos</h2>
                <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }}/>
            </div>
        </div>
    
    );
}
