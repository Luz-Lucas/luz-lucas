const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-400">© 2026 Lucas Pereira. All rights reserved.</div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-400 transition">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
