import styles from './Marquee.module.css';

const items = [
  'Software Engineering',
  'Web Development',
  'Developer Tools',
  'Automation Engines',
  'Product Design',
  'Systems Architecture',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}