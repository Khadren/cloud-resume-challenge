export default function ProjectCard({ title, desc, tags, links }) {
  return (
    <article className="card">
      <h4 className="cardTitle">{title}</h4>
      <p className="cardDesc">{desc}</p>

      <div className="tagRow">
        {tags?.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="cardLinks">
        {links?.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
    </article>
  );
}
