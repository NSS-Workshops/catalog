import React from 'react';
import { BookOpen, Bot, Code, Server, Users, Home, Database } from 'lucide-react';

const Navigation = ({ currentPath = '/' }) => {
  const navItems = [
    { path: '/catalog/', label: 'Home', icon: Home },
    { path: '/catalog/ai-engineering', label: 'AI Engineering', icon: Bot },
    { path: '/catalog/fullstack-development', label: 'Full-Stack Development', icon: Code },
    { path: '/catalog/devops-infrastructure', label: 'DevOps & Infrastructure', icon: Server },
    { path: '/catalog/data-engineering', label: 'Data Engineering', icon: Database },
    { path: '/catalog/technical-leadership', label: 'Technical Leadership', icon: Users }
  ];

  return (
    <nav style={{
      backgroundColor: 'white',
      borderBottom: '1px solid var(--gray-6)',
      padding: '1rem 0',
      marginBottom: '1.5rem'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}>
          <a
            href="/catalog/"
            style={{
              textDecoration: 'none',
              color: 'var(--gray-12)',
              fontSize: '1.5rem',
              fontWeight: 700
            }}
          >
            Workshop Catalog
          </a>
        </div>

        <div className="nav-container">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;

            return (
              <a
                key={item.path}
                href={item.path}
                className={`btn ${isActive ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}
              >
                <Icon size={16} />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;