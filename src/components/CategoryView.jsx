import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronRight, Users, BookOpen, Target } from 'lucide-react';

const CategoryView = ({ category, showHeader = true }) => {
  const [expandedWorkshops, setExpandedWorkshops] = useState(new Set());
  const [selectedLevel, setSelectedLevel] = useState('all');

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

  // Group workshops by level for better organization
  const workshopsByLevel = category.workshops.reduce((acc, workshop, index) => {
    if (!acc[workshop.level]) {
      acc[workshop.level] = [];
    }
    acc[workshop.level].push({ ...workshop, originalIndex: index });
    return acc;
  }, {});

  const levelOrder = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const filteredLevels = selectedLevel === 'all'
    ? levelOrder
    : levelOrder.filter(level => level.toLowerCase() === selectedLevel);

  const getLevelIcon = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner': return <Users size={16} />;
      case 'intermediate': return <BookOpen size={16} />;
      case 'advanced': return <Target size={16} />;
      case 'expert': return <Target size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  const getLevelDescription = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'Foundation skills and core concepts';
      case 'intermediate': return 'Practical application and real-world projects';
      case 'advanced': return 'Complex systems and specialized techniques';
      case 'expert': return 'Industry leadership and architectural mastery';
      default: return '';
    }
  };

  return (
    <div className="category-view">
      {showHeader && (
        <div className="category-header">
          <div className="category-hero">
            <h1>{category.category}</h1>
            <p className="category-description">{category.description}</p>
            <div className="category-stats">
              <span className="stat-item">
                <BookOpen size={16} />
                {category.workshops.length} Workshops
              </span>
              <span className="stat-item">
                <Clock size={16} />
                {category.workshops.reduce((total, w) => total + parseInt(w.duration), 0)} Days Total
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Level Filter */}
      <div className="level-filter">
        <button
          className={`filter-btn ${selectedLevel === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedLevel('all')}
        >
          All Levels
        </button>
        {levelOrder.map(level => (
          <button
            key={level}
            className={`filter-btn ${selectedLevel === level.toLowerCase() ? 'active' : ''}`}
            onClick={() => setSelectedLevel(level.toLowerCase())}
          >
            {getLevelIcon(level)}
            {level}
          </button>
        ))}
      </div>

      {/* Workshop Grid by Level */}
      <div className="workshops-container">
        {filteredLevels.map(level => {
          const workshops = workshopsByLevel[level] || [];
          if (workshops.length === 0) return null;

          return (
            <div key={level} className="level-section">
              <div className="level-header">
                <div className="level-title">
                  {getLevelIcon(level)}
                  <h2>{level} Level</h2>
                  <span className="workshop-count">({workshops.length} workshops)</span>
                </div>
                <p className="level-description">{getLevelDescription(level)}</p>
              </div>

              <div className={`workshops-grid level-${level.toLowerCase()}`}>
                {workshops.map((workshop) => (
                  <div
                    key={workshop.originalIndex}
                    className={`workshop-card modern level-${workshop.level.toLowerCase()}`}
                  >
                    <div className="workshop-header">
                      <div className="workshop-meta">
                        <span className="duration-badge">
                          <Clock size={12} />
                          {workshop.duration}
                        </span>
                        <span className={`level-badge level-${workshop.level.toLowerCase()}`}>
                          {workshop.level}
                        </span>
                      </div>

                      <h3 className="workshop-title">
                        <a
                          href={getWorkshopUrl(workshop.slug)}
                          className="workshop-link"
                        >
                          {workshop.title}
                        </a>
                      </h3>

                      <p className="workshop-description">{workshop.description}</p>
                    </div>

                    <div className="workshop-actions">
                      <button
                        onClick={() => toggleWorkshop(workshop.originalIndex)}
                        className="expand-btn"
                      >
                        {expandedWorkshops.has(workshop.originalIndex) ? (
                          <>
                            <ChevronDown size={16} />
                            Less Details
                          </>
                        ) : (
                          <>
                            <ChevronRight size={16} />
                            More Details
                          </>
                        )}
                      </button>

                      <a
                        href={getWorkshopUrl(workshop.slug)}
                        className="btn btn-primary workshop-cta"
                      >
                        View Workshop
                      </a>
                    </div>

                    {expandedWorkshops.has(workshop.originalIndex) && (
                      <div className="workshop-details">
                        <div className="details-grid">
                          <div className="outcomes-section">
                            <h4>Complete Learning Outcomes</h4>
                            <ul className="workshop-outcomes">
                              {workshop.outcomes.map((outcome, i) => (
                                <li key={i}>{outcome}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="info-section">
                            <div className="info-item">
                              <strong>Duration:</strong> {workshop.duration}
                            </div>
                            <div className="info-item">
                              <strong>Level:</strong> {workshop.level}
                            </div>
                            <div className="info-item">
                              <strong>Prerequisites:</strong> {workshop.prerequisites}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryView;