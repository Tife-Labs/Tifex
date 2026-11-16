import styles from './Work.module.css';

const projects = [
  {
    tag: 'Platform',
    title: 'Atlas Commerce',
    body: 'A headless commerce engine for a luxury retailer — sub-second page loads, 40% conversion lift.',
    stack: 'Next.js · TypeScript · Stripe',
  },
  {
    tag: 'Automation',
    title: 'Flowforge',
    body: 'An internal automation engine that replaced 30+ manual workflows for a fintech operations team.',
    stack: 'Node · Postgres · Queue',
  },
  {
    tag: 'Tooling',
    title: 'Devscope CLI',
    body: 'A developer CLI that unifies deploy, lint, and observability across 12 services in one command.',
    stack: 'TypeScript · CLI · DX',
  },
] as const;

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <header className={styles.header}>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="h2" style={{ marginTop: '1rem' }}>
              Built with intent
            </h2>
          </div>
          <p className={styles.note}>
            A snapshot of recent builds — from commerce platforms to internal tools.
          </p>
        </header>

        <div className={styles.list}>
          {projects.map((p) => (
            <article key={p.title} className={styles.project}>
              <div className={styles.meta}>
                <span className={styles.tag}>{p.tag}</span>
                <span className={styles.stack}>{p.stack}</span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.body}>{p.body}</p>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}