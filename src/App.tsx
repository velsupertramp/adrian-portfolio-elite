import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import './App.css'

// ═══════════════════════════════════════════════════════════════
// ADRIÁN VELADO — PREMIUM PORTFOLIO
// Visual Systems Architect | FIFA, PlayStation, Premier Padel
// ═══════════════════════════════════════════════════════════════

// Custom Cursor with trail effect
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, .hoverable')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  )
}

// Navigation with scroll effect
function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="nav-logo">
        <span className="logo-text">ADRIÁN VELADO</span>
        <span className="logo-dash">—</span>
      </a>
      <div className="nav-links">
        <a href="#work" className="nav-link hoverable">Work</a>
        <a href="#clients" className="nav-link hoverable">Clients</a>
        <a href="#about" className="nav-link hoverable">About</a>
        <a href="#contact" className="cta-nav hoverable">Let's Talk</a>
      </div>
    </motion.nav>
  )
}

// HERO — Cinematic Typography
function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section className="hero" ref={heroRef}>
      {/* Background grain */}
      <div className="noise-overlay" />
      
      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      
      <motion.div className="hero-content" style={{ y, opacity }}>
        {/* Pre-title */}
        <motion.p 
          className="hero-pretitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Creative Director & Visual Systems Architect
        </motion.p>

        {/* Main title - MASSIVE */}
        <div className="hero-title-container">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="title-line">
              {'BRAND'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="title-char"
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="title-line">
              {'SYSTEMS'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="title-char"
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.7 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="title-line title-line-accent">
              {'FOR GLOBAL'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="title-char"
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.9 + i * 0.03,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
            <span className="title-line title-line-accent">
              {'SCALE'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="title-char"
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.2 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="title-dot">.</span>
            </span>
          </motion.h1>
        </div>

        {/* Stats bar */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="stat-item">
            <span className="stat-number">110+</span>
            <span className="stat-label">Global Events</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">25</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">12</span>
            <span className="stat-label">Years</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <a href="#work" className="btn-primary hoverable">
            <span>View Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>Scroll</span>
        <motion.div 
          className="scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}

// CLIENT LOGOS — Tier 1 brands
const clients = [
  { name: 'FIFA', logo: 'FIFA' },
  { name: 'PlayStation', logo: 'PLAYSTATION' },
  { name: 'UEFA', logo: 'UEFA' },
  { name: 'Premier Padel', logo: 'PREMIER PADEL' },
  { name: 'Red Bull', logo: 'RED BULL' },
  { name: 'LaLiga', logo: 'LALIGA' },
  { name: 'Puma', logo: 'PUMA' },
  { name: 'COI', logo: 'COI' },
  { name: 'Endesa', logo: 'ENDESA' },
  { name: 'Vodafone', logo: 'VODAFONE' },
]

function ClientLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="clients" className="clients-section" ref={ref}>
      <motion.p 
        className="clients-label"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        Trusted by world-class brands
      </motion.p>
      
      <div className="clients-marquee">
        <motion.div 
          className="clients-track"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="client-logo hoverable">
              <span className="client-text">{client.logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// FEATURED WORK — Case Studies
const featuredProjects = [
  {
    id: 1,
    title: 'FIFA Beach Soccer World Cup',
    subtitle: 'Dubai 2024',
    category: 'Visual Identity System',
    description: 'Full 360° ecosystem for 72,000+ spectators. Venue branding, TV overlays, environmental graphics, and hospitality design across the entire tournament.',
    tags: ['Identity System', 'Environmental', 'Broadcast', 'Signage'],
    metrics: ['72K+ Spectators', '14 Matches', 'Global Broadcast'],
    image: '/fifa-beach.jpg',
    color: '#00A1E0'
  },
  {
    id: 2,
    title: 'PlayStation Creators Cup',
    subtitle: 'Metropolitano Madrid 2024',
    category: 'Esports Tournament Identity',
    description: 'Complete creative direction for Sony PlayStation\'s flagship esports tournament at the iconic Metropolitano stadium. From brand system to live experience.',
    tags: ['Esports', 'Event Identity', 'Stage Design', 'Digital'],
    metrics: ['Main Stage', 'Live Broadcast', '50K+ Viewers'],
    image: '/playstation.jpg',
    color: '#003791'
  },
  {
    id: 3,
    title: 'Premier Padel Circuit',
    subtitle: 'Spain 2024',
    category: 'Circuit-Wide Rebranding',
    description: 'Complete visual overhaul of the Premier Padel circuit. Design system deployed across Madrid, Sevilla, Málaga, and Barcelona Finals.',
    tags: ['Rebranding', 'Tournament', 'Multi-venue', 'Sports'],
    metrics: ['4 Major Events', '25+ Venues/Year', 'Global Tour'],
    image: '/premier-padel.jpg',
    color: '#E31837'
  }
]

function FeaturedWork() {
  return (
    <section id="work" className="work-section">
      <div className="section-header">
        <motion.span 
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Work
        </motion.span>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Systems Built<br />to Perform
        </motion.h2>
      </div>

      <div className="featured-grid">
        {featuredProjects.map((project, i) => (
          <motion.article 
            key={project.id}
            className="featured-card hoverable"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-image" style={{ '--accent': project.color } as React.CSSProperties}>
              <div className="image-overlay" />
              <div className="card-number">0{i + 1}</div>
              <div className="card-category">{project.category}</div>
            </div>
            
            <div className="card-content">
              <div className="card-header">
                <h3 className="card-title">{project.title}</h3>
                <span className="card-subtitle">{project.subtitle}</span>
              </div>
              
              <p className="card-description">{project.description}</p>
              
              <div className="card-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>

              <div className="card-metrics">
                {project.metrics.map((metric, j) => (
                  <span key={j} className="metric">{metric}</span>
                ))}
              </div>

              <a href="#" className="card-link hoverable">
                <span>View Case Study</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

// Additional Work Grid
const additionalWork = [
  { title: 'UEFA Champions League', scope: 'Broadcast Standards', year: '2021' },
  { title: 'Red Bull Events', scope: 'Event Identity', year: '2023' },
  { title: 'Endesa Liga ACB', scope: 'Fan Zones & Copa', year: '2024' },
  { title: 'Vodafone MWC', scope: 'Showroom Design', year: '2024' },
]

function AdditionalWork() {
  return (
    <section className="additional-work">
      <motion.h3 
        className="additional-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        More Projects
      </motion.h3>
      
      <div className="work-list">
        {additionalWork.map((work, i) => (
          <motion.a 
            key={i}
            href="#"
            className="work-item hoverable"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="work-info">
              <span className="work-name">{work.title}</span>
              <span className="work-scope">{work.scope}</span>
            </div>
            <span className="work-year">{work.year}</span>
            <svg className="work-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

// ABOUT Section
function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">About</span>
          <h2 className="about-title">
            Twelve years building
            <br />
            <span className="title-accent">visual infrastructure</span>
            <br />
            that scales globally.
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I architect brand ecosystems for global sports and entertainment properties. 
              The work you see during World Cup finals—that's months of engineering identity systems: 
              typography standards tested across broadcast, environmental graphics scaled for stadiums, 
              packaging grids replicated in 120+ markets.
            </p>
            <p>
              From FIFA to PlayStation, UEFA to Premier Padel—these are systems built to perform 
              under pressure. No trend-chasing. No decorative excess. Just infrastructure engineered 
              to scale, stress-tested in the highest-stakes environments sport offers.
            </p>
            <p className="about-highlight">
              Currently based in Spain, available for global creative direction 
              and brand systems partnerships.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="stat-block">
              <span className="stat-big">110+</span>
              <span className="stat-desc">International tournaments and events directed</span>
            </div>
            <div className="stat-block">
              <span className="stat-big">25</span>
              <span className="stat-desc">Countries across 5 continents</span>
            </div>
            <div className="stat-block">
              <span className="stat-big">12+</span>
              <span className="stat-desc">Years engineering visual systems</span>
            </div>
          </motion.div>
        </div>

        {/* Signature */}
        <motion.div 
          className="about-signature"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          AV—
        </motion.div>
      </div>
    </section>
  )
}

// CONTACT Section
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="contact-title">
            Let's build something
            <br />
            <span className="title-accent">extraordinary.</span>
          </h2>
          <p className="contact-intro">
            Available for brand direction, tournament identity systems, 
            and creative partnerships with ambitious organizations.
          </p>
        </motion.div>

        <motion.div 
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="mailto:hello@adrianvelado.com" className="btn-primary btn-large hoverable">
            <span>Start a Conversation</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </motion.div>

        <motion.div 
          className="contact-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="mailto:hello@adrianvelado.com" className="contact-link hoverable">
            hello@adrianvelado.com
          </a>
          <a href="https://linkedin.com/in/adrianvelado" target="_blank" rel="noopener" className="contact-link hoverable">
            LinkedIn
          </a>
          <a href="https://instagram.com/adrianvelado" target="_blank" rel="noopener" className="contact-link hoverable">
            Instagram
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-name">Adrián Velado</span>
            <span className="footer-role">Creative Director — Visual Systems Architect</span>
          </div>
          <span className="footer-copy">© 2025 All rights reserved.</span>
        </div>
      </footer>
    </section>
  )
}

// Main App
function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Navigation />
      <Hero />
      <ClientLogos />
      <FeaturedWork />
      <AdditionalWork />
      <About />
      <Contact />
    </div>
  )
}

export default App
