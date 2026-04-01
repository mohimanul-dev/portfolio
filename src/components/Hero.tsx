import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={`container ${styles.inner}`}>

        {/* Left: Text */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for work
          </div>

          <h1 className={styles.name}>
            Md. Mohimanul
            <br />
            <span className="gradient-text">Islam</span>
          </h1>

          <p className={styles.role}>
            <span className={styles.rolePrefix}>Full Stack Developer</span>
            <span className={styles.roleStack}>MERN · Next.js · TypeScript · WordPress</span>
          </p>

          <p className={styles.bio}>
            Crafting high-performance web applications with 5+ years of freelancing
            experience. I build scalable, SEO-optimized, and visually polished digital
            products — from MERN stack apps to custom WordPress solutions.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>4</span>
              <span className={styles.statLabel}>Years at Comtech</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>View Projects</a>
            <a href="#contact" className={styles.btnGhost}>Get in Touch</a>
          </div>
        </div>

        {/* Right: Visual card */}
        <div className={styles.visual}>
          <div className={styles.avatarCard}>
            <div className={styles.avatarRing}>
              <div className={styles.avatarInner}>
                <Image
                  src="/portfolio/profile.jpg"
                  alt="Md. Mohimanul Islam"
                  width={114}
                  height={114}
                  className={styles.avatarPhoto}
                  priority
                />
              </div>
            </div>
            <div className={styles.techPills}>
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'WordPress', 'MongoDB'].map(t => (
                <span key={t} className={styles.pill}>{t}</span>
              ))}
            </div>
            <div className={styles.location}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Gazipur, Bangladesh
            </div>
          </div>

          {/* Floating badges */}
          <div className={`${styles.floatBadge} ${styles.floatBadge1}`}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            Clean Code
          </div>
          <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Fast Delivery
          </div>
          <div className={`${styles.floatBadge} ${styles.floatBadge3}`}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            SEO Ready
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
