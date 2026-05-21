import {
  Atom,
  Blocks,
  Bot,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  CodeXml,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  GitFork,
  Network,
  Route,
  Server,
  Sparkles,
  Terminal,
  Wind,
} from "lucide-react";

const techStack = [
  { name: "ByteCraft", image: "/images/bytecraft-logo.svg.png", tone: "silver" },
  { name: "React", icon: Atom, tone: "cyan" },
  { name: "JavaScript", icon: Braces, tone: "amber" },
  { name: "HTML5", icon: CodeXml, tone: "orange" },
  { name: "CSS3", icon: FileCode2, tone: "sky" },
  { name: "Tailwind CSS", icon: Wind, tone: "cyan" },
  { name: "Node.js", icon: Server, tone: "green" },
  { name: "Express.js", icon: Route, tone: "zinc" },
  { name: "MongoDB", icon: Database, tone: "emerald" },
  { name: "Git", icon: GitBranch, tone: "orange" },
  { name: "GitHub", icon: GitFork, tone: "slate" },
  { name: "Python", icon: Terminal, tone: "blue" },
  { name: "C++", icon: Code2, tone: "violet" },
  { name: "AI/ML", icon: BrainCircuit, tone: "pink" },
  { name: "Machine Learning", icon: BrainCircuit, tone: "pink" },
  { name: "Deep Learning", icon: Cpu, tone: "violet" },
  { name: "Neural Networks", icon: Network, tone: "teal" },
  { name: "Data Science", icon: Database, tone: "blue" },
  { name: "Jupyter", icon: FileCode2, tone: "orange" },
  { name: "Google Colab", icon: Cloud, tone: "amber" },
  { name: "NumPy", icon: Blocks, tone: "blue" },
  { name: "Pandas", icon: Database, tone: "violet" },
  { name: "Scikit-learn", icon: BrainCircuit, tone: "orange" },
  { name: "TensorFlow", icon: Cpu, tone: "orange" },
  { name: "PyTorch", icon: Cpu, tone: "pink" },
  { name: "Hugging Face", icon: Bot, tone: "amber" },
  { name: "LangChain", icon: GitFork, tone: "green" },
  { name: "Vector DB", icon: Database, tone: "teal" },
  { name: "OpenAI", icon: Sparkles, tone: "teal" },
  { name: "ChatGPT", icon: Bot, tone: "green" },
  { name: "Codex", icon: Cpu, tone: "amber" },
  { name: "Gemini", icon: Sparkles, tone: "blue" },
  { name: "Claude", icon: BrainCircuit, tone: "amber" },
  { name: "VS Code", icon: FileCode2, tone: "blue" },
  { name: "Vercel", icon: Cloud, tone: "zinc" },
  { name: "REST API", icon: Network, tone: "sky" },
  { name: "MERN Stack", icon: Blocks, tone: "emerald" },
  { name: "Prompt Engineering", icon: Sparkles, tone: "orange" },
  { name: "AI Agents", icon: Bot, tone: "violet" },
];

function MarqueeRow({ items, reverse = false }) {
  const loopItems = [...items, ...items];

  return (
    <div className={`tech-marquee-row ${reverse ? "tech-marquee-row-reverse" : ""}`}>
      <div className="tech-marquee-track">
        {loopItems.map(({ name, icon: Icon, image, tone }, index) => (
          <article className={`tech-logo-card tech-tone-${tone}`} key={`${name}-${index}`}>
            <span className="tech-logo-icon">
              {image ? <img src={image} alt="" loading="lazy" /> : <Icon size={24} strokeWidth={1.8} />}
            </span>
            <strong>{name}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function TechStackMarquee() {
  const firstRow = techStack;
  const secondRow = [...techStack].reverse();

  return (
    <section className="tech-stack-section" aria-labelledby="tech-stack-title">
      <div className="tech-stack-heading">
        <p className="section-kicker">Full-Stack Developer | MERN Stack | AI/ML Enthusiast</p>
        <h2 id="tech-stack-title">Tools & Technologies I Work With</h2>
        <p>A growing stack of tools I use to build full-stack, AI-assisted, and real-world web products.</p>
      </div>

      <div className="tech-marquee-panel">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>
    </section>
  );
}
