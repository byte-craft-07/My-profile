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
  Terminal,
  Wind,
} from "lucide-react";

const tools = [
  { name: "React", icon: Atom },
  { name: "JavaScript", icon: Braces },
  { name: "HTML5", icon: CodeXml },
  { name: "CSS3", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Route },
  { name: "MongoDB", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitFork },
  { name: "Python", icon: Terminal },
  { name: "C++", icon: Code2 },
  { name: "REST API", icon: Network },
  { name: "MERN Stack", icon: Blocks },
];

const aiTools = [
  { name: "ByteCraft", image: "/images/bytecraft-logo.svg.png" },
  { name: "AI / ML", icon: BrainCircuit },
  { name: "Machine Learning", icon: Cpu },
  { name: "NumPy", icon: Blocks },
  { name: "Pandas", icon: Database },
  { name: "Scikit-learn", icon: BrainCircuit },
  { name: "OpenAI", icon: Bot },
  { name: "Codex", icon: Code2 },
  { name: "AI Agents", icon: Bot },
  { name: "Prompt Engineering", icon: Braces },
  { name: "VS Code", icon: FileCode2 },
  { name: "Vercel", icon: Cloud },
];

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className={`marquee-window ${reverse ? "is-reverse" : ""}`}>
      <div className="marquee-track">
        {[...items, ...items].map(({ name, icon: Icon, image }, index) => (
          <div className="marquee-tool" key={`${name}-${index}`} aria-hidden={index >= items.length}>
            <span>{image ? <img src={image} alt="" /> : <Icon />}</span>
            <strong>{name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <section className="stack-wall" aria-labelledby="stack-title">
      <div className="stack-intro wall-reveal">
        <span className="eyebrow">Pinned inventory</span>
        <h2 id="stack-title">Tools & Technologies I Work With</h2>
        <p>A growing stack for full-stack, AI-assisted, and real-world web products.</p>
      </div>
      <div className="marquee-board wall-reveal">
        <span className="marquee-tape tape-left" aria-hidden="true" />
        <span className="marquee-tape tape-right" aria-hidden="true" />
        <MarqueeRow items={tools} />
        <MarqueeRow items={aiTools} reverse />
      </div>
    </section>
  );
}
