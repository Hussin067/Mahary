import React from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, icon: Icon }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:-translate-y-1 group flex flex-col h-full">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
          {Icon ? <Icon size={24} /> : <FolderGit2 size={24} />}
        </div>
        <div className="flex gap-2">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:-translate-y-0.5 active:scale-95">
              <Github size={18} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:-translate-y-0.5 active:scale-95">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-indigo-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border transition-colors duration-300 group-hover:bg-background"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
};

export default ProjectCard;