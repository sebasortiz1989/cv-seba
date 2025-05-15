const ExperienceItem = ({ title, company, location, dates, description, responsibilities }) => (
    <div className="experience-item item-card">
        <h3 className="item-title">{title} <span className="item-subtitle">@ {company}</span></h3>
        <p>{location}</p>
        <p className="item-dates">{dates}</p>
        {description && <p className="item-description">{description}</p>}
        {responsibilities && responsibilities.length > 0 && (
            <ul className="responsibilities-list">
                {responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
            </ul>
        )}
    </div>
);

export default ExperienceItem;