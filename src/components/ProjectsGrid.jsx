import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Neon Dashboard",
    description: "Analytics interface with real-time charts and dark mode.",
    tags: ["React", "Tailwind", "Charts"],
    link: "#",
  },
  {
    title: "3D Product Showcase",
    description: "Interactive product viewer with 3D scenes and motion.",
    tags: ["Spline", "WebGL", "UX"],
    link: "#",
  },
  {
    title: "AI Content Studio",
    description: "Collaborative editor with AI-assisted workflows.",
    tags: ["FastAPI", "AI", "RTE"],
    link: "#",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
          <p className="mt-2 text-white/60">A snapshot of recent builds, from interactive 3D to data-heavy apps.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition" />
                </div>
                <p className="mt-2 text-sm text-white/60">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-white/70 border border-white/10 bg-white/5 rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
