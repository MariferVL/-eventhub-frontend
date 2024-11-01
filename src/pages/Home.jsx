import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
// import SearchBar from '../components/SearchBar';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      <h1>Bienvenido a EventHub</h1>
      {/* <SearchBar /> */}
      <div className="events-container">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;
