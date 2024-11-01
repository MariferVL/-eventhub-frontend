import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { fetchEvents } from '../services/eventService';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
    };
    loadEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};

// Validación de PropTypes
EventProvider.propTypes = {
  children: PropTypes.node.isRequired, // Asegura que children sea un nodo requerido
};

export const useEvents = () => useContext(EventContext);
