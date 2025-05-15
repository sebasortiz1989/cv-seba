import Section from "./components/Section.jsx";
import ExperienceItem from "./components/ExperienceItem.jsx";
import EducationItem from "./components/EducationItem.jsx";
import ProjectItem from "./components/ProjectItem.jsx";
import './App.css'

function App() {
    // --- Personal Data (Customize this section) ---
    const personalData = {
        name: "Your Name",
        title: "Aspiring Web Developer | Software Engineer",
        email: "your.email@example.com",
        phone: "(555) 123-4567",
        linkedin: "linkedin.com/in/yourprofile", // Omit 'https://' for display if you prefer
        github: "github.com/yourusername",     // Omit 'https://'
        portfolio: "yourportfolio.com",      // Optional
        location: "City, State",
        summary: "A highly motivated and results-oriented individual seeking an entry-level position in web development. Eager to apply academic knowledge and passion for technology to contribute to innovative projects and learn from experienced professionals. Strong foundation in JavaScript, React, and modern web technologies."
    };

    const experiences = [
        {
            title: "Software Engineering Intern",
            company: "Tech Solutions Inc.",
            dates: "June 2024 - August 2024",
            description: "Contributed to the development of a new client-facing web application.",
            responsibilities: [
                "Developed and implemented user interface components using React and CSS.",
                "Collaborated with senior developers on feature design and bug fixing.",
                "Participated in agile development processes, including daily stand-ups and sprint reviews.",
                "Wrote unit tests to ensure code quality and reliability."
            ]
        },
        {
            title: "Freelance Web Developer",
            company: "Self-Employed",
            dates: "January 2023 - May 2024",
            description: "Designed and developed websites for small businesses.",
            responsibilities: [
                "Gathered client requirements and translated them into technical specifications.",
                "Built responsive websites using HTML, CSS, and JavaScript.",
                "Managed project timelines and deliverables."
            ]
        }
        // Add more experiences here
    ];

    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Technology",
            dates: "August 2020 - May 2024",
            details: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management. GPA: 3.8/4.0"
        },
        {
            degree: "Web Development Bootcamp Certificate",
            institution: "Code Academy Pro",
            dates: "January 2023 - June 2023",
            details: "Intensive program focused on full-stack web development."
        }
        // Add more education entries here
    ];

    const skills = {
        programmingLanguages: ["JavaScript (ES6+)", "Python", "Java", "HTML5", "CSS3"],
        frameworksLibraries: ["React", "Node.js", "Express.js", "jQuery"],
        databases: ["MongoDB", "PostgreSQL", "MySQL"],
        tools: ["Git", "GitHub", "Docker", "Webpack", "VS Code"],
        other: ["Agile Methodologies", "RESTful APIs", "Responsive Design", "Problem Solving"]
    };

    const projects = [
        {
            name: "Personal Portfolio Website",
            description: "A responsive portfolio website (this resume!) built with React and CSS to showcase my skills and projects.",
            technologies: ["React", "CSS", "JavaScript"],
            link: "https://yourusername.github.io/your-repo-name/" // Update this link after deployment
        },
        {
            name: "E-commerce Mockup",
            description: "A front-end mockup for an e-commerce platform featuring product listings, cart functionality, and user authentication.",
            technologies: ["React", "Redux (or Context API)", "CSS Modules"],
            link: "https://github.com/yourusername/ecommerce-mockup" // Example link
        }
        // Add more projects here
    ];

    return (
        <div className="resume-container">
            <header className="resume-header">
                <div className="profile-picture-container">
                    <img
                        src={personalData.profilePictureUrl}
                        alt={personalData.name}
                        className="profile-picture"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/CCCCCC/ffffff?text=Img+Error"; }}
                    />
                </div>
                <div className="header-content">
                    <h1>{personalData.name}</h1>
                    <p className="job-title">{personalData.title}</p>
                    <div className="contact-info">
                        {personalData.email && <p><span className="contact-label">Email:</span> <a href={`mailto:${personalData.email}`}>{personalData.email}</a></p>}
                        {personalData.phone && <p><span className="contact-label">Phone:</span> {personalData.phone}</p>}
                        {personalData.location && <p><span className="contact-label">Location:</span> {personalData.location}</p>}
                        {personalData.linkedin && <p><span className="contact-label">LinkedIn:</span> <a href={`https://www.linkedin.com/in/${personalData.linkedin.split('/').pop()}`} target="_blank" rel="noopener noreferrer">{personalData.linkedin}</a></p>}
                        {personalData.github && <p><span className="contact-label">GitHub:</span> <a href={`https://github.com/${personalData.github.split('/').pop()}`} target="_blank" rel="noopener noreferrer">{personalData.github}</a></p>}
                        {personalData.portfolio && <p><span className="contact-label">Portfolio:</span> <a href={`https://${personalData.portfolio}`} target="_blank" rel="noopener noreferrer">{personalData.portfolio}</a></p>}
                    </div>
                </div>
            </header>

            <Section title="Summary">
                <p>{personalData.summary}</p>
            </Section>

            {experiences.length > 0 && (
                <Section title="Experience">
                    {experiences.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            title={exp.title}
                            company={exp.company}
                            dates={exp.dates}
                            description={exp.description}
                            responsibilities={exp.responsibilities}
                        />
                    ))}
                </Section>
            )}

            {education.length > 0 && (
                <Section title="Education">
                    {education.map((edu, index) => (
                        <EducationItem
                            key={index}
                            degree={edu.degree}
                            institution={edu.institution}
                            dates={edu.dates}
                            details={edu.details}
                        />
                    ))}
                </Section>
            )}

            <Section title="Skills">
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, skillList]) => (
                        skillList.length > 0 && (
                            <div key={category} className="skill-category">
                                <h4>{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4> {/* Converts camelCase to Title Case */}
                                <ul>
                                    {skillList.map((skill, index) => <li key={index}>{skill}</li>)}
                                </ul>
                            </div>
                        )
                    ))}
                </div>
            </Section>

            {projects.length > 0 && (
                <Section title="Projects">
                    {projects.map((proj, index) => (
                        <ProjectItem
                            key={index}
                            name={proj.name}
                            description={proj.description}
                            technologies={proj.technologies}
                            link={proj.link}
                        />
                    ))}
                </Section>
            )}

            <footer className="resume-footer">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
            </footer>
        </div>
    );
}

export default App;