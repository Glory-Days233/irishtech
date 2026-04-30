import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, imageUrl, sourceUrl, liveUrl }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="project-image" />
        ) : (
          <div className="project-image-placeholder">
            <span>Project Image</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags && tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="project-link">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noreferrer" className="project-link">
              <FaGithub size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
