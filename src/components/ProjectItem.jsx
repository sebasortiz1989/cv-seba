const ProjectItem = ({ name, description, technologies, link }) => (
    <div className="project-item item-card">
        <h3 className="item-title">
            {link ? <a href={link} target="_blank" rel="noopener noreferrer">{name}</a> : name}
        </h3>
        {technologies && <p className="item-technologies"><strong>Technologies:</strong> {technologies.join(', ')}</p>}
        <p className="item-description">{description}</p>
    </div>
);

export default ProjectItem;