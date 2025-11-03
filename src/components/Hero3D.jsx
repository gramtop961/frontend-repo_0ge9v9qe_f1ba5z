import Spline from "@splinetool/react-spline";
import { ArrowRight, Rocket } from "lucide-react";

export default function Hero3D() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0B0E14] text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* subtle gradient to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            Futuristic • Minimal • 3D
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Building sleek, performant products with a modern 3D touch
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            I craft responsive web experiences focused on clarity, motion, and delightful details — powered by robust engineering.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-5 py-3 transition shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
