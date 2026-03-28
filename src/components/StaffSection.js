import staff from '../data/staff';

function StaffSection() {
  return (
    <section className="Staff-section" aria-label="Meet our team">
      <h2>Meet Our Team</h2>
      <div className="Staff">
        {staff.map(({ name, image, role }) => (
          <div key={name} className="Staff-card">
            <img src={image} className="Staff-img" alt={name} />
            <h3>{name}</h3>
            <p>{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StaffSection;
