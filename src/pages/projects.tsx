import Navbar from '../components/Navbar';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, details, imageUrl, projectUrl }: { title: string, details: string, imageUrl: string, projectUrl: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={projectUrl}>
      <div
        className="project-card relative bg-blue-200 rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'glitch' : ''}`}
          width={500}
          height={500}
        />
        <div className={`absolute inset-0 bg-blue-200 p-4 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg">{details}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen p-4 text-black">
      <Navbar />
      <div className="container mx-auto text-center" style={{ marginTop: '12vh' }}>
        <h1 className="text-4xl font-bold mt-20 mb-8">Last projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProjectCard 
            title="Eventify - Event Management Platform" 
            details="42 Roma Luiss X Leonardo S.P.A. - Progetto di stage" 
            imageUrl="/path/to/image1.jpg"  
            projectUrl='/projects/eventify' 
          />
          <ProjectCard 
            title="Trascendence - Game Platform" 
            details="Specifiche del progetto 2" 
            imageUrl="/path/to/image2.jpg" 
            projectUrl='/'
          />
          <ProjectCard 
            title="Nicejourney Agency" 
            details="Specifiche del progetto 3" 
            imageUrl="/path/to/image3.jpg" 
            projectUrl='/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;