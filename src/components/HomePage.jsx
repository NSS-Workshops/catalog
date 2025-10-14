import React from 'react';
import { BookOpen, Bot, Code, Server, Users, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const tracks = [
    {
      name: "Foundation Skills",
      path: "/catalog/foundation-skills",
      icon: BookOpen,
      color: "var(--green-9)",
      description: "Build core competencies for modern software development",
      workshops: 3,
      duration: "4-6 weeks"
    },
    {
      name: "AI Engineering",
      path: "/catalog/ai-engineering",
      icon: Bot,
      color: "var(--violet-9)",
      description: "Build and deploy intelligent applications with AI",
      workshops: 13,
      duration: "2-6 months"
    },
    {
      name: "Full-Stack Development",
      path: "/catalog/fullstack-development",
      icon: Code,
      color: "var(--blue-9)",
      description: "Build complete web applications from frontend to backend",
      workshops: 8,
      duration: "3-6 months"
    },
    {
      name: "DevOps & Infrastructure",
      path: "/catalog/devops-infrastructure",
      icon: Server,
      color: "var(--orange-9)",
      description: "Deploy, monitor, and maintain production systems",
      workshops: 11,
      duration: "2-4 months"
    },
    {
      name: "Technical Leadership",
      path: "/catalog/technical-leadership",
      icon: Users,
      color: "var(--purple-9)",
      description: "Lead teams, influence decisions, and drive technical excellence",
      workshops: 7,
      duration: "Ongoing"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)', padding: '1.5rem' }}>
      <div className="container">
        {/* Hero Section */}
        <div className="card" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Professional Development Workshop Catalog
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--gray-11)' }}>
            Choose your specialization path and advance your software development career
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--gray-10)' }}>
            Navigate through our comprehensive workshop tracks designed for developers at every stage of their career
          </p>
        </div>

        {/* Learning Tracks */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Learning Tracks</h2>
          <div className="grid grid-2" style={{ gap: '1.5rem' }}>
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.path}
                  className="card"
                  style={{
                    padding: '1.5rem',
                    border: '2px solid var(--gray-6)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = track.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gray-6)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => window.location.href = track.path}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <Icon size={32} color={track.color} style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginBottom: '0.5rem', color: track.color }}>
                        {track.name}
                      </h3>
                      <p style={{ fontSize: '0.875rem', marginBottom: '1rem', color: 'var(--gray-11)' }}>
                        {track.description}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-10)' }}>
                          <div>{track.workshops} workshops</div>
                          <div>Duration: {track.duration}</div>
                        </div>
                        <a
                          href={track.path}
                          className="btn btn-primary"
                          style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Explore
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Paths Overview */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Recommended Learning Paths</h2>
          <div className="grid grid-3">
            <div className="learning-path-card path-beginner">
              <BookOpen color="var(--green-9)" style={{ marginBottom: '0.5rem' }} size={24} />
              <h3>Career Starter Path</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>For those entering software development</p>
              <ul className="learning-path-steps">
                <li>→ Foundation Skills (4-6 weeks)</li>
                <li>→ Choose: AI, Full-Stack, or DevOps</li>
                <li>→ Specialize further (ongoing)</li>
              </ul>
            </div>
            <div className="learning-path-card path-ai">
              <Bot color="var(--violet-9)" style={{ marginBottom: '0.5rem' }} size={24} />
              <h3>AI Specialist Path</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Build intelligent, AI-powered applications</p>
              <ul className="learning-path-steps">
                <li>→ AI Fundamentals (2-3 months)</li>
                <li>→ Workflow Automation (1-2 months)</li>
                <li>→ Advanced AI Systems (ongoing)</li>
              </ul>
            </div>
            <div className="learning-path-card path-leadership">
              <Users color="var(--purple-9)" style={{ marginBottom: '0.5rem' }} size={24} />
              <h3>Leadership Path</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>Lead teams and drive technical vision</p>
              <ul className="learning-path-steps">
                <li>→ Technical expertise in any track</li>
                <li>→ Leadership Foundations (1 month)</li>
                <li>→ Strategic Leadership (ongoing)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Workshop Delivery Options */}
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Workshop Delivery Options</h3>
          <div className="grid grid-3" style={{ fontSize: '0.875rem' }}>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>In-Person Intensive</p>
              <p>Full-time cohorts with hands-on labs and peer collaboration</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Evening Part-Time</p>
              <p>2-3 evenings per week for working professionals</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Weekend Bootcamps</p>
              <p>Concentrated learning over weekends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;