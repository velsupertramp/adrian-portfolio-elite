import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

// Custom cursor component
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    />
  )
}

// Hero component
function Hero() {
  const title = "BRAND SYSTEMS BUILT FOR GLOBAL SCALE"
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
        <h1 className="hero-title">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="hero-subhead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          Creative direction for FIFA, UEFA, PlayStation, and Premier Padel.
          <br />
          110+ events, 25 countries, 12 years.
        </motion.p>

        <motion.p
          className="hero-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          Visual infrastructure deployed under pressure. From pitch to broadcast,
          packaging to tournament identity—systems that hold at stadium scale and
          perform across continents.
        </motion.p>

        <motion.a
          href="#contact"
          className="cta-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.4 }}
          whileHover={{
            x: 2,
            y: 2,
            boxShadow: '2px 2px 0 #000000'
          }}
        >
          START CONVERSATION
        </motion.a>
      </div>
    </section>
  )
}

// Work section
const projects = [
  {
    title: 'FIFA BEACH SOCCER WORLD CUP',
    scope: 'Full ecosystem, 2019–2023',
    details: '110+ events across 25 countries',
    tags: ['Identity System', 'Environmental', 'Broadcast'],
    image: '/fifa.jpg'
  },
  {
    title: 'PLAYSTATION CREATORS CUP',
    scope: 'Esports tournament identity',
    details: 'Metropolitano Madrid, 2024',
    tags: ['Esports', 'Tournament', 'Identity'],
    image: '/ps.jpg'
  },
  {
    title: 'PREMIER PADEL',
    scope: 'Circuit-wide rebranding',
    details: '25+ events/year, Spain focus',
    tags: ['Tournament', 'Identity', 'Ongoing'],
    image: '/padel.jpg'
  },
  {
    title: 'UEFA CHAMPIONS LEAGUE',
    scope: 'Broadcast standards package',
    details: '80+ territories, 2021',
    tags: ['Broadcast', 'Motion', 'Standards'],
    image: '/uefa.jpg'
  }
]

function Work() {
  return (
    <section id="work" className="work-section">
      <div className="section-header">
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Systems Deployed</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              borderColor: '#CCFF00'
            }}
          >
            <div className="project-image" style={{ backgroundColor: '#1A1A1A' }}>
              {/* Placeholder for B&W image */}
              <div className="image-placeholder">B&W IMAGE</div>
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
        <h2 className="section-title">
          Twelve Years Building<br />Systems That Scale
        </h2>

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
      <h2 className="section-title">Deploy This System</h2>
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
        <motion.button
          type="submit"
          className="cta-button"
          whileHover={{
            x: 2,
            y: 2,
            boxShadow: '2px 2px 0 #000000'
          }}
        >
          SEND BRIEF
        </motion.button>
      </form>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <p className="footer-name">Adrián Velado</p>
            <p className="footer-title">Creative Director — Brand Systems & Identity</p>
          </div>
          <div className="footer-links">
            <a href="mailto:hello@adrianvelado.com">Email</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <p className="footer-copy">© 2026 Adrián Velado. All rights reserved.</p>
      </footer>
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default App
