import React from 'react';
import "./resume.css"

const Resume = () => {
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
    },
  };

    return (

        <div className="resume-container">
            <h1>Resume</h1>
            <title>Ethan C Herring</title>
            <section className="section">
                <h2>Education</h2>
                {resumeData.education.map((edu, index) => (
                    <div key={index}>
                        <p>Degree: {edu.degree}</p>
                        <p>School: {edu.school}</p>
                        <p>Location: {edu.location}</p>
                        <p>Date: {edu.date}</p>
                    </div>
                ))}
            </section>

            <section className="section">
                <h2>About Me</h2>
                <p className="about-me">{resumeData.aboutMe}</p>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <div className="skills">
                    <ul>
                        {resumeData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="section">
                <h2>Projects</h2>
                {resumeData.projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3><a href={project.link}>{project.name}</a></h3>
                        <p>Date: {project.date}</p>
                        <p>{project.description}</p>
                    </div>
                ))}
            </section>

            <section className="section">
                <h2>Work Experience</h2>
                {resumeData.workExperience.map((exp, index) => (
                    <div key={index}>
                        <p>Position: {exp.position}</p>
                        <p>Company: {exp.company}</p>
                        <p>Date: {exp.date}</p>
                        <p>Location: {exp.location}</p>
                        <p>{exp.sep}</p>
                    </div>
                ))}
            </section>

            <section className="section">
                <h2>Contact Info</h2>
                <div className="contact-info">
                    <p>Email: {resumeData.contact.email}</p>
                    <p>Phone: {resumeData.contact.phone}</p>
                    <p>
                        GitHub: <a href={resumeData.contact.github}>{resumeData.contact.github}</a>
                    </p>
                </div>
            </section>

            <footer className="footer">
                © {new Date().getFullYear()} Ethan Herring
            </footer>
        </div>
    );
};

export default Resume;