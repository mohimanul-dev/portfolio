'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Simulated send — replace with your preferred email service
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Let&apos;s work together</p>
        <h2 className="section-title">
          Get in<br />
          <span className="gradient-text">Touch</span>
        </h2>

        <div className={styles.layout}>
          {/* Left: Info */}
          <div className={styles.info}>
            <p className={styles.tagline}>
              Open to freelance projects, full-time roles, and remote opportunities.
              Let&apos;s build something great together.
            </p>

            <div className={styles.contactList}>
              <a href="mailto:mohimanul.dev@gmail.com" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>mohimanul.dev@gmail.com</span>
                </div>
              </a>

              <a href="https://linkedin.com/mohimanul-dev" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactLabel}>LinkedIn</span>
                  <span className={styles.contactValue}>linkedin.com/mohimanul-dev</span>
                </div>
              </a>

              <a href="https://github.com/mohimanul-dev" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactLabel}>GitHub</span>
                  <span className={styles.contactValue}>github.com/mohimanul-dev</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`glass-card ${styles.formCard}`}>
            {status === 'sent' ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Name</label>
                    <input
                      className={styles.input}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input
                      className={styles.input}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Subject</label>
                  <select className={styles.input} name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">Select a topic</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="fulltime">Full-time Role</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="react">React / Next.js Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                  />
                </div>

                <button
                  className={styles.submitBtn}
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span className={styles.spinner} />
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
