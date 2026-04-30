import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Glory-Days233/repos?sort=updated');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        
        // Format data to match ProjectCard props
        const formattedProjects = data.map(repo => ({
          title: repo.name.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
          description: repo.description || 'No description provided for this repository.',
          tags: repo.language ? [repo.language] : ['GitHub Project'],
          imageUrl: '',
          liveUrl: repo.homepage || ''
        }));
        
        // Exclude forks if desired (optional), currently showing all.
        setProjects(formattedProjects);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="portfolio page-container animate-fade-in">
      <div className="page-header section-dark text-center">
        <div className="container">
          <h1>Our Work</h1>
          <p>A live selection of my latest projects and repositories fetched directly from GitHub.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <p>Loading projects from GitHub...</p>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', color: '#e74c3c', padding: '4rem 0' }}>
              <p>Error loading projects: {error}</p>
            </div>
          ) : projects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <p>No public repositories found on this GitHub account.</p>
            </div>
          ) : (
            <div className="grid grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="animate-slide-up" style={{animationDelay: `${(index % 6) * 0.1}s`}}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
