import styles from './CTA.module.css';

type Contact = {
  label: string;
  href: string;
  primary: boolean;
};

export default function CTA() {
  const email = process.env.CONTACT_EMAIL;
  const phoneDigits = process.env.CONTACT_PHONE_DIGITS;

  // Fail loud in dev if env is missing — never ship a broken contact section
  if (!email || !phoneDigits) {
    throw new Error(
      'Missing CONTACT_EMAIL or CONTACT_PHONE_DIGITS. Copy .env.example to .env.local and fill in real values.'
    );
  }

  const contacts: Contact[] = [
    {
      label: email,
      href: `mailto:${email}?subject=${encodeURIComponent(
        'Project inquiry — Tifex'
      )}`,
      primary: true,
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/${phoneDigits}`,
      primary: false,
    },
    {
      label: 'Telegram',
      href: `https://t.me/+${phoneDigits}`,
      primary: false,
    },
  ];

  return (
    <section id="contact" className={styles.wrap}>
      <div className="container">
        <div className={styles.inner}>
          <p className="eyebrow">Let&apos;s build</p>
          <h2 className="display" style={{ marginTop: '1.25rem' }}>
            Have something <em>worth</em> building?
          </h2>
          <p className="lede" style={{ marginTop: '1.5rem' }}>
            Email us, or send a message on WhatsApp or Telegram — we reply within 48 hours.
          </p>

          <div className={styles.actions}>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={c.primary ? 'btn btn-accent' : 'btn'}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}