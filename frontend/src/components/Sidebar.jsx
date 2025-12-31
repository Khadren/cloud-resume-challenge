const nav = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Posts", href: "#posts" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img className="avatar" src="/avatar.png" alt="Profile" />
        <h2 className="name">Mathew Ross</h2>
        <p className="role">Systems & Cloud Administrator</p>

        <div className="pillRow">
          <span className="pill">Toronto, CA</span>
          <span className="pill">AWS • Azure • M365</span>
        </div>

        <div className="socialRow">
          <a href="#" className="social">Resume</a>
          <a href="#" className="social">GitHub</a>
          <a href="#" className="social">LinkedIn</a>
        </div>
      </div>

      <nav className="sideNav">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="sideLink">
            {n.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
