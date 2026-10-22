import Section from "../components/Section";
import {
  Component,
  Server,
  Database,
  Plug,
  Boxes,
  Gauge,
  ShieldCheck,
  Languages,
  Users,
} from "lucide-react";

const highlights = [
  {
    Icon: Component,
    title: "Frontend Engineering",
    text: "Building responsive React.js interfaces and reusable components with clean, maintainable architecture.",
  },
  {
    Icon: Server,
    title: "Backend Development",
    text: "Developing server-side applications with Node.js and Express.js to power reliable full-stack experiences.",
  },
  {
    Icon: Database,
    title: "MongoDB & Data Modeling",
    text: "Working with MongoDB and Mongoose to organize application data and support efficient database operations.",
  },
  {
    Icon: Plug,
    title: "REST API Development",
    text: "Developing and integrating REST APIs for authentication, scheduling, content management, and third-party services.",
  },
  {
    Icon: Boxes,
    title: "State Management",
    text: "Managing application state with Redux Toolkit and building modular, reusable React architectures.",
  },
  {
    Icon: Gauge,
    title: "Performance Optimization",
    text: "Improving application responsiveness and page load speed through component and API optimization.",
  },
  {
    Icon: ShieldCheck,
    title: "Authentication & Access Control",
    text: "Implementing authentication flows and role-based access patterns in full-stack applications.",
  },
  {
    Icon: Languages,
    title: "Internationalization",
    text: "Supporting English and Arabic localization across 30+ screens for a more accessible user experience.",
  },
  {
    Icon: Users,
    title: "Agile Collaboration",
    text: "Working with cross-functional teams through sprint planning, daily stand-ups, and peer code reviews.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      title="From database to interface, I build the whole experience."
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="space-y-5 text-base leading-8 text-muted lg:sticky lg:top-28 lg:self-start">
          <p>
            I'm a{" "}
            <span className="font-semibold text-foreground">
              MERN Stack Developer
            </span>{" "}
            who builds complete web applications using MongoDB, Express.js,
            React.js, and Node.js. From crafting responsive user interfaces to
            developing backend APIs and working with databases, I enjoy
            connecting every layer into a cohesive product.
          </p>

          <p>
            My experience includes reusable React components, Redux Toolkit
            state management, REST API development, and performance
            optimization. I've also contributed to English and Arabic
            localization across 30+ screens.
          </p>

          <p>
            I value clean architecture, maintainable code, and thoughtful user
            experiences. Through Agile collaboration and code reviews, I aim to
            build software that works reliably today and remains easy to extend
            tomorrow.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {highlights.map(({ Icon, title, text }) => (
            <li
              key={title}
              className="group rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-line bg-background transition-colors group-hover:border-accent/40">
                <Icon size={20} className="text-accent" aria-hidden="true" />
              </div>

              <h3 className="font-semibold tracking-tight">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
