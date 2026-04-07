import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

function PageIntro({
  eyebrow,
  title,
  intro,
  note,
  noteTitle = 'Story note',
  actions = [],
  stats = [],
}) {
  const copyColumnClass = note ? 'col-lg-8' : 'col-lg-12';

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="page-hero paper-card"
    >
      <div className="row g-4 align-items-start">
        <div className={copyColumnClass}>
          <motion.p variants={rise} className="eyebrow mb-3">{eyebrow}</motion.p>
          <motion.h1 variants={rise} className="page-title">{title}</motion.h1>
          <motion.p variants={rise} className="page-intro mb-0">{intro}</motion.p>

          {actions.length > 0 ? (
            <motion.div variants={rise} className="hero-actions">
              {actions.map((action) => (
                <Link
                  key={`${action.to}-${action.label}`}
                  to={action.to}
                  className={action.variant === 'secondary' ? 'secondary-link-button' : 'primary-link-button'}
                >
                  {action.label}
                </Link>
              ))}
            </motion.div>
          ) : null}

          {stats.length > 0 ? (
            <motion.div variants={rise} className="hero-stat-grid" aria-label="Page highlights">
              {stats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`} className="hero-stat-card">
                  <span className="hero-stat-value">
                    {stat.animate ? <AnimatedCounter value={stat.value} /> : stat.value}
                  </span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          ) : null}
        </div>

        {note ? (
          <motion.div variants={rise} className="col-lg-4">
            <aside className="hero-note h-100">
              <p className="hero-note-title mb-2">{noteTitle}</p>
              <p className="hero-note-body">{note}</p>
            </aside>
          </motion.div>
        ) : null}
      </div>
    </motion.section>
  );
}

export default PageIntro;
