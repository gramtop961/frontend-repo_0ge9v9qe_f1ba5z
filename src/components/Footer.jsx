import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something great</h3>
            <p className="mt-2 text-white/70 max-w-md">
              Open to collaborations, freelance engagements, and product opportunities.
            </p>
            <a
              href="mailto:hello@example.com"
              className="mt-6 inline-block rounded-lg bg-white text-black font-medium px-5 py-3 hover:bg-white/90 transition"
            >
              hello@example.com
            </a>
          </div>
          <div className="md:justify-self-end">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 transition"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 transition"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 transition"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
      </div>
    </footer>
  );
}
