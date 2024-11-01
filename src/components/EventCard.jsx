const EventCard = ({ event }) => {
    return (
      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-bold">{event.title}</h2>
        <p>{event.date}</p>
        <p>{event.description}</p>
      </div>
    );
  };
  
  export default EventCard;
  