export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h3 className="sectionTitle">{title}</h3>
      <div className="sectionBody">{children}</div>
    </section>
  );
}
