import Section from "./components/Section.jsx";
import ExperienceItem from "./components/ExperienceItem.jsx";
import EducationItem from "./components/EducationItem.jsx";
import ProjectItem from "./components/ProjectItem.jsx";
import picture from './assets/picture.jpg'
import './App.css'

// When updating just run (npm run deploy)
function App() {
    // portfolio: "yourportfolio.com",
    // phone: "",
    const personalData = {
        name: "Juan Sebastian Ortiz",
        title: "FullStack Developer | .NET | Avalonia | Swift | Swift UI | Xamarin | WPF | Java | JS | React | React Native |",
        email: "sebasortizsanta@gmail.com",
        linkedin: "www.linkedin.com/in/sebastian-o-5a00b7203",
        github: "www.github.com/sebasortiz1989",
        location: "Santos, SP, Brazil",
        profilePictureUrl: picture,
        summary: "Full Stack Developer with expertise in implementing best programming practices," +
            " including Design Patterns, SOLID principles, and Domain-Driven Design." +
            " Proficient in developing and executing unit tests and utilizing LINQ and Git for effective version control." +
            " Skilled in MVVM architecture and XAML for Front-end development. Experienced in collaborative software development using SCRUM methodology," +
            " with hands-on experience with WPF, Xamarin.Forms, and Avalonia. \n\n" +
            "Experienced in Geographic Information Systems (GIS) and utilizing Unity for game development." +
            "Fluency in Spanish, English, and Portuguese."
    };

    const experiences = [
        {
            title: "Fullstack Developer C#",
            company: "VERION Oleohidraulica BRASIL",
            location: "Santos, SP, Brazil",
            dates: "Jan 2022 - Present",
            description: "Developed robust agricultural applications with a focus on both frontend and backend using .NET," +
                " Avalonia, and Xamarin.Forms. Implemented Domain-Driven Design, Scrum methodologies, and design patterns to" +
                " enhance project structure and efficiency. Utilized LINQ for data query optimization and adhered to" +
                " SOLID principles for maintainable and scalable code. Managed version control and collaborated effectively" +
                " using Git.",
            responsibilities: [
                "Development of cross-platform apps for agricultural applications using Avalonia",
                "UI development with an emphasis on creating intuitive and interactive interfaces and components",
                "Development of Skiasharp components to be used in mapping functionalities within the applications",
                "Development of controllers to manage the interaction between the application frontend and the ViewModel," +
                " responsible for generating events and executing commands to control electrical components.",
                "Unit testing for new implementations to ensure functionality, reliability, and code quality.",
                "Enhanced code performance by utilizing profiling tools and optimizing asynchronous tasks for improved" +
                " efficiency and responsiveness.",
                "Worked within a team following Scrum methodologies for project development, using ClickUp for task management and collaboration",
            ]
        },
        {
            title: "Unity Developer",
            company: "Life Is The Game",
            location: "Remote",
            dates: "January 2023 - May 2024",
            description: "",
            responsibilities: [
                "Developed user interfaces using XAML and WPF, applying MVVM design patterns for a Unity game.",
                "Iteratively refined prototype design ideas into intuitive and user-friendly interfaces.",
                "Debugged and resolved UI-related gameplay issues through effective teamwork and open communication.",
                "Integrated Unity Analytics for comprehensive data acquisition within the game.",
                "Used tools such as Jira, Slack, and GitLab to streamline project development."
            ]
        },
        {
            title: "Gameplay Programmer",
            company: "Freelance",
            location: "Remote",
            dates: "Apr 2021 - Nov 2021",
            description: "",
            responsibilities: [
                "Completed personal projects utilizing both Unity 3D and 2D.",
                "Developed scripts and designed game mechanics, levels, and overall game design.",
                "Implemented animations, sound effects, and visual effects to enhance gameplay.",
                "Created seamless scene transitions for improved game flow.",
                "Customized user interfaces to suit each game's unique requirements.",
            ]
        },
        {
            title: "Mechanical Engineer",
            company: "Jotagallo S.A.",
            location: "Pereira, Risaralda, Colombia",
            dates: "Mar 2013 - Apr 2021",
            description: "",
            responsibilities: [
                "Engaged directly with clients to develop new cast components, provide quotes, and deliver customer support throughout the production cycle.",
                "Developed and managed Excel databases to organize production orders, priorities, and inventory for the foundry.",
                "Updated production data and generated comprehensive weekly, monthly, and yearly reports with organized data and visual charts.",
                "Designed parts using Autodesk Inventor or SolidWorks and conducted casting simulations with Click2Cast.",
                "Created patterns and core boxes for sand molds using CNC programming on Mastercam and Autodesk Artcam, for steel, aluminum, and cast iron parts.",
                "Managed the materials laboratory and performed metal analyses.",
                "Contributed to foundry projects involving the design of machines, mechanical components, pneumatics, hydraulics, and automation systems."
            ]
        }
    ];

    const education = [
        {
            degree: "Msc Computer Science",
            institution: "Heriot Watt University",
            dates: "February 2025 - Present",
            details: "Master's Degree"
        },
        {
            degree: "Mechanical Engineer",
            institution: "EAFIT University",
            dates: "January 2008 - December 2012",
            details: "Bachelor's Degree"
        }
    ];

    const skills = {
        programmingLanguages: ["C#", "Java", "Swift", "Javascript", "XAML", "HTML", "CSS"],
        frameworksLibraries: ["Avalonia", "Xamarin", "WPF", "Unity", "Swift UI", "React"],
        databases: [],
        tools: [],
        other: ["Git", "Agile Methodologies", "SQL", "SOLID", "Design Patterns", "Problem Solving"]
    };

    const projects = [
        // {
        //     name: "E-commerce Mockup",
        //     description: "A front-end mockup for an e-commerce platform featuring product listings, cart functionality, and user authentication.",
        //     technologies: ["React", "Redux (or Context API)", "CSS Modules"],
        //     link: "https://github.com/yourusername/ecommerce-mockup" // Example link
        // }
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
                        {personalData.location && <p><span className="contact-label">Location:</span> {personalData.location}</p>}
                        {personalData.linkedin && <p><span className="contact-label">LinkedIn:</span> <a href={`https://www.linkedin.com/in/${personalData.linkedin.split('/').pop()}`} target="_blank" rel="noopener noreferrer">{personalData.linkedin}</a></p>}
                        {personalData.github && <p><span className="contact-label">GitHub:</span> <a href={`https://github.com/${personalData.github.split('/').pop()}`} target="_blank" rel="noopener noreferrer">{personalData.github}</a></p>}
                        {/*{personalData.portfolio && <p><span className="contact-label">Portfolio:</span> <a href={`https://${personalData.portfolio}`} target="_blank" rel="noopener noreferrer">{personalData.portfolio}</a></p>}*/}
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
                            location={exp.location}
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
                <p>Last updated: Jun - 05 - 2025</p>
            </footer>
        </div>
    );
}

export default App;
