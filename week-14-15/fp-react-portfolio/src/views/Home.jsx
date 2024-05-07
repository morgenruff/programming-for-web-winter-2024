import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import portfolioData from '../assets/portfolio-data.json';
import './Home.css';
export function Home() {
  const [projects, setProjects] = useState(portfolioData);
  return (
    <div className='page'>
      <div className='projectCollection'>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              {...project}
            />
          )
        })}
      </div>
    </div>
  )
}