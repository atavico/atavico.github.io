import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ title, details, imageUrl, projectUrl, bgColor }: { title: string, details: string, imageUrl?: string, projectUrl: string, bgColor?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={projectUrl}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="project-card relative rounded-lg overflow-hidden h-full flex flex-col"
        style={{ backgroundColor: bgColor }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'glitch' : ''}`}
            width={500}
            height={500}
          />
        ) : (
          <div className={`absolute inset-0 w-full h-full transition-transform duration-500 ${isHovered ? 'glitch' : ''}`} style={{ backgroundColor: bgColor }}></div>
        )}
        <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${isHovered ? 'opacity-50' : 'opacity-0'}`}></div>
        <div className={`absolute inset-0 p-4 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg">{details}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;