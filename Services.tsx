import styles from './Services.module.css';

const services = [
  {
    num: '01',
    title: 'Software Engineering',
    body: 'Production-grade systems built with TypeScript, Next.js, Node, and modern architecture — from zero to shipped.',
  },
  {
    num: '02',
    title: 'Web Development',
    body: 'High-performance websites and web apps. Accessibility-first, SEO-ready, tuned for speed and conversion.',
  },
  {
    num: '03',
    title: 'Developer Tools',
    body: 'Internal tooling, CLIs, SDKs, and developer platforms that make your engineering team move faster.',
  },
  {
    num: '04',
    title: 'Automation Engines',
    body: 'Custom automations that eliminate repetitive workflows — from data pipelines to AI-driven agents.',
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">What we do</p>
          <h2 className="h2" style={{ marginTop: '1rem' }}>
            Capabilities
          </h2>
        </header>

        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.num} className={styles.card}>
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}