import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  BriefcaseBusiness,
  GitBranch,
  Mail,
  Menu,
  Rocket,
  Server,
  X,
} from "lucide-react";
import TechStackMarquee from "../components/TechStackMarquee";

const backgroundImage = "/images/ajay-background.jpg.webp";
const landingImage = "/images/ajay-landing.jpg.jpg";

const projects = [
  {
    title: "Restaurant & Hotel Management",
    type: "MERN Stack Platform",
    desc: "A full-stack restaurant and hotel management website focused on menu, orders, rooms, and customer management. Planned to evolve into an AI-assisted restaurant product.",
    stack: ["MongoDB", "Express", "React", "Node", "Tailwind"],
    glow: "project-glow-orange",
  },
  {
    title: "Wanderlust",
    type: "Travel Listing App",
    desc: "A travel listing web application built to practice full-stack development, routing, listing pages, database-connected features, and clean user flows.",
    stack: ["Node", "Express", "MongoDB", "EJS/React", "CSS"],
    glow: "project-glow-sky",
  },
  {
    title: "AI Assistant / Agent Prototype",
    type: "AI Workflow Prototype",
    desc: "A learning-based AI assistant/agent prototype exploring AI workflows, prompt design, voice tools, plugin thinking, and automation architecture.",
    stack: ["Python", "AI Tools", "Prompting", "Agents"],
    glow: "project-glow-violet",
  },
  {
    title: "Portfolio Website",
    type: "Personal Brand Site",
    desc: "A personal portfolio designed to showcase full-stack projects, AI/ML interest, product thinking, and practical learning journey.",
    stack: ["React", "Animation", "UI", "CSS"],
    glow: "project-glow-emerald",
  },
];

const skills = [
  { icon: Code2, label: "Frontend", text: "React.js, JavaScript, HTML, CSS, responsive UI" },
  { icon: Server, label: "Backend", text: "Node.js, Express.js, REST APIs" },
  { icon: Database, label: "Database", text: "MongoDB, data modeling, CRUD workflows" },
  { icon: BrainCircuit, label: "AI/ML", text: "AI tools, prompt engineering, agents, ML fundamentals" },
];

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [-12, 12, -12], opacity: 1 }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`floating-orb ${className}`}
    />
  );
}

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 18 });

  const onMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AjayPortfolio() {
  const [open, setOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const navItems = useMemo(() => ["Home", "About", "Projects", "Skills", "Contact"], []);

  useEffect(() => {
    const move = (event) => setMouse({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="portfolio-page">
      <div
        className="cursor-light"
        style={{
          background: `radial-gradient(620px circle at ${mouse.x}px ${mouse.y}px, rgba(251,146,60,0.14), transparent 42%)`,
        }}
      />
      <div className="page-grid" />
      <div className="photo-background" style={{ backgroundImage: `url(${backgroundImage})` }} />

      <FloatingOrb className="orb-orange" />
      <FloatingOrb className="orb-violet" delay={1.4} />
      <FloatingOrb className="orb-cyan" delay={2.2} />

      <header className="site-header">
        <nav className="site-nav">
          <a href="#home" className="brand">
            <span className="brand-logo">
              <img src="/images/bytecraft-logo.svg.png" alt="ByteCraft logo" />
            </span>
            <span>
              <strong>Ajay Prajapati</strong>
              <small>Full-Stack Developer</small>
            </span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-cta">
            Let's Connect
          </a>

          <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="page-content">
        <section id="home" className="hero-section">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-pill">
              <Rocket size={16} />
              Building MERN apps, AI workflows & real-world products
            </div>
            <h1>I build clean, useful & AI-assisted web products.</h1>
            <p className="hero-copy">
              I'm Ajay Prajapati, a BCA student, full-stack developer, and AI/ML enthusiast. I build MERN stack projects, explore AI agents, and turn practical ideas into working web experiences.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View Projects <ArrowRight size={20} />
              </a>
              <a href="#contact" className="button button-muted">
                Contact Me
              </a>
            </div>

            <div className="stats-grid">
              {[
                ["04+", "Projects"],
                ["MERN", "Stack"],
                ["AI/ML", "Interest"],
              ].map(([num, label]) => (
                <div key={label} className="stat-card">
                  <strong>{num}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <TiltCard className="hero-portrait-card">
            <div className="portrait-shell">
              <img src={landingImage} alt="Ajay Prajapati portrait" className="portrait-image" />
              <div className="portrait-overlay">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <Cpu size={20} />
              </div>
            </div>
          </TiltCard>
        </section>

        <TechStackMarquee />

        <section id="about" className="content-section about-grid">
          <div>
            <p className="section-kicker">About Me</p>
            <h2>Not just learning. Building.</h2>
          </div>
          <div className="glass-panel text-panel">
            <p>
              I am a BCA student and full-stack developer focused on MERN stack development. My learning style is project-first: I build websites, fix real bugs, improve UI, and keep upgrading ideas into usable products.
            </p>
            <p>
              My current direction is to combine full-stack development with AI tools, agents, and automation thinking, especially for practical products like restaurant systems, travel listing apps, portfolios, and assistant prototypes.
            </p>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-header">
            <div>
              <p className="section-kicker">Selected Work</p>
              <h2>Projects that show my builder journey.</h2>
            </div>
            <p>Every project is a step toward better engineering, product thinking, and AI-assisted workflows.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="project-card"
              >
                <div className={`project-glow ${project.glow}`} />
                <div className="project-title-row">
                  <div>
                    <p>{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <ExternalLink size={20} />
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="center-heading">
            <p className="section-kicker">Skills</p>
            <h2>My current stack</h2>
          </div>
          <div className="skills-grid">
            {skills.map(({ icon: Icon, label, text }) => (
              <div key={label} className="skill-card">
                <span>
                  <Icon size={28} />
                </span>
                <h3>{label}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="contact-panel">
            <p className="section-kicker">Contact</p>
            <h2>Let's build something useful.</h2>
            <p>Open to hackathons, project collaboration, internships, and AI-assisted product building opportunities.</p>
            <div className="social-links">
              <a href="https://github.com/byte-craft-07" target="_blank" rel="noreferrer">
                <GitBranch size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ajay-prajapati-38118b332?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={20} /> LinkedIn
              </a>
              <a href="mailto:ajaykterha@gmail.com">
                <Mail size={20} /> Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Built by Ajay Prajapati | Full-Stack Developer | MERN Stack | AI/ML Enthusiast</p>
        <p>
          Contact: <a href="tel:+917897671632">7897671632</a> | Email: <a href="mailto:ajaykterha@gmail.com">ajaykterha@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
