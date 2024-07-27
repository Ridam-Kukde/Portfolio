import React from 'react';

export const Skills = () => {
  const skills = ["React", "MUI", "Tailwind CSS", "Redux", "Spline"];

  return (
    <section id="skills" className="py-10">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap">
        {skills.map(skill => (
          <div key={skill} className="bg-gray-200 p-4 m-2 rounded">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};
