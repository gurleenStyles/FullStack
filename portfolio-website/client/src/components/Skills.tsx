import React from 'react';

const Skills: React.FC = () => {
    const skills = [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'CSS',
        'HTML',
        'Git',
        'MongoDB',
        'Express',
        'GraphQL'
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;