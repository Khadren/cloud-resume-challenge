import Layout from "./components/Layout";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function App() {
  return (
    <Layout>
      <Section id="home" title="Mathew Ross">
        <p className="subtle">
          Systems & Cloud Administrator • GTA, Canada
        </p>

        <div className="ctaRow">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn btnGhost" href="#contact">Contact</a>
        </div>
      </Section>

      <Section id="about" title="About">
        <p>
          I’m a systems and cloud administrator focused on modernizing enterprise
          environments—Azure/M365, Windows Server, automation, and security.
        </p>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section id="posts" title="Recent Posts">
        <ul className="list">
          <li><a href="#">Example post title #1</a><span className="meta"> • 4 min read</span></li>
          <li><a href="#">Example post title #2</a><span className="meta"> • 2 min read</span></li>
        </ul>
        <p className="subtle">Tip: you can replace this section with a “Write-ups” page later.</p>
      </Section>

      <Section id="contact" title="Contact">
        <p>
          Best way to reach me is LinkedIn. You can also view my resume and GitHub below.
        </p>
      </Section>

      <footer className="footer">
        © {new Date().getFullYear()} Mathew Ross • Built for the Cloud Resume Challenge
      </footer>
    </Layout>
  );
}