import { useEffect, useState } from "react";
import Section from "../components/Section";

// Every point below comes from the resume / project descriptions.
const nodes = [
  {
    letter: "M",
    name: "MongoDB",
    layer: "Database",
    lead: "Where the data lives, modeled with Mongoose.",
    points: [
      "The data layer behind 10+ REST endpoints at Student Diwan.",
      "Stores the data for the Doctor Appointment Booking app, including its three user roles.",
    ],
  },
  {
    letter: "E",
    name: "Express.js",
    layer: "API",
    lead: "The REST layer that receives the request and decides what happens next.",
    points: [
      "Designed and maintained 10+ REST API endpoints at Student Diwan.",
      "Integrated REST APIs with third-party payment, notification and analytics services at Webkraft.",
      "Role-based access for Patient, Doctor and Admin in the Doctor Appointment Booking app.",
    ],
  },
  {
    letter: "R",
    name: "React.js",
    layer: "Client",
    lead: "Where the request starts: the interface people actually use.",
    points: [
      "Built 20+ responsive, reusable UI components with React, JavaScript and Hooks at Webkraft IT Solutions.",
      "Built and optimized 15+ frontend features with React, Redux Toolkit and Tailwind CSS at Student Diwan.",
      "Cut page load time by about 30% at Student Diwan and about 25% at Webkraft.",
      "Implemented English and Arabic localization across 30+ screens.",
    ],
  },
  {
    letter: "N",
    name: "Node.js",
    layer: "Runtime",
    lead: "The JavaScript runtime that keeps the whole stack in one language.",
    points: [
      "Runs the server side of the Student Diwan REST API work, alongside Express.js and MongoDB.",
      "Powers the backend of the Doctor Appointment Booking platform.",
    ],
  },
];

export default function Stack() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % nodes.length),
      4500,
    );
    return () => clearInterval(id);
  }, [playing]);

  const pick = (i) => {
    setActive(i);
    setPlaying(false);
  };
  const n = nodes[active];

  return (
    <Section
      id="stack"
      title="MERN, end to end."
      lead="Follow a request from the browser to the database and see what I’ve built at each step."
    >
      <div
        role="tablist"
        aria-label="MERN stack layers"
        className="grid grid-cols-4 gap-2 sm:gap-4"
      >
        {nodes.map(({ letter, name, layer }, i) => (
          <button
            key={name}
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls="stack-panel"
            onClick={() => pick(i)}
            className={`relative border-2 border-fg px-2 pb-3 pt-6 text-left transition-[transform,box-shadow,background-color,color] duration-200 sm:px-4 ${active === i ? "-translate-y-2 bg-fg text-bg shadow-[6px_6px_0_0_rgb(var(--accent))]" : "hover:-translate-y-1 hover:shadow-hardsm"}`}
          >
            <span
              aria-hidden
              className={`absolute left-1/2 top-2 size-2.5 -translate-x-1/2 rounded-full border-2 border-current transition-colors ${active === i ? "bg-accent" : ""}`}
            />
            <span className="block font-display text-6xl font-black leading-[.8] sm:text-[8rem]">
              {letter}
            </span>
            <span className="mt-3 block font-display text-sm font-bold uppercase leading-tight sm:text-xl">
              {name}
            </span>
            <span className="hidden font-mono text-sm opacity-70 sm:block">
              {layer}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-3 flex-1 border-2 border-fg" aria-hidden>
          <div
            className="h-full bg-accent transition-[width] duration-500 ease-out"
            style={{ width: `${((active + 1) / nodes.length) * 100}%` }}
          />
        </div>
        <button
          onClick={() => setPlaying((p) => !p)}
          className="border-b-2 border-fg font-mono text-sm font-bold hover:border-accent hover:text-accent"
          aria-label={playing ? "Pause automatic tour" : "Play automatic tour"}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      <div
        id="stack-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="mt-10 min-h-[17rem] border-2 border-fg bg-surface p-6 shadow-hard sm:p-8 lg:ml-[14%]"
      >
        <div key={n.name} className="animate-slip">
          <h3 className="font-display text-4xl font-black uppercase leading-none">
            {n.name}{" "}
            <span className="font-mono text-base font-normal normal-case text-muted">
              as the {n.layer.toLowerCase()}
            </span>
          </h3>
          <p className="mt-3 max-w-[56ch] italic text-muted">{n.lead}</p>
          <ul className="mt-5 space-y-3">
            {n.points.map((p) => (
              <li
                key={p}
                className="flex max-w-[64ch] gap-3 border-t border-dashed border-fg/50 pt-3"
              >
                <span aria-hidden className="font-mono text-accent">
                  &gt;
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
