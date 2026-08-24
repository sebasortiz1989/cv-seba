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
        title: "Senior Software Engineer  |  .NET Desktop (WPF · Avalonia · MAUI)  |  AI-Native Development Practice",
        email: "sebasortizsanta@gmail.com",
        linkedin: "www.linkedin.com/in/sebastian-o-5a00b7203",
        github: "www.github.com/sebasortiz1989",
        location: "Santos, SP, Brazil (UTC-3) — available for remote roles worldwide",
        profilePictureUrl: picture,
        summary: "Senior software engineer with five years building production .NET systems, specialising in " +
            "complex cross-platform desktop UI — WPF, Avalonia and .NET MAUI. Currently delivering a full product " +
            "through AI coding agents under an operating model I designed, where the engineering problem is not " +
            "generation but verification: independent review, mutation testing, and measuring platform behaviour " +
            "rather than reasoning about it.\n\n" +
            "Mechanical engineer by first training, with nine years in CAD/CAM, CNC and materials testing before " +
            "moving into software. That background is why I treat a claim as something to measure rather than " +
            "accept — which turns out to be most of the job when working with AI agents. MSc Computer Science " +
            "in progress at Heriot-Watt. Spanish (native), Portuguese and English (professional)."
    };

    const experiences = [
        {
            title: "Senior Full Stack .NET Developer",
            company: "VERION Oleohidraulica BRASIL",
            location: "Santos, SP, Brazil",
            dates: "Jan 2022 - Present",
            description: "Engineering software for precision-agriculture operations across desktop and embedded hardware targets.",
            responsibilities: [
                "Participated in the architectural migration of core agricultural control systems from WPF to .NET MAUI and Avalonia, unifying one codebase across multiple hardware targets while keeping business-critical systems in service.",
                "Built a custom mapping and rendering engine on SkiaSharp, delivering real-time GPS visualisation on resource-constrained devices.",
                "Refactored synchronous legacy code into async/await, resolving UI-thread blocking that had degraded responsiveness across the product suite.",
                "Drove Domain-Driven Design and SOLID adoption; built a reusable XAML component library on strict MVVM that accelerated feature delivery.",
                "Ran code review and xUnit coverage to reduce technical debt, and profiled hot paths to optimise performance.",
                "Worked directly with hydraulics and agronomy engineers to translate physical-system requirements into software specifications.",
            ]
        },
        {
            title: "Unity & WPF Developer",
            company: "Life Is The Game",
            location: "Remote",
            dates: "May 2021 - December 2021",
            description: "Game UI development and tooling.",
            responsibilities: [
                "Designed and implemented complex user interfaces in WPF and XAML, applying MVVM to decouple game logic from visual presentation.",
                "Refined prototypes into polished interfaces, optimising layout rendering across screen resolutions.",
                "Diagnosed and resolved UI-related memory leaks.",
                "Integrated Unity Analytics to capture player behaviour data for product iteration.",
            ]
        },
        {
            title: "Mechanical Engineer",
            company: "Jotagallo S.A.",
            location: "Pereira, Risaralda, Colombia",
            dates: "Mar 2013 - Apr 2021",
            description: "Foundry engineering — design, manufacturing automation and quality control.",
            responsibilities: [
                "Designed cast components in Autodesk Inventor and SolidWorks, and ran casting simulations in Click2Cast.",
                "Programmed CNC in Mastercam and Autodesk Artcam to produce patterns and core boxes for steel, aluminium and cast-iron parts.",
                "Managed the materials laboratory and performed metal analyses against engineering specifications.",
                "Built and maintained production databases, generating weekly, monthly and yearly reports to drive process optimisation.",
                "Contributed to projects covering machine design, pneumatics, hydraulics and automation systems.",
                "Worked directly with clients on new components, quoting and technical support through the production cycle.",
            ]
        }
    ];

    const education = [
        {
            degree: "MSc Computer Science",
            institution: "Heriot-Watt University (remote)",
            dates: "February 2025 - Present",
            details: "Master's Degree, in progress"
        },
        {
            degree: "BSc Mechanical Engineering",
            institution: "EAFIT University",
            dates: "January 2008 - December 2012",
            details: "Bachelor's Degree"
        }
    ];

    const skills = {
        programmingLanguages: ["C#", "Swift", "TypeScript", "JavaScript", "XAML", "SQL", "Java"],
        frameworksLibraries: [".NET 8/9/10", "WPF", "Avalonia UI", ".NET MAUI", "ASP.NET Core", "SwiftUI", "React", "Unity", "SkiaSharp"],
        architecture: ["MVVM", "Domain-Driven Design", "SOLID", "Clean Architecture", "Design Patterns", "ADR practice"],
        databases: ["SQL Server", "SQLite", "Entity Framework Core", "Dapper"],
        tools: ["Git", "Azure DevOps", "Claude Code", "xUnit", "Xcode", "Rider / Visual Studio"],
        other: ["AI coding agents", "Mutation testing", "Code review", "Scrum / Agile", "Spanish, Portuguese, English"]
    };

    const projects = [
        {
            name: "agent-operating-model",
            description: "An operating model for building real software with AI coding agents, extracted from a private multi-repository product build. Roles as separate skills so the reviewer is never the author; mutation testing in review; platform probes that measure behaviour instead of reasoning about it, with every finding labelled measured or reasoned; and written continuity through state, ADRs and an auditable board.",
            technologies: ["Claude Code", "Multi-agent workflows", "ADR practice", "Mutation testing"],
            link: "https://github.com/sebasortiz1989/agent-operating-model"
        },
        {
            name: "Patas & Passeios — pet-care business app",
            description: "A cross-platform business application in daily use by a working dog sitter in Santos. Five platform heads (Desktop, macOS, iOS, Android) share one Avalonia View and Viewmodel over a Dapper/SQLite data layer. 139 C# files, ~16,500 lines, 150 tests. Notable for the money handling: payment is an allocation ledger rather than a paid flag, settling an arbitrary amount across outstanding services and banking the remainder as credit.",
            technologies: [".NET 10", "Avalonia 12", "Dapper", "SQLite", "MVVM", "xUnit"],
            link: "https://github.com/sebasortiz1989/DapperDemo"
        },
        {
            name: "WPFGuide",
            description: "A reference collection of WPF and XAML patterns covering MVVM structure, custom controls, styling and data binding.",
            technologies: ["C#", "WPF", "XAML", "MVVM"],
            link: "https://github.com/sebasortiz1989/WPFGuide"
        }
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
                <p>Last updated: August 2026</p>
            </footer>
        </div>
    );
}

export default App;
