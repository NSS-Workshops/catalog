import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronRight } from 'lucide-react';

const CategoryView = ({ category, showHeader = true }) => {
  const [expandedWorkshops, setExpandedWorkshops] = useState(new Set());

  const toggleWorkshop = (index) => {
    const newExpanded = new Set(expandedWorkshops);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedWorkshops(newExpanded);
  };

  const getWorkshopUrl = (slug) => `/catalog/workshops/${slug}`;

  return (
    <div>
      {showHeader && (
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h1>{category.category}</h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '0' }}>
            {category.description}
          </p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {category.workshops.map((workshop, index) => (
          <div key={index} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <button
              onClick={() => toggleWorkshop(index)}
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
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0 }}>
                    <a
                      href={getWorkshopUrl(workshop.slug)}
                      style={{
                        textDecoration: 'none',
                        color: 'var(--blue-11)',
                        fontWeight: 600
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {workshop.title}
                    </a>
                  </h3>
                  <span className="duration-badge">
                    <Clock size={14} />
                    {workshop.duration}
                  </span>
                  <span className={`level-${workshop.level.toLowerCase()}`}>
                    {workshop.level}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--gray-11)' }}>
                  {workshop.description}
                </p>
              </div>
              {expandedWorkshops.has(index) ? (
                <ChevronDown color="var(--gray-9)" size={24} />
              ) : (
                <ChevronRight color="var(--gray-9)" size={24} />
              )}
            </button>

            {expandedWorkshops.has(index) && (
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <div className="grid grid-2" style={{ marginBottom: '0.75rem' }}>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Learning Outcomes:</p>
                    <ul className="workshop-outcomes">
                      {workshop.outcomes.map((outcome, i) => (
                        <li key={i}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Prerequisites:</p>
                    <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>{workshop.prerequisites}</p>

                    <a
                      href={getWorkshopUrl(workshop.slug)}
                      className="btn btn-primary"
                      style={{ textDecoration: 'none' }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;