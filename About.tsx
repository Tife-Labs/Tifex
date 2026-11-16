import styles from './About.module.css';

const founders = [
  {
    name: 'Tife Adejuwon',
    role: 'Founder · Engineering & Vision',
    bio: 'Leads the technical direction of Tifex — architecting systems, tools, and automations that ship and scale.',
  },
  {
    name: 'Oderinde Isaiah Oluwasegun',
    role: 'Co-founder · Product & Delivery',
    bio: 'Drives product strategy and delivery — translating client ambition into shipped software without friction.',
  },
] as const;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">The studio</p>
          <h2 className="h2" style={{ marginTop: '1rem' }}>
            Small team. <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Serious</em> output.
          </h2>
          <p className="lede" style={{ marginTop: '1.5rem' }}>
            Tifex by Tifelabz is a creative technology studio built by two engineers
            with one rule: ship things that actually work. We build software, tools,
            and automation engines for teams that can&apos;t afford to slow down.
          </p>
        </div>

        <div className={styles.founders}>
          {founders.map((f) => (
            <article key={f.name} className={styles.founder}>
              <div className={styles.avatar} aria-hidden="true">
                {f.name
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <h3 className={styles.name}>{f.name}</h3>
              <p className={styles.role}>{f.role}</p>
              <p className={styles.bio}>{f.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}