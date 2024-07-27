import React from 'react';

export const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "Description of project one",
      link: "https://github.com/yourusername/project-one"
    },
    {
      title: "Project Two",
      description: "Description of project two",
      link: "https://github.com/yourusername/project-two"
    }
  ];

  return (
    <section id="projects" className="py-10">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(project => (
          <div key={project.title} className="bg-gray-100 p-4 rounded">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};
