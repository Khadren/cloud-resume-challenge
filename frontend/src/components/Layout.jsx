import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="page">
      {/* Mobile header */}
      <Header />

      {/* Desktop sidebar */}
      <aside className="sidebarWrap">
        <Sidebar />
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}
