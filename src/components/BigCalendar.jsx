import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Header from './Header';
import '../styles/calendarStyles.css';
import { VscTrash } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";

export default function BigCalendar({ theme, handleClick }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);

    // Cargar eventos desde Local Storage al iniciar el componente
    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem("events"));
        if (storedEvents) {
            // Convertir las fechas que son strings de nuevo a objetos Date
            const eventsWithDates = storedEvents.map(event => ({
                ...event,
                date: new Date(event.date) // Asegurarse de convertir la fecha
            }));
            setEvents(eventsWithDates);
        }
    }, []);

    // Guardar eventos en Local Storage cada vez que cambien
    useEffect(() => {
        if (events.length > 0) {
            localStorage.setItem("events", JSON.stringify(events));
        }
    }, [events]);

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const Create_Event_Fun = () => {
        if (selectedDate && eventName) {
            const newEvent = {
                id: new Date().getTime(),
                date: selectedDate,
                title: eventName,
            };
            setEvents([...events, newEvent]);
            setSelectedDate(null);
            setEventName("");
        }
    };

    const Update_Event_Fun = (eventId, newName) => {
        const updated_Events = events.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updated_Events);
    };

    const Delete_Event_Fun = (eventId) => {
        const updated_Events = events.filter((event) => event.id !== eventId);
        setEvents(updated_Events);
    };

    return (
        <div className={`${theme ? 'bg-gradient-to-l from-white to-purple-500 text-black' : 'bg-gradient-to-r from-black to-blue-900 text-white'} min-h-screen`}>
            <Header theme={theme} handleClick={handleClick} />
            <div className="app flex flex-col gap-20">
                <h1 className="text-white font-light text-7xl text-center">Mi Calendario</h1>
                <div className="container flex flex-col mb-16 mx-auto">
                    <div className="calendar-container rounded-3xl text-center shadow-inner shadow-slate-700 bg-transparent">
                        <Calendar
                            value={selectedDate}
                            onClickDay={Date_Click_Fun}
                            tileClassName={({ date }) =>
                                selectedDate &&
                                    date.toDateString() === selectedDate.toDateString()
                                    ? "selected"
                                    : events.some(
                                        (event) =>
                                            event.date.toDateString() ===
                                            date.toDateString(),
                                    )
                                        ? "event-marked"
                                        : ""
                            }
                        />
                    </div>
                    <div className="event-container mt-10 w-full">
                        <div className="event-form">
                            <h2 className="mb-10 text-3xl font-light">Eventos</h2>
                            <p className="text-white font-light mb-5 text-xl">
                                Fecha Seleccionada: <strong className="underline decoration-emerald-400">{selectedDate ? selectedDate.toDateString() : "Ninguna"}</strong>
                            </p>
                            <input
                                className="rounded-full"
                                type="text"
                                placeholder="Evento..."
                                value={eventName}
                                onChange={Event_Data_Update}
                            />
                            <button className="create-btn rounded-full" onClick={Create_Event_Fun}>
                                Agregar
                            </button>
                        </div>

                        {events.length > 0 && (
                            <div className="event-list mt-10">
                                <h2 className="mb-5 text-3xl font-light">Eventos Actuales</h2>
                                <div className="event-cards flex flex-row">
                                    {events.map((event) => (
                                        <div key={event.id} className="event-card rounded-3xl">
                                            <div className="event-card-body">
                                                <p className="event-title text-xl text-white capitalize">{event.title}</p>
                                            </div>
                                            <div className="event-card-header gap-2">
                                                <span className="event-date">{event.date.toDateString()}</span>
                                                <div className=" flex flex-row gap-6">
                                                    <button
                                                        className=" text-blue-500 text-2xl hover:scale-150 transition hover:text-blue-900"
                                                        onClick={() =>
                                                            Update_Event_Fun(
                                                                event.id,
                                                                prompt("Ingresa el nuevo evento"),
                                                            )
                                                        }
                                                    >
                                                        <CiEdit />
                                                    </button>
                                                    <button
                                                        className=" text-red-500 text-2xl hover:scale-150 transition hover:text-red-900"
                                                        onClick={() =>
                                                            Delete_Event_Fun(event.id)
                                                        }
                                                    >
                                                        <VscTrash />
                                                    </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
