function OfficeSection() {
  const hours = [
    { day: 'Sunday', time: 'Closed' },
    { day: 'Monday', time: '8AM – 5PM' },
    { day: 'Tuesday', time: '8AM – 5PM' },
    { day: 'Wednesday', time: '8AM – 5PM' },
    { day: 'Thursday', time: '8AM – 5PM' },
    { day: 'Friday', time: 'Closed' },
    { day: 'Saturday', time: 'Closed' },
  ];

  return (
    <section className="Office-section" aria-label="Office information">
      <img
        className="Office-bg"
        src="./images/Day.jpg"
        alt="Mayberry Family Dentistry office exterior"
      />
      <div className="Info">
        <div className="Owners">
          <img
            src="./images/Owners.jpg"
            className="Owners-img"
            alt="Dr. Paul Mayberry and staff"
          />
        </div>
        <div className="Hours" aria-label="Office hours">
          <h2>Hours</h2>
          <ul>
            {hours.map(({ day, time }) => (
              <li key={day}>
                <span className="Hours-day">{day}</span>
                <span className="Hours-time">{time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="Map">
          <div className="Map-container">
            <iframe
              title="Mayberry Family Dentistry location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096875!2d144.95373631531716!3d-37.81627937975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727ab37e8a1e6!2s501%20W%20Joyner%20Ave%2C%20Ridgecrest%2C%20CA%2093555!5e0!3m2!1sen!2sus!4v1594012223893!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeSection;
