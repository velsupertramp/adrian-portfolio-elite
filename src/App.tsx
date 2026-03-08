import { motion } from 'framer-motion'
import './App.css'

// Hero component
function Hero() {
  const title = "BRAND SYSTEMS FOR GLOBAL SCALE"
  const letters = title.split('')

  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-logo">ADRIÁN VELADO</div>
        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <div className="hero-content">
        <div className="red-block">
          // VISUAL ECOSYSTEM ARCHITECT
        </div>

        <h1 className="hero-title">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: i * 0.02,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>

        <p className="hero-subhead">
          CREATIVE DIRECTION FOR FIFA, UEFA, PLAYSTATION, AND PREMIER PADEL.
        </p>

        <p className="hero-body">
          Visual infrastructure deployed under pressure. From pitch to broadcast,
          packaging to tournament identity—systems that hold at stadium scale and
          perform across continents.
        </p>

        <div className="hero-stats">
          <div className="stat-box">
            <div className="stat-number">110+</div>
            <div className="stat-label">TOURNAMENTS</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">25</div>
            <div className="stat-label">COUNTRIES</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">12</div>
            <div className="stat-label">YEARS</div>
          </div>
        </div>

        <a href="#contact" className="cta-button">
          START CONVERSATION
        </a>
      </div>
    </section>
  )
}

// Logo Marquee
function LogoMarquee() {
  const logos = [
    'FIFA', 'PLAYSTATION', 'UEFA', 'PREMIER PADEL', 
    'RED BULL', 'ENDESA', 'VODAFONE', 'LALIGA',
    'FIFA', 'PLAYSTATION', 'UEFA', 'PREMIER PADEL',
    'RED BULL', 'ENDESA', 'VODAFONE', 'LALIGA'
  ]

  return (
    <div className="logo-marquee">
      <div className="marquee-content">
        {logos.map((logo, i) => (
          <div key={i} className="logo-item">{logo}</div>
        ))}
      </div>
    </div>
  )
}

// Work section
const projects = [
  {
    title: 'FIFA BEACH SOCCER WORLD CUP',
    scope: 'Full ecosystem, 2019–2024',
    details: '110+ events across 25 countries',
    tags: ['Identity System', 'Environmental', 'Broadcast'],
  },
  {
    title: 'PLAYSTATION CREATORS CUP',
    scope: 'Esports tournament identity',
    details: 'Metropolitano Madrid, 2024',
    tags: ['Esports', 'Tournament', 'Identity'],
  },
  {
    title: 'PREMIER PADEL',
    scope: 'Circuit-wide rebranding',
    details: '25+ events/year, Spain focus',
    tags: ['Tournament', 'Identity', 'Ongoing'],
  },
  {
    title: 'UEFA NATIONS LEAGUE',
    scope: 'Broadcast standards package',
    details: '80+ territories, 2021–2023',
    tags: ['Broadcast', 'Motion', 'Standards'],
  },
  {
    title: 'ENDESA BASKETBALL',
    scope: 'Fan zones & activation',
    details: 'Copa del Rey & Copa de la Reina',
    tags: ['Live Event', 'Fan Experience'],
  },
  {
    title: 'RED BULL SPORTS',
    scope: 'Event visual systems',
    details: 'Multiple disciplines',
    tags: ['Multi-sport', 'Activation'],
  },
]

function Work() {
  return (
    <section id="work" className="work-section">
      <div className="section-header">
        <p className="section-label">// SELECTED_WORK</p>
        <h2 className="section-title">SYSTEMS DEPLOYED</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="project-image">
              [IMAGE REQUIRED]
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-scope">{project.scope}</p>
              <p className="project-details">{project.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// About section
function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="section-header">
          <p className="section-label" style={{ color: 'white' }}>// WHO_I_AM</p>
          <h2 className="section-title" style={{ color: 'white' }}>
            TWELVE YEARS BUILDING<br />SYSTEMS THAT SCALE
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Adrián Velado directs brand ecosystems for global sports and entertainment
              properties. Twelve years engineering visual infrastructure for FIFA, UEFA,
              PlayStation, and Premier Padel—work deployed in 110+ tournaments across
              25 countries.
            </p>
            <p>
              The projects broadcast during World Cup finals are the result of months
              architecting identity systems: typography standards tested across broadcast,
              environmental graphics scaled for stadiums, packaging grids replicated in
              120+ markets, motion templates deployed across digital platforms.
            </p>
            <p>
              No trend-chasing. No decorative excess. Systems built to perform under
              pressure, engineered to scale globally, stress-tested in the highest-stakes
              environments sport offers.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">110+</div>
              <div className="stat-label">TOURNAMENTS</div>
            </div>
            <div className="stat">
              <div className="stat-number">25</div>
              <div className="stat-label">COUNTRIES</div>
            </div>
            <div className="stat">
              <div className="stat-number">12+</div>
              <div className="stat-label">YEARS</div>
            </div>
          </div>
        </div>

        <div className="about-mark">AV—</div>
      </div>
    </section>
  )
}

// Contact section
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <p className="section-label">// GET_IN_TOUCH</p>
        <h2 className="section-title">DEPLOY THIS SYSTEM</h2>
      </div>
      
      <p className="contact-intro">
        Available for brand direction, tournament identity systems,
        and creative partnerships.
      </p>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
        </div>
        <input type="text" placeholder="Organization" className="form-input" />
        <textarea placeholder="Project brief" className="form-textarea" rows={6} />
        <button type="submit" className="cta-button">
          SEND BRIEF
        </button>
      </form>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <p className="footer-name">Adrián Velado</p>
            <p className="footer-title">Creative Director — Brand Systems & Identity</p>
          </div>
          <div className="footer-links">
            <a href="mailto:info@adrianvelado.com">EMAIL</a>
            <a href="https://linkedin.com/in/adrianvelado" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href="https://instagram.com/adrianvelado.studio" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          </div>
        </div>
        <p className="footer-copy">© 2026 ADRIÁN VELADO. ALL RIGHTS RESERVED.</p>
      </footer>
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <Hero />
      <LogoMarquee />
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default App
