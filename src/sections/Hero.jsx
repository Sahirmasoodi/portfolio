import { motion } from "framer-motion";
import { Download, FolderOpen, Mail } from "lucide-react";
import { site } from "../data/site";
import SocialLinks from "../components/SocialLinks";
import CodeWindow from "../components/CodeWindow";

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Hero() {
  const onMove = (e) => {
    // Avoid unnecessary mouse effects on touch devices.
    if (e.pointerType === "touch") return;

    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      onPointerMove={onMove}
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-24 sm:pt-28 lg:pb-20"
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 sm:opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--border) / .55) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--border) / .55) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 40%, #000 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 40%, #000 20%, transparent 80%)",
        }}
      />

      {/* Mouse spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 70%) var(--my, 30%), rgb(var(--accent) / .14), transparent 65%)",
        }}
      />

      <div className="container-x relative mx-auto grid w-full min-w-0 grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09 }}
          className="min-w-0"
        >
          <motion.p
            variants={item}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur sm:px-3.5 sm:text-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="break-words">{site.status}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 font-display text-lg font-bold leading-snug sm:mt-8 sm:text-2xl"
          >
            I’m {site.name}, a{" "}
            <span className="text-accent">{site.tagline}</span>.
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 break-words font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
          >
            {site.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg"
          >
            {site.description}
          </motion.p>

          {/* Responsive action buttons */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-9"
          >
            <a
              href="#projects"
              className="btn btn-primary w-full justify-center gap-2 min-[420px]:w-auto"
            >
              <FolderOpen size={16} aria-hidden />
              View my work
            </a>

            <a
              href={site.resumeUrl}
              download
              className="btn btn-ghost w-full justify-center gap-2 min-[420px]:w-auto"
            >
              <Download size={16} aria-hidden />
              Download resume
            </a>

            <a
              href="#contact"
              className="btn btn-ghost w-full justify-center gap-2 min-[420px]:w-auto"
            >
              <Mail size={16} aria-hidden />
              Contact me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-7 sm:mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Code window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative min-w-0 w-full"
        >
          <div className="min-w-0 overflow-hidden rounded-xl">
            <CodeWindow />
          </div>

          {/* Profile card */}
          <div className="absolute -bottom-5 right-2 flex max-w-[calc(100%-1rem)] items-center gap-3 rounded-xl border border-line bg-surface p-2.5 pr-4 shadow-xl sm:-bottom-6 sm:-left-4 sm:right-auto">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-line bg-bg sm:h-12 sm:w-12">
              {site.profileImage ? (
                <img
                  src={site.profileImage}
                  alt={`Portrait of ${site.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="grid h-full w-full place-items-center font-display text-lg font-extrabold text-accent"
                  role="img"
                  aria-label="Profile image placeholder"
                >
                  SI
                </div>
              )}
            </div>

            <div className="min-w-0 text-sm leading-tight">
              <p className="truncate font-semibold">{site.name}</p>
              <p className="truncate text-muted">
                {site.location.split(",")[0]}, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
