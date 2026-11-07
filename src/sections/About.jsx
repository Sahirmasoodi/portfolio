import Section from "../components/Section";

const highlights = [
  {
    title: "Frontend Engineering",
    text: "Building responsive React.js interfaces and reusable components with clean, maintainable architecture.",
  },
  {
    title: "Backend Development",
    text: "Developing server-side applications with Node.js and Express.js to power reliable full-stack experiences.",
  },
  {
    title: "MongoDB & Data Modeling",
    text: "Working with MongoDB and Mongoose to organize application data and support efficient database operations.",
  },
  {
    title: "REST API Development",
    text: "Developing and integrating REST APIs for authentication, scheduling, content management, and third-party services.",
  },
  {
    title: "State Management",
    text: "Managing application state with Redux Toolkit and building modular, reusable React architectures.",
  },
  {
    title: "Performance Optimization",
    text: "Improving application responsiveness and page load speed through component and API optimization.",
  },
  {
    title: "Authentication & Access Control",
    text: "Implementing authentication flows and role-based access patterns in full-stack applications.",
  },
  {
    title: "Internationalization",
    text: "Supporting English and Arabic localization across 30+ screens for a more accessible user experience.",
  },
  {
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
      <div className="space-y-6 text-xl leading-[1.7] lg:max-w-[62ch]">
        <p className="text-2xl leading-snug">
          I'm a <span className="font-bold">MERN Stack Developer</span> who
          builds complete web applications using MongoDB, Express.js, React.js,
          and Node.js. From crafting responsive user interfaces to developing
          backend APIs and working with databases, I enjoy connecting every
          layer into a cohesive product.
        </p>
        <p>
          My experience includes reusable React components, Redux Toolkit state
          management, REST API development, and performance optimization. I've
          also contributed to English and Arabic localization across 30+
          screens.
        </p>
        <p>
          I value clean architecture, maintainable code, and thoughtful user
          experiences. Through Agile collaboration and code reviews, I aim to
          build software that works reliably today and remains easy to extend
          tomorrow.
        </p>
        <ul className="flex flex-wrap gap-3 pt-2 font-display text-2xl font-bold uppercase">
          {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech, i) => (
            <li
              key={tech}
              className={`border-2 border-accent px-3 py-0.5 text-accent ${["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"][i]}`}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Ledger: ruled rows instead of cards */}
      <ol className="mt-16 border-b-2 border-fg">
        {highlights.map(({ title, text }, i) => (
          <li
            key={title}
            className="grid gap-x-8 gap-y-1 border-t-2 border-fg py-5 transition-colors first:border-t-[6px] first:border-double hover:bg-surface sm:grid-cols-[3rem_minmax(0,16rem)_1fr] sm:px-2"
          >
            <span aria-hidden className="font-mono text-sm text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl font-bold uppercase leading-none">
              {title}
            </h3>
            <p className="max-w-[52ch] text-base text-muted">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
