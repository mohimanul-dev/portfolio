import styles from './Projects.module.css';

const projects = [
  {
    title: 'AI-Powered SEO Toolkit',
    description: 'A comprehensive single-page web app integrating the Claude API to automate keyword research, competitor analysis, meta tag generation, and structured data creation.',
    tags: ['Next.js', 'TypeScript', 'Claude API', 'Tailwind CSS'],
    accent: '#6c63ff',
    icon: '🤖',
    link: '#',
  },
  {
    title: 'MERN E-Commerce Platform',
    description: 'Full-featured e-commerce application with authentication, product management, shopping cart, and payment integration. Deployed with CI/CD on Vercel.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    accent: '#00d4ff',
    icon: '🛒',
    link: '#',
  },
  {
    title: 'Custom WooCommerce Theme',
    description: 'Bespoke WordPress theme built from scratch for a retail client — custom checkout flow, ACF-powered product pages, and WooCommerce deep customization.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'ACF'],
    accent: '#ff6b9d',
    icon: '🎨',
    link: '#',
  },
  {
    title: 'Next.js SaaS Dashboard',
    description: 'Multi-tenant SaaS admin dashboard with role-based access, real-time data, and a fully responsive glassmorphism UI. TypeScript throughout.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Recharts'],
    accent: '#4ade80',
    icon: '📊',
    link: '#',
  },
  {
    title: 'Digital Marketing Agency Site',
    description: 'Performance-first agency website with SEO-optimized architecture, Core Web Vitals tuning, and custom animations. Scored 98 on Lighthouse.',
    tags: ['Next.js', 'CSS Modules', 'SEO', 'Vercel'],
    accent: '#facc15',
    icon: '🚀',
    link: '#',
  },
  {
    title: 'Headless WordPress + Next.js',
    description: 'Decoupled CMS architecture using WordPress as a headless backend with GraphQL via WPGraphQL, and a Next.js front end for blazing-fast delivery.',
    tags: ['WordPress', 'Next.js', 'GraphQL', 'WPGraphQL'],
    accent: '#fb923c',
    icon: '⚡',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">What I&apos;ve built</p>
        <h2 className="section-title">
          Featured<br />
          <span className="gradient-text">Projects</span>
        </h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <a key={project.title} href={project.link} className={`glass-card ${styles.card}`}>
              <div className={styles.cardTop}>
                <div className={styles.icon} style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30` }}>
                  <span>{project.icon}</span>
                </div>
                <div className={styles.arrow}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className={styles.tag}
                    style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}0d` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>More projects on GitHub</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
