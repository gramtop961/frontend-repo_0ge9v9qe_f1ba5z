import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">
          <span className="text-cyan-400">/</span> dev.portfolio
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <div className="flex items-center gap-4 ml-2">
            <a
              href="https://github.com/"
              aria-label="GitHub"
              className="hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              className="hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-white transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
