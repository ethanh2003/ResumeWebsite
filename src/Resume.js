import React from 'react';
import "./resume.css"
// import { Link } from 'react-router-dom';


const Resume = () => {
    document.title = "Ethan Herring";
    const resumeData = {
        education: [
            // {
            //   degree: 'Associate in Arts',
            //   school: 'Sampson Community College',
            //   location: 'Clinton, NC',
            //   date: 'August 2019 to May 2021',
            // },
            {
                degree: 'Bachelors in Computer Science',
                school: 'University of North Carolina at Charlotte',
                location: 'Charlotte, NC Cum Laude',
                date: 'August 2021 to May 2023',
            },
        ],
        aboutMe:
            'Highly motivated and adaptable Computer Science graduate with a keen interest in developing innovative technology solutions. Seeking an opportunity to contribute my technical skills and collaborative mindset to a dynamic team, where I can create impactful software solutions and grow as a professional.',
        skills: [
            'Languages: Python, Java, SQL, JavaScript, Bash, Git, HTML, CSS',
            'Frameworks: Flask, Spring Boot, React',
        ],
        projects: [
            {
                name: 'TaskIt',
                date: 'August 2023',
                link: 'https://github.com/ethanh2003/TaskIt',
                description:
                    'Designed and built a web-based task management application using Java Spring Boot and React. Implemented user authentication, enabling secure access to personalized to-do lists. Utilized RESTful APIs for seamless communication between the front-end and back-end. Empowered users to create and track tasks, enhancing productivity and collaboration.',
            },
            {
                name: 'SureCharge',
                date: 'January 2023',
                link: 'https://github.com/ethanh2003/SureCharge',
                description:
                    'Created a Python-based point of sale system for efficient sales tracking, user management, and payroll functions. Employ cutting-edge technologies to create an intuitive interface, streamlining sales processes and enhancing customer experience. Enacted comprehensive reporting functionality for insightful sales reports aiding decision-making.',
            },
        ],
        workExperience: [
            {
                position: 'Café Manager',
                company: 'Northwood Ravin',
                date: 'January 2023 - Present',
                location: 'Charlotte, NC',
                sep:"-----------------",
            },
            {
                position: 'Server/Key Holder',
                company: 'T.G.I Fridays - Concord, NC',
                date: 'September 2021 to February 2023',
            },
        ],
        contact: {
            email: 'echerring.ech@gmail.com',
            phone: '910-249-2244',
            github: 'https://github.com/ethanh2003',
            linkedin: 'https://www.linkedin.com/in/ethan-herring/'
        },
    };

    return (
        <div className="resume-container">
            <header className="header">
                <h1 className="name">Ethan Herring</h1>
            </header>
            <section className="section">
                <h2>Contact Info</h2>
                <div className="contact-info">
                    <p className="contact-item">
                        Email: <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
                    </p>
                    <p className="contact-item">Phone: {resumeData.contact.phone}</p>
                    <p className="contact-item">
                        GitHub: <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">{resumeData.contact.github}</a>
                    </p>
                    <p className="contact-item">
                        LinkedIn: <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">{resumeData.contact.linkedin}</a>
                    </p>
                </div>
            </section>
            <section className="section">
                <h2>Education</h2>
                {resumeData.education.map((edu, index) => (
                    <div className="education" key={index}>
                        <h3 className="degree">{edu.degree}</h3>
                        <p className="school">{edu.school}</p>
                        <p className="location">{edu.location}</p>
                        <p className="date">{edu.date}</p>
                    </div>
                ))}
            </section>

            <section className="section">
                <h2>About Me</h2>
                <p className="about-me">{resumeData.aboutMe}</p>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <ul className="skills">
                    {resumeData.skills.map((skill, index) => (
                        <li className="skill" key={index}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section">
                <h2>Projects</h2>
                {resumeData.projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3 className="project-name">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.name}
                            </a>
                        </h3>
                        <p className="project-date">{project.date}</p>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </section>

            <section className="section">
                <h2>Work Experience</h2>
                {resumeData.workExperience.map((exp, index) => (
                    <div className="work-experience" key={index}>
                        <h3 className="position">{exp.position}</h3>
                        <p className="company">{exp.company}</p>
                        <p className="date">{exp.date}</p>
                        <p className="location">{exp.location}</p>
                    </div>
                ))}
            </section>



            <footer className="footer">
                &copy; {new Date().getFullYear()} Ethan Herring
                Coded using ReactJS
            </footer>
        </div>
    );
};

export default Resume;