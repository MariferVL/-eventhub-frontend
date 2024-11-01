import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import { fetchEvents } from '../services/eventService'; // Asegúrate de que estás usando la importación correcta

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents(); // Llama a la función fetchEvents
        setEvents(data); // Establece los eventos en el estado
      } catch (error) {
        console.error("Error fetching events:", error); // Manejo de errores
      }
    };

    loadEvents(); // Llama a la función para cargar los eventos
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Bienvenido a EventHub</h1>
      <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
      <div className="events-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;
