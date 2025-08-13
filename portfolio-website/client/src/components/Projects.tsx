import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'This is a brief description of Project One.',
        link: 'https://github.com/user/project-one'
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of Project Two.',
        link: 'https://github.com/user/project-two'
    },
    {
        title: 'Project Three',
        description: 'This is a brief description of Project Three.',
        link: 'https://github.com/user/project-three'
    }
];

const Projects: React.FC = () => {
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;