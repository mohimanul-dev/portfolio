import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#6c63ff',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: '#00d4ff',
    skills: ['Node.js', 'Express.js', 'REST API', 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    category: 'WordPress',
    color: '#ff6b9d',
    skills: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Elementor', 'ACF', 'WPBakery'],
  },
  {
    category: 'Tools & More',
    color: '#4ade80',
    skills: ['Git / GitHub', 'SEO', 'Digital Marketing', 'Graphic Design', 'Figma', 'Vercel / Netlify'],
  },
];

const platforms = [
  { name: 'Fiverr', icon: '🌟' },
  { name: 'Upwork', icon: '💼' },
  { name: 'Freelancer', icon: '🚀' },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I bring</p>
        <h2 className="section-title">
          Skills &<br />
          <span className="gradient-text">Tech Stack</span>
        </h2>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={`glass-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div
                  className={styles.categoryDot}
                  style={{ background: group.color, boxShadow: `0 0 12px ${group.color}60` }}
                />
                <h3 className={styles.category}>{group.category}</h3>
              </div>
              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.skillBullet} style={{ background: group.color }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Freelance platforms */}
        <div className={styles.platforms}>
          <p className={styles.platformLabel}>Active on</p>
          <div className={styles.platformList}>
            {platforms.map((p) => (
              <div key={p.name} className={styles.platformBadge}>
                <span>{p.icon}</span>
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
