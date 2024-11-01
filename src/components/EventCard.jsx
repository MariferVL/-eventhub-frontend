import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-bold">{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

// Validación de PropTypes
EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired, // Asegura que event sea un objeto requerido con las propiedades especificadas
};

export default EventCard;
