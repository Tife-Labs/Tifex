import styles from './Footer.module.css';

export default function Footer() {
  const email = process.env.CONTACT_EMAIL;
  const phoneDigits = process.env.CONTACT_PHONE_DIGITS;
  const phone = process.env.CONTACT_PHONE;

  if (!email || !phoneDigits || !phone) {
    console.warn(
      'Missing CONTACT_* env vars. Copy .env.example to .env.local and fill in real values.'
    );
  }

  const socials = [
    ...(email ? [{ label: 'Email', href: `mailto:${email}` }] : []),
    ...(phoneDigits
      ? [
          { label: 'WhatsApp', href: `https://wa.me/${phoneDigits}` },
          { label: 'Telegram', href: `https://t.me/+${phoneDigits}` },
        ]
      : []),
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              Tifex<span className={styles.dot}>.</span>
            </a>
            <p className={styles.tagline}>
              A creative technology studio by Tifelabz.
            </p>
            {(email || phone) && (
              <p className={styles.tagline} style={{ marginTop: '0.4rem' }}>
                {[email, phone].filter(Boolean).join(' · ')}
              </p>
            )}
          </div>

          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Tifex by Tifelabz. All rights reserved.</p>
          <p>Founded by Tife Adejuwon &amp; Oderinde Isaiah Oluwasegun.</p>
        </div>
      </div>
    </footer>
  );
}