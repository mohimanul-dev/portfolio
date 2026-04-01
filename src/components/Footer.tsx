import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Md. Mohimanul Islam. Built with Next.js.
        </p>
        <p className={styles.mono}>Gazipur, Bangladesh 🇧🇩</p>
      </div>
    </footer>
  );
}
