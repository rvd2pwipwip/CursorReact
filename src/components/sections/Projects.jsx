import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  // Sample projects data - in a real app, this would come from a database or API
  const [projects] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js',
      image: 'placeholder',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work and skills',
      image: 'placeholder',
      tags: ['React', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality',
      image: 'placeholder',
      tags: ['React', 'Redux', 'Firebase'],
      link: '#'
    }
  ]);

  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__title">My Projects</h2>
        <div className="projects__grid">
          {projects.map(project => (
            <article key={project.id} className="projects__card">
              <div className="projects__image">
                {project.image === 'placeholder' ? (
                  <div className="projects__image-placeholder">
                    Project Image
                  </div>
                ) : (
                  <img src={project.image} alt={project.title} />
                )}
              </div>
              <div className="projects__content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                <div className="projects__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="projects__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="projects__link">
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 