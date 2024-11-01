import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import { fetchEvents } from '../services/eventService';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
        setFilteredEvents(data); // Al inicio, los eventos filtrados son todos los eventos
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    loadEvents();
  }, []);

  useEffect(() => {
    // Filtrar eventos cuando cambia la búsqueda
    const results = events.filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(results);
  }, [searchQuery, events]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Event List</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="events-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
