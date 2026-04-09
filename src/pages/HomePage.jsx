import { motion } from 'framer-motion';
import { ArrowRight, Check, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import AchievementPanel from '../components/AchievementPanel';
import AnimatedCounter from '../components/AnimatedCounter';
import PageIntro from '../components/PageIntro';
import ProgressBar from '../components/ProgressBar';
import JourneyPath from '../components/JourneyPath';
import { coreQuestions, storyChapters, storyIntro } from '../data/siteData';
import { useProgress } from '../hooks/useProgress';

function HomePage() {
  const { visited, completed, scores, achievements, totalXP, reset } = useProgress();
  const totalCompleted = completed.length;

  return (
    <div>
      <PageIntro
        eyebrow="Mutual Aid Story Atlas"
        title="How WhatsApp groups, shared maps, and M-Pesa transfers become community care"
        intro="Follow Mina across five cities to see how people use the digital tools already on their phones — group chats, spreadsheets, social media, mobile money, SMS trees — to coordinate care, build community, and solve problems that formal institutions are too slow or too distant to reach."
        note={storyIntro.note}
        noteTitle="Why Mina is fictional"
        actions={[
          { to: '/story/toronto', label: "Start Mina\u2019s journey" },
          { to: '/story-map', label: 'Explore the full route', variant: 'secondary' },
        ]}
        stats={[
          { value: '5', label: 'city chapters', animate: true },
          { value: `${totalXP}`, label: 'total XP', animate: true },
          { value: '3', label: 'research questions', animate: true },
        ]}
      />

      <section className="section-spacing">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="paper-card h-100">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
                <div>
                  <p className="eyebrow mb-2">The route</p>
                  <h2 className="section-title mb-0">Five stops, one connected lesson</h2>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {totalCompleted > 0 && (
                    <button type="button" className="subtle-button" onClick={reset}>
                      <RotateCcw size={14} /> Reset journey
                    </button>
                  )}
                  <Link to="/story/toronto" className="primary-link-button">
                    Start Mina's journey <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <JourneyPath visited={visited} completed={completed} />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="paper-card h-100 subdued-panel">
              <p className="eyebrow mb-3">What to do next</p>

              <ProgressBar visited={visited} completed={completed} />
              {totalCompleted > 0 && (
                <p className="progress-label mt-2 mb-0">{totalCompleted} of 5 chapters completed</p>
              )}

              <div className="journey-checklist mb-4">
                <div className="checklist-item">
                  <span className="checklist-number">1</span>
                  <div>
                    <p className="mb-1"><strong>Scan the route first.</strong></p>
                    <p>Use the map to see the full journey and understand how the chapters connect.</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="checklist-number">2</span>
                  <div>
                    <p className="mb-1"><strong>Open each city in order.</strong></p>
                    <p>Every chapter adds one new idea about mutual aid, platform trust, or reciprocity.</p>
                  </div>
                </div>
                <div className="checklist-item">
                  <span className="checklist-number">3</span>
                  <div>
                    <p className="mb-1"><strong>Finish with the analysis pages.</strong></p>
                    <p>The learning and community sections turn the journey into clear takeaways you can reuse.</p>
                  </div>
                </div>
              </div>
              <Link to="/story-map" className="secondary-link-button">
                View the full story map
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow mb-2">Guiding questions</p>
            <h2 className="section-title mb-0">What the journey is trying to teach</h2>
          </div>
        </div>

        <div className="row g-4">
          {coreQuestions.map((question, index) => (
            <div className="col-lg-4" key={question.id}>
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="paper-card h-100"
              >
                <div className="question-number mb-3">0{index + 1}</div>
                <h3 className="card-title mb-2">{question.short}</h3>
                <p className="mb-0 text-body-secondary">{question.title}</p>
              </motion.article>
            </div>
          ))}
        </div>
      </section>

      <AchievementPanel earned={achievements} />

      <section className="section-spacing">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow mb-2">Chapter preview</p>
            <h2 className="section-title mb-0">What happens at each stop</h2>
          </div>
        </div>
        <div className="row g-4">
          {storyChapters.map((chapter, index) => {
            const isDone = completed.includes(chapter.slug);
            return (
              <div className="col-md-6 col-xl-4" key={chapter.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className={`paper-card h-100 route-card ${isDone ? 'card-completed' : ''}`}
                >
                  <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                    <p className="small-label mb-0">Chapter {chapter.step} · {chapter.city}</p>
                    {isDone && <span className="done-badge"><Check size={12} /> Done</span>}
                  </div>
                  <h3 className="card-title mb-2">{chapter.title}</h3>
                  <p className="text-body-secondary mb-3">{chapter.subtitle}</p>
                  <p className="mb-3"><strong>Need:</strong> {chapter.need}</p>
                  <Link to={`/story/${chapter.slug}`} className="text-link">
                    {isDone ? 'Revisit this chapter' : 'Open this chapter'} <ArrowRight size={14} />
                  </Link>
                </motion.article>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-spacing">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-8">
            <div className="paper-card h-100">
              <p className="eyebrow mb-3">The tools behind the care</p>
              <div className="reading-width">
                <p>
                  Every chapter centres on digital tools people actually use. In Toronto, a WhatsApp group and a shared Google Maps layer. In São Paulo, Instagram Stories and TikTok videos that make a community fridge visible and joinable. In Warsaw, a Telegram channel with multilingual map pins and Signal for private requests. In Nairobi, M-Pesa transfers tracked in a transparent Google Sheet. In Manila, an SMS tree, Viber group, and volunteer-maintained OpenStreetMap working together during a typhoon.
                </p>
                <p className="mb-0">
                  None of these tools were built for mutual aid. But when communities use them intentionally — with clear norms, shared access, and creative documentation — they become infrastructure for civic participation, learning, and positive social change. That is the core argument of this project: digital citizenship is not just about being safe online. It is about using the tools you already have to coordinate care, share power, and build something together.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="paper-card h-100 accent-panel">
              <p className="eyebrow mb-3">Five dimensions of digital citizenship</p>
              <ul className="plain-list mb-4">
                <li><strong>Civic participation</strong> — WhatsApp votes, shared ledgers, community decisions</li>
                <li><strong>Community building</strong> — fridge networks, support circles, volunteer coordination</li>
                <li><strong>Learning</strong> — documentation, knowledge sharing, teaching newcomers</li>
                <li><strong>Creativity</strong> — social media storytelling, illustrated guides, video documentation</li>
                <li><strong>Positive social change</strong> — layered alert systems, transparent mutual support, resilient infrastructure</li>
              </ul>
              <Link to="/story-map" className="primary-link-button">See it in action</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
