import React, { useState } from 'react';
import { BookOpen, Users, Bot, Code, Server, Award, Clock, ChevronDown, ChevronRight } from 'lucide-react';
import { workshops } from '../data/workshops';
import { tracks } from '../data/tracks';

const WorkshopCatalog = () => {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const filteredWorkshops = selectedTrack === 'all'
    ? workshops
    : workshops.filter(cat => cat.tracks.includes(selectedTrack));

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const getWorkshopUrl = (slug) => `/workshops/${slug}`;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)', padding: '1.5rem' }}>
      <div className="container">
        {/* Header */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h1>Professional Development Workshop Catalog</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            Choose your specialization path and advance your software development career
          </p>

          {/* Track Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {Object.entries(tracks).map(([key, track]) => {
              const Icon = track.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedTrack(key)}
                  className={`btn ${selectedTrack === key ? 'btn-secondary active' : 'btn-secondary'} ${track.color}`}
                  style={{
                    backgroundColor: selectedTrack === key ? 'var(--blue-9)' : undefined,
                    color: selectedTrack === key ? 'white' : undefined
                  }}
                >
                  <Icon size={18} />
                  {track.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Learning Paths Overview */}
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h2>Recommended Learning Paths</h2>
          <div className="grid grid-3">
            <div className="learning-path-card path-ai">
              <Bot color="var(--violet-9)" style={{ marginBottom: '0.5rem' }} size={24} />
              <h3>AI Engineering</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Build intelligent, AI-powered applications</p>
              <ul className="learning-path-steps">
                <li>→ AI Fundamentals (2-3 months)</li>
                <li>→ Workflow Automation (1-2 months)</li>
                <li>→ Advanced AI Systems (ongoing)</li>
              </ul>
            </div>
            <div className="learning-path-card path-fullstack">
              <Code color="var(--blue-9)" style={{ marginBottom: '0.5rem' }} size={24} />
              <h3>Full-Stack Development</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Master frontend and backend technologies</p>
              <ul className="learning-path-steps">
                <li>→ Modern JavaScript & React (2-3 months)</li>
                <li>→ Backend & APIs (2 months)</li>
                <li>→ Architecture & Performance (ongoing)</li>
              </ul>
            </div>
            <div className="learning-path-card path-devops">
              <Server color="var(--orange-9)" style={{ marginBottom: '0.5rem' }} size={24} />
              <h3>DevOps & Infrastructure</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Deploy and maintain production systems</p>
              <ul className="learning-path-steps">
                <li>→ DevOps Fundamentals (1-2 months)</li>
                <li>→ Containers & Cloud (2-3 months)</li>
                <li>→ SRE & Optimization (ongoing)</li>
              </ul>
            </div>
            <div className="learning-path-card path-leadership">
              <Users color="var(--purple-9)" style={{ marginBottom: '0.5rem' }} size={24} />
              <h3>Technical Leadership</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Lead teams and drive technical vision</p>
              <ul className="learning-path-steps">
                <li>→ Leadership Foundations (1 month)</li>
                <li>→ System Design & Architecture (ongoing)</li>
                <li>→ Strategic Leadership (ongoing)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Workshop Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredWorkshops.map((category, catIndex) => (
            <div key={catIndex} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <button
                onClick={() => toggleCategory(catIndex)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--gray-2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>{category.category}</h3>
                  <p style={{ fontSize: '0.875rem', margin: 0 }}>{category.description}</p>
                </div>
                {expandedCategory === catIndex ? (
                  <ChevronDown color="var(--gray-9)" size={24} />
                ) : (
                  <ChevronRight color="var(--gray-9)" size={24} />
                )}
              </button>

              {expandedCategory === catIndex && (
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                  {category.workshops
                    .filter(w => selectedTrack === 'all' || w.tracks.includes(selectedTrack))
                    .map((workshop, wIndex) => (
                    <div key={wIndex} className="workshop-card">
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ marginBottom: '0.25rem' }}>
                            <a
                              href={getWorkshopUrl(workshop.slug)}
                              style={{
                                textDecoration: 'none',
                                color: 'var(--blue-11)',
                                fontWeight: 600
                              }}
                            >
                              {workshop.title}
                            </a>
                          </h4>
                          <p style={{ margin: '0.25rem 0' }}>{workshop.description}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                          <span className="duration-badge">
                            <Clock size={14} />
                            {workshop.duration}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-2" style={{ marginBottom: '0.75rem' }}>
                        <div>
                          <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>Learning Outcomes:</p>
                          <ul className="workshop-outcomes">
                            {workshop.outcomes.map((outcome, i) => (
                              <li key={i}>{outcome}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>Prerequisites:</p>
                          <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>{workshop.prerequisites}</p>
                          <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>Level:</p>
                          <span className={`level-${workshop.level.toLowerCase()}`}>
                            {workshop.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Workshop Delivery Options</h3>
          <div className="grid grid-3" style={{ fontSize: '0.875rem' }}>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Remote via Zoom</p>
              <p>Interactive online sessions with hands-on labs and peer collaboration</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Evening Part-Time</p>
              <p>2-3 evenings per week for working professionals</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Weekend Bootcamps</p>
              <p>Concentrated learning over weekends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCatalog;