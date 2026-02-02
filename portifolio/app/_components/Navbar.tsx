export function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-sm uppercase tracking-[0.35em] text-gray-300">
          Lucas Pereira
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full border border-gray-700 text-white hover:border-blue-600 hover:text-blue-400 transition"
        >
          Let’s talk
        </a>
      </div>
    </header>
  );
}
