import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  FlaskConical,
  GitBranch,
  GitFork,
  Lightbulb,
  Mail,
  Menu,
  MessageCircle,
  Paperclip,
  Phone,
  Pin,
  Rocket,
  Server,
  Terminal,
  X,
} from "lucide-react";
import TechStackMarquee from "../components/TechStackMarquee";

const contact = {
  github: "https://github.com/byte-craft-07",
  linkedin:
    "https://www.linkedin.com/in/ajay-prajapati-38118b332?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  email: "ajaykterha@gmail.com",
  phone: "7897671632",
};

const skillGroups = [
  { icon: Code2, title: "Frontend", color: "orange", skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"] },
  { icon: Server, title: "Backend", color: "blue", skills: ["Node.js", "Express.js", "REST APIs"] },
  { icon: Database, title: "Database", color: "green", skills: ["MongoDB", "Data Modeling", "CRUD"] },
  { icon: BrainCircuit, title: "AI / ML", color: "yellow", skills: ["Python", "Pandas", "NumPy", "Machine Learning"] },
  { icon: Terminal, title: "Tools", color: "pink", skills: ["Git", "GitHub", "VS Code", "Postman"] },
];

const projects = [
  {
    number: "01",
    title: "DineLink OS",
    label: "AI hotel SaaS",
    featured: true,
    badge: "Flagship product",
    color: "orange",
    image: "/images/projects/dinelink-os.png",
    liveUrl: "https://restaurant-and-hotel-management-website.onrender.com/",
    repoUrl: "https://github.com/byte-craft-07/Restaurant-and-Hotel-management-website-",
    summary: "An AI-powered QR room-service and hotel operations platform connecting guests, staff, and kitchens.",
    problem: "Most hotel QR menus are static, ignore guest intent, and do not connect cleanly with room verification or kitchen operations.",
    solution: "DineLink OS turns a room QR into a branded ordering journey with natural-language cart building, secure verification, and live operational dashboards.",
    stack: ["React", "Vite", "Tailwind", "Express", "MongoDB", "Socket.IO", "JWT"],
    features: ["AI natural-language ordering", "Room-aware QR verification", "Live kitchen display system", "Bookings, loyalty, and analytics"],
    cardHighlights: ["AI QR Ordering", "Hotel CRM", "Live Kitchen"],
    workflowLabel: "Guest CRM & service loop",
    workflow: [
      ["01", "Guest capture", "Room QR, booking profile, preferences, and room context enter one guest record."],
      ["02", "AI conversion", "Natural-language requests become verified menu and cart actions."],
      ["03", "Live fulfillment", "Socket.IO sends room-aware tickets to kitchen and service dashboards."],
      ["04", "Retention CRM", "Order history, loyalty, bookings, and analytics support personalized repeat service."],
    ],
    impact: "One connected journey: guest → AI order → kitchen → service → loyalty",
    challenge: "Creating one calm, mobile-first product flow for guests while keeping real-time staff and kitchen operations reliable.",
    status: "Building",
  },
  {
    number: "02",
    title: "Vijay AI Voice Assistant",
    label: "AI agent system",
    featured: true,
    badge: "Intelligent agent",
    color: "yellow",
    image: "/images/projects/vijay_agent.jpeg",
    summary: "A voice-reactive AI core that listens, reasons, runs tools, tracks system health, and learns from feedback.",
    problem: "Everyday digital actions still require too many manual steps and disconnected tools.",
    solution: "A modular desktop agent architecture combining a voice core, contextual chat, quick actions, camera access, task tools, and a self-learning feedback layer.",
    stack: ["Python", "AI Agents", "NLP", "Voice Tools", "Automation", "Computer Vision"],
    features: ["Always-ready voice command core", "Notes, weather, mail, news, and stock tools", "Camera and system monitoring", "Self-learning feedback and workflow scoring"],
    cardHighlights: ["Voice Core", "Self Learning", "Task Automation"],
    workflowLabel: "Voice-to-action intelligence loop",
    workflow: [
      ["01", "Listen", "Voice input and conversation context capture the user's intent."],
      ["02", "Understand", "NLP, memory, and rules classify the request and choose a workflow."],
      ["03", "Act", "Connected tools perform notes, weather, mail, news, camera, and automation tasks."],
      ["04", "Learn", "Feedback, weak/slow events, and workflow scores improve future decisions."],
    ],
    impact: "Voice → context → reasoning → tools → feedback",
    challenge: "Keeping autonomous actions useful, observable, predictable, and safe across changing requests.",
    status: "Researching",
  },
  {
    number: "03",
    title: "RentEase Rental Platform",
    label: "Full-stack platform",
    color: "green",
    image: "/images/projects/rentease.jpeg",
    repoUrl: "https://github.com/byte-craft-07/Rentease-rental-platform",
    summary: "A production-oriented furniture and appliance rental platform for students and relocating professionals.",
    problem: "People moving frequently need essential furniture and appliances without high ownership costs or inflexible commitments.",
    solution: "A MERN rental system covering product discovery, tenure, checkout, delivery, returns, maintenance, and role-based operations.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "REST API", "JWT"],
    features: ["Catalog, cart, and checkout", "Active rentals and extensions", "Maintenance and return workflows", "Admin and vendor operations"],
    challenge: "Coordinating customer, vendor, and admin lifecycles across inventory, delivery, rental, and maintenance states.",
    status: "Building",
  },
  {
    number: "04",
    title: "Wanderlust Travel Website",
    label: "Full-stack app",
    color: "blue",
    image: "/images/projects/wanderlist.jpeg",
    repoUrl: "https://github.com/byte-craft-07/Wanderlist-",
    summary: "A travel listing product built around clean routing, database features, and useful browsing.",
    problem: "Learning full-stack concepts in isolation does not reveal how real product flows connect.",
    solution: "A complete listing application with reusable pages, CRUD workflows, and database integration.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "CSS"],
    features: ["Travel listings", "Routing and CRUD", "Database-connected pages"],
    challenge: "Connecting server, database, validation, and UI into one reliable flow.",
    status: "Completed",
  },
  {
    number: "05",
    title: "Machine Learning Projects",
    label: "Learning lab",
    color: "pink",
    summary: "Small, focused experiments for understanding data preparation, models, and evaluation.",
    problem: "ML concepts become meaningful only after working with imperfect data and measurable outcomes.",
    solution: "A growing collection of notebooks and prototypes that turn theory into practical learning.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    features: ["Data exploration", "Model training", "Evaluation practice"],
    challenge: "Choosing sensible features and explaining model results clearly.",
    status: "Learning",
  },
];

const journey = [
  ["2022", "Started Coding", "Curiosity became a habit: write, break, understand, repeat."],
  ["2023", "HTML, CSS & JavaScript", "Learned to turn ideas into interfaces people can actually use."],
  ["2024", "React & MERN", "Moved from pages to products with APIs, databases, and full workflows."],
  ["2025", "Built Real Apps", "Restaurant, travel, portfolio, and assistant ideas became working builds."],
  ["Now", "AI / ML + Startups", "Combining engineering, AI tools, and product thinking for useful ventures."],
];

const building = [
  { title: "Restaurant SaaS Platform", status: "Building", icon: Rocket, color: "orange" },
  { title: "AI Voice Agent", status: "Researching", icon: BrainCircuit, color: "yellow" },
  { title: "ML Learning Journey", status: "Testing", icon: FlaskConical, color: "green" },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading wall-reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <motion.div className="case-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
      <motion.article
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        className={`case-modal paper-${project.color}`}
        initial={{ opacity: 0, y: 35, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{ type: "spring", stiffness: 250, damping: 24 }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="icon-button modal-close" onClick={onClose} aria-label="Close project case study"><X /></button>
        <span className="case-stamp">Case file {project.number}</span>
        {project.badge && <span className="case-featured-badge">{project.badge}</span>}
        <p className="case-label">{project.label}</p>
        <h2 id="case-title">{project.title}</h2>
        <p className="case-summary">{project.summary}</p>
        {project.image && <img className="case-hero-image" src={project.image} alt={`${project.title} interface`} />}
        <div className="case-study-grid">
          <section><span>01 / Problem</span><p>{project.problem}</p></section>
          <section><span>02 / Solution</span><p>{project.solution}</p></section>
          <section><span>03 / Challenge</span><p>{project.challenge}</p></section>
          <section><span>04 / Features</span><ul>{project.features.map((feature) => <li key={feature}><CheckCircle2 />{feature}</li>)}</ul></section>
        </div>
        {project.workflow && (
          <section className="product-workflow" aria-label={project.workflowLabel}>
            <div className="workflow-heading">
              <span>How the product works</span>
              <h3>{project.workflowLabel}</h3>
              <p>{project.impact}</p>
            </div>
            <div className="workflow-steps">
              {project.workflow.map(([step, title, detail]) => (
                <article key={step}>
                  <span>{step}</span>
                  <h4>{title}</h4>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </section>
        )}
        <div className="case-footer">
          <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="case-actions">
            {project.liveUrl && <a className="case-live-link" href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink /> Live demo</a>}
            <a href={project.repoUrl || contact.github} target="_blank" rel="noreferrer"><GitFork /> GitHub</a>
            <span className="case-status"><i /> {project.status}</span>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function AjayPortfolio() {
  const pageRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let animationFrame;
    const smoothScroll = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(smoothScroll);
    };
    animationFrame = requestAnimationFrame(smoothScroll);

    const context = gsap.context(() => {
      gsap.utils.toArray(".wall-reveal").forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 28 }, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
      gsap.to(".hero-polaroid", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: { trigger: ".hero-workspace", start: "top top", end: "bottom top", scrub: 0.8 },
      });
    }, pageRef);

    return () => {
      cancelAnimationFrame(animationFrame);
      context.revert();
      lenis.destroy();
    };
  }, []);

  const navItems = ["About", "Skills", "Projects", "Journey", "Contact"];

  return (
    <div className="portfolio-shell" ref={pageRef}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Ajay Kumar home">
          <img src="/images/bytecraft-logo.svg.png" alt="ByteCraft logo" />
          <span><strong>Ajay Kumar</strong><small>Full-Stack Developer</small></span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}.</span>{item}</a>)}
        </nav>
        <button className="icon-button menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero-workspace">
          <div className="wall-grid" aria-hidden="true" />
          <motion.div className="hero-note note-one" animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity }}>MERN builder<br /><strong>Project first.</strong></motion.div>
          <motion.div className="hero-note note-two" animate={{ rotate: [3, 1.5, 3] }} transition={{ duration: 6, repeat: Infinity }}>Currently exploring<br /><strong>AI / ML</strong></motion.div>
          <div className="hero-copy">
            <div className="tape-label">Welcome to my builder&apos;s wall</div>
            <p className="hero-kicker"><Pin /> Full-Stack Developer | MERN Stack | AI/ML Enthusiast</p>
            <h1>Hi, I&apos;m <span>Ajay.</span></h1>
            <p className="hero-intro">I build real products with the MERN stack and explore how artificial intelligence can make them smarter, faster, and more useful.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <ArrowRight /></a>
              <a className="button button-paper" href="#journey">Explore my journey <ArrowUpRight /></a>
            </div>
            <div className="quick-stats" aria-label="Portfolio highlights">
              <span><strong>05+</strong> product builds</span>
              <span><strong>MERN</strong> core stack</span>
              <span><strong>AI/ML</strong> next chapter</span>
            </div>
          </div>

          <div className="hero-visual">
            <motion.figure className="hero-polaroid" initial={{ opacity: 0, rotate: 5, x: 30 }} animate={{ opacity: 1, rotate: 2, x: 0 }} transition={{ duration: 0.85, delay: 0.15 }}>
              <Paperclip className="photo-clip" aria-hidden="true" />
              <img src="/images/ajay-landing.jpg.jpg" alt="Ajay Kumar, full-stack developer" />
              <figcaption><strong>Ajay Kumar</strong><span>Building ideas into products.</span></figcaption>
            </motion.figure>
            <div className="code-scrap" aria-label="Developer note">
              <span>build_log.txt</span>
              <code>idea → prototype → test → improve</code>
            </div>
            <div className="hand-arrow" aria-hidden="true">↗</div>
          </div>
          <a className="scroll-cue" href="#about">Scroll through the wall <ArrowRight /></a>
        </section>

        <TechStackMarquee />

        <section id="about" className="wall-section about-section">
          <SectionHeading eyebrow="Journal entry / 01" title="The story behind the builder." text="I learn best when an idea has to survive outside a tutorial." />
          <div className="journal-layout">
            <article className="journal-page wall-reveal">
              <span className="page-number">AJ / STORY</span>
              <h3>Why I started coding</h3>
              <p>I started with curiosity: how does a website become a real product? That question led me from HTML and CSS to JavaScript, React, APIs, databases, and complete MERN applications.</p>
              <p>I love building because every project is both a technical puzzle and a chance to make someone&apos;s work simpler. My goal is to grow into an AI engineer and entrepreneur who turns useful ideas into dependable products.</p>
              <blockquote>“Not just learning code. Learning how to create value with it.”</blockquote>
              <span className="signature">Ajay Kumar</span>
            </article>
            <aside className="memory-board wall-reveal">
              <div className="memory-note"><Pin /><small>Mindset</small><strong>Build before you feel ready.</strong></div>
              <div className="memory-note memory-orange"><Lightbulb /><small>Product lens</small><strong>Useful beats complicated.</strong></div>
              <div className="memory-note memory-photo"><img src="/images/ajay-landing.jpg.jpg" alt="Ajay smiling" /><span>Still learning. Always shipping.</span></div>
            </aside>
          </div>
        </section>

        <section id="skills" className="wall-section skills-section">
          <SectionHeading eyebrow="Toolkit / 02" title="What is pinned to my workbench." text="A practical stack for full-stack products, AI experiments, and everything between." />
          <div className="toolkit-grid">
            {skillGroups.map(({ icon: Icon, title, color, skills }, index) => (
              <motion.article className={`tool-card tool-${color} wall-reveal`} key={title} whileHover={{ y: -8, rotate: index % 2 ? 1 : -1 }}>
                <div className="tool-card-top"><Icon /><span>0{index + 1}</span></div>
                <h3>{title}</h3>
                <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                <span className="tool-detail">Open toolkit <ArrowUpRight /></span>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="wall-section projects-section">
          <SectionHeading eyebrow="Project archive / 03" title="Ideas that became working things." text="Click any case file to open the thinking, tradeoffs, and build story behind it." />
          <div className="project-wall">
            {projects.map((project, index) => (
              <motion.button
                type="button"
                className={`project-file project-${project.color} ${project.featured ? "is-featured" : ""} wall-reveal`}
                key={project.title}
                onClick={() => setActiveProject(project)}
                whileHover={{ y: -10, rotate: index % 2 ? 1.5 : -1.5 }}
                aria-label={`Open case study for ${project.title}`}
              >
                <span className="project-pin"><Pin /></span>
                <span className="project-number">{project.number}</span>
                <span className="project-label">{project.label}</span>
                {project.badge && <span className="featured-ribbon">{project.badge}</span>}
                <span className={`project-visual ${project.image ? "has-image" : ""}`}>
                  {project.image ? <img src={project.image} alt={`${project.title} project preview`} loading="lazy" /> : <><Code2 /><i /><i /><i /></>}
                </span>
                <strong>{project.title}</strong>
                <span className="project-summary">{project.summary}</span>
                {project.cardHighlights && <span className="project-highlights">{project.cardHighlights.map((item) => <i key={item}>{item}</i>)}</span>}
                <span className="project-open">Open case file <ArrowUpRight /></span>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="journey" className="wall-section journey-section">
          <SectionHeading eyebrow="Roadmap / 04" title="The path is still being drawn." text="Every milestone changed what I believed I could build next." />
          <div className="journey-thread">
            {journey.map(([year, title, detail], index) => (
              <article className={`journey-memory wall-reveal memory-${index + 1}`} key={title}>
                <span className="journey-pin" />
                <small>{year}</small><h3>{title}</h3><p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wall-section github-section" id="github">
          <SectionHeading eyebrow="Developer evidence / 05" title="An investigation board for the work." text="Commits, repositories, experiments, and technologies leave a trail." />
          <div className="investigation-board wall-reveal">
            <svg className="board-threads" viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true"><path d="M130 100 L470 210 L820 90 M470 210 L190 345 M470 210 L820 340" /></svg>
            <a className="evidence evidence-profile" href={contact.github} target="_blank" rel="noreferrer"><GitFork /><span><small>GitHub profile</small><strong>@byte-craft-07</strong></span><ExternalLink /></a>
            <div className="evidence evidence-commits"><GitBranch /><span><strong>Consistent commits</strong><small>Learning in public</small></span></div>
            <div className="evidence evidence-repos"><BriefcaseBusiness /><span><strong>05+ builds</strong><small>Products & prototypes</small></span></div>
            <div className="evidence evidence-stack"><Code2 /><span><strong>MERN + AI</strong><small>Current direction</small></span></div>
            <div className="evidence-stamp">BUILD<br />SHIP<br />LEARN</div>
          </div>
        </section>

        <section className="wall-section achievements-section">
          <SectionHeading eyebrow="Milestones / 06" title="Small wins, framed properly." text="The work is ongoing, but the progress deserves a place on the wall." />
          <div className="achievement-row">
            <article className="award-frame wall-reveal"><Award /><small>Milestone 01</small><h3>Full MERN Applications</h3><p>Moved from isolated lessons to complete product workflows.</p></article>
            <article className="award-frame wall-reveal"><Rocket /><small>Milestone 02</small><h3>Portfolio Deployed</h3><p>Designed, built, versioned, and shipped through GitHub and Vercel.</p></article>
            <article className="award-frame wall-reveal"><BrainCircuit /><small>Milestone 03</small><h3>AI / ML Journey</h3><p>Started building foundations in Python, data, prompts, and agents.</p></article>
          </div>
        </section>

        <section className="wall-section building-section">
          <SectionHeading eyebrow="On the desk right now" title="Currently building." text="Three active threads I am pushing forward this season." />
          <div className="building-notes">
            {building.map(({ title, status, icon: Icon, color }) => (
              <motion.article className={`building-note building-${color} wall-reveal`} key={title} whileHover={{ rotate: 0, y: -6 }}>
                <Icon /><span className="live-dot" /><small>{status}</small><h3>{title}</h3><p>Active work in progress. Testing ideas, collecting feedback, and improving the core experience.</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-notebook wall-reveal">
            <span className="notebook-spiral" aria-hidden="true" />
            <p className="eyebrow">Final note / Say hello</p>
            <h2>Let&apos;s build something<br /><span>amazing together.</span></h2>
            <p className="contact-copy">Open to internships, collaboration, hackathons, and ambitious product conversations.</p>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`}><Mail /><span><small>Email</small>{contact.email}</span><ArrowUpRight /></a>
              <a href={`tel:+91${contact.phone}`}><Phone /><span><small>Phone</small>+91 {contact.phone}</span><ArrowUpRight /></a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer"><MessageCircle /><span><small>LinkedIn</small>Ajay Prajapati</span><ArrowUpRight /></a>
              <a href={contact.github} target="_blank" rel="noreferrer"><GitFork /><span><small>GitHub</small>@byte-craft-07</span><ArrowUpRight /></a>
            </div>
            <div className="contact-signoff"><span>See you on the other side of an idea,</span><strong>Ajay Kumar</strong></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>AJAY KUMAR / BUILDER&apos;S WALL</span><span>Full-Stack Developer · MERN Stack · AI/ML Enthusiast</span><span>© 2026</span></footer>

      <AnimatePresence>{activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}</AnimatePresence>
    </div>
  );
}
