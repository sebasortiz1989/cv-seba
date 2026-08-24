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
        title: "Senior .NET Engineer  |  Cross-Platform Desktop (WPF · Avalonia · .NET MAUI)  |  Industrial & Engineering Systems",
        email: "sebasortizsanta@gmail.com",
        linkedin: "www.linkedin.com/in/sebastian-o-5a00b7203",
        github: "www.github.com/sebasortiz1989",
        location: "Santos, SP, Brazil (UTC-3) — remote, overlapping European and North American hours",
        profilePictureUrl: picture,
        summary: "Senior engineer specialising in cross-platform desktop software for industrial and engineering " +
            "systems — five years in production .NET, currently building control and visualisation software that " +
            "runs on operator hardware in the field.\n\n" +
            "Primary developer of a machine-control application in continuous service for three years — the majority " +
            "of its commit history — carried across major .NET releases rather than rewritten, and shipping to " +
            "Windows, Linux, macOS, iOS and Android from a single view layer. Alongside it, a visualisation library " +
            "whose core is consumed by four different UI frameworks (WPF, WinForms, .NET MAUI, Avalonia), with " +
            "custom SkiaSharp rendering for real-time positional data on resource-constrained devices.\n\n" +
            "Mechanical engineer for eight years before software — CAD/CAM, CNC programming and materials " +
            "laboratory work. I read engineering requirements in their own terms and talk to mechanical, hydraulics " +
            "and agronomy teams without a translator in the room. The laboratory habit is the one that carried " +
            "over: a claim is something you measure, not something you accept.\n\n" +
            "I also run an agent-driven development practice — published, and built around verification rather " +
            "than generation: roles as separate agent skills so the reviewer is never the author, mutation testing " +
            "as the review gate, and platform probes kept as evidence. MSc Computer Science in progress at " +
            "Heriot-Watt. Spanish (native), Portuguese and English (professional)."
    };

    const experiences = [
        {
            title: "Senior Full Stack .NET Developer",
            company: "VERION Oleohidraulica BRASIL",
            location: "Santos, SP, Brazil",
            dates: "Jan 2022 - Present",
            description: "Control, guidance and visualisation software for precision-agriculture operations, running on desktop workstations and on constrained hardware in the field.",
            responsibilities: [
                "Long-lived continuity: primary developer of the operator-facing control application — the majority of its commit history — in continuous service for three years, kept current across major .NET releases instead of being rewritten. Ships to five OS targets from one view layer, localised into five languages including regional variants for the export markets.",
                "Cross-framework architecture: migrated core control systems from WPF to .NET MAUI and Avalonia while they stayed in service, and maintain a visualisation library whose single core is consumed by four UI frameworks — WPF, WinForms, MAUI and Avalonia — each with its own run host.",
                "Custom real-time rendering: built mapping and charting engines on SkiaSharp, in 2D and 3D, delivering live positional visualisation at usable frame rates on resource-constrained field devices where off-the-shelf charting could not run.",
                "Concurrency and responsiveness: refactored synchronous legacy code into async/await, resolving UI-thread blocking that had degraded responsiveness across the product suite.",
                "Architecture enforced by structure: layering is a build-time guarantee rather than a review convention — the presentation-model assemblies cannot reference the view assemblies, because the project graph forbids it. Applied Domain-Driven Design and SOLID throughout, and built a reusable XAML component library on strict MVVM.",
                "Engineering standards at company scale: shared analyzer and build configuration across every repository — one settings source, StyleCop enforcement, signed assemblies, MSBuild project classification and CI pipelines assembled from shared components.",
                "Domain translation: work directly with hydraulics and agronomy engineers, turning physical-system requirements and field behaviour into software specifications.",
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
            description: "Eight years in precision manufacturing — the domain background behind the software work.",
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
        desktopAndXaml: ["WPF", "Avalonia UI", ".NET MAUI", "WinForms", "XAML", "MVVM", "Custom controls", "Component libraries", "Localisation"],
        programmingLanguages: ["C#", "Swift", "TypeScript", "SQL"],
        dotNet: [".NET 8/9/10", "ASP.NET Core", "Entity Framework Core", "Dapper", "xUnit"],
        graphicsAndRealTime: ["SkiaSharp", "Custom 2D and 3D rendering", "GIS and positional data", "Async / concurrency optimisation", "Constrained-hardware targets"],
        architecture: ["Domain-Driven Design", "SOLID", "Layering enforced by project structure", "ADR practice", "Modular package design"],
        quality: ["Mutation testing", "Platform probes", "StyleCop and analyzer configuration", "Signed builds", "CI pipelines", "Code review"],
        aiAssistedEngineering: ["Claude Code", "Multi-agent workflows", "Agent skill authoring", "Output verification"],
        engineeringDomain: ["CAD/CAM (Inventor, SolidWorks)", "CNC programming (Mastercam, Artcam)", "Materials testing", "Casting simulation"],
        tools: ["Git", "GitLab CI", "Azure DevOps", "Rider / Visual Studio", "Xcode", "Scrum / Agile"]
    };

    const projects = [
        {
            name: "AvaloniaFramework",
            description: "An MVP/navigation framework for Avalonia — ~5,000 lines of C#, 53 tests (measured): a dependency-injection container with layered builders and deferred Factory<T> resolution, an awaitable presenter lifecycle, a navigation controller, and styled controls whose per-state appearance is set through style classes rather than looked up by resource key. MIT licensed, and the framework Patas & Passeios is built on.",
            technologies: ["C#", ".NET 10", "Avalonia", "MVP", "Dependency injection"],
            link: "https://github.com/sebasortiz1989/AvaloniaFramework"
        },
        {
            name: "Patas & Passeios — cross-platform business app",
            description: "A cross-platform business application in daily use by a real operator. Four platform heads — Desktop (Windows and Linux), macOS, iOS and Android — share one Avalonia View and Viewmodel over a Dapper/SQLite data layer. 141 C# files, ~17,300 lines, 200 tests (measured). Notable for the money handling: payment is an allocation ledger rather than a paid flag, settling an arbitrary amount across outstanding obligations and banking the remainder as credit.",
            technologies: [".NET 10", "Avalonia 12", "Dapper", "SQLite", "MVVM", "xUnit"],
            link: "https://github.com/sebasortiz1989/PatasePasseios"
        },
        {
            name: "agent-operating-model",
            description: "An operating model for building real software with AI coding agents, extracted from a private multi-repository product build. Roles as separate skills so the reviewer is never the author; mutation testing in review; platform probes that measure behaviour instead of reasoning about it, with every finding labelled measured or reasoned; and written continuity through state, ADRs and an auditable board.",
            technologies: ["Claude Code", "Multi-agent workflows", "ADR practice", "Mutation testing"],
            link: "https://github.com/sebasortiz1989/agent-operating-model"
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

            <footer className="resume-footer">
                <p>Last updated: August 2026</p>
            </footer>
        </div>
    );
}

export default App;
