const EducationItem = ({ degree, institution, dates, details }) => (
    <div className="education-item item-card">
        <h3 className="item-title">{degree} <span className="item-subtitle">- {institution}</span></h3>
        <p className="item-dates">{dates}</p>
        {details && <p className="item-description">{details}</p>}
    </div>
);

export default EducationItem;