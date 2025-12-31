import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Posts", href: "#posts" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="header">
      <div className="headerInner">
        <a className="brand" href="#home">Mathew Ross</a>

        <button className="hamburger" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          ☰
        </button>
      </div>

      {open && (
        <nav className="mobileNav">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mobileNavLink">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
