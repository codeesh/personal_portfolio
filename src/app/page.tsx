export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#95a694]/40 bg-[#111313] text-lg font-semibold text-[#b7c4b5]">
              E
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#b7b9b3]">
                Portfolio
              </p>
              <h1 className="text-xl font-semibold text-[#f2f3f0]">
                Eshtab Rak Mahmud
              </h1>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.25em] text-[#b7b9b3]">
            <a className="transition hover:text-[#f2f3f0]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#f2f3f0]" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-[#f2f3f0]" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-[#f2f3f0]" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-8">
            <p className="text-sm uppercase tracking-[0.4em] text-[#95a694]">
              Product Designer + Frontend Developer
            </p>
            <h2 className="font-[var(--font-display)] text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.05] text-[#f2f3f0]">
              Building precise, minimal digital experiences with a quiet edge.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-[#b7b9b3]">
              I craft interfaces that feel deliberate, calm, and functional. My
              work blends product thinking with clean front-end execution,
              translating complex ideas into simple, focused user journeys.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="rounded-full border border-[#95a694] px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#0b0c0c] transition hover:-translate-y-0.5 hover:bg-[#b7c4b5] hover:text-[#0b0c0c]"
                href="/resume.pdf"
              >
                Resume
              </a>
              <a
                className="rounded-full border border-[#2b2f2d] px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#f2f3f0] transition hover:-translate-y-0.5 hover:border-[#95a694]"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-[#1b1f1d] bg-[#0f1111]/80 p-8">
            <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-[#b7b9b3]">
              <span>Currently</span>
              <span className="text-[#95a694]">Open to work</span>
            </div>
            <p className="text-xl leading-8 text-[#f2f3f0]">
              Designing and building calm, high-utility interfaces for startups
              and product teams.
            </p>
            <div className="grid gap-4 text-sm text-[#b7b9b3]">
              <div className="flex items-center justify-between border-b border-[#1b1f1d] pb-3">
                <span>Location</span>
                <span className="text-[#f2f3f0]">Toronto, Canada</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1b1f1d] pb-3">
                <span>Experience</span>
                <span className="text-[#f2f3f0]">5+ years</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Focus</span>
                <span className="text-[#f2f3f0]">UI Systems, Web Apps</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#95a694]">
              About
            </p>
            <h3 className="mt-4 font-[var(--font-display)] text-4xl text-[#f2f3f0]">
              Quiet confidence, clear outcomes.
            </h3>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#b7b9b3]">
            <p>
              I partner with teams to translate product goals into uncluttered
              interfaces. My approach prioritizes hierarchy, spacing, and
              typography to reduce cognitive load.
            </p>
            <p>
              I enjoy shaping design systems, mapping flows, and building the
              final experience in React and Next.js. The result is an interface
              that feels modern, steady, and human.
            </p>
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#95a694]">
                Selected Work
              </p>
              <h3 className="mt-4 font-[var(--font-display)] text-4xl text-[#f2f3f0]">
                Projects that value clarity.
              </h3>
            </div>
            <p className="max-w-xl text-base text-[#b7b9b3]">
              A few highlights across product design, UX strategy, and front-end
              delivery. Replace these with real case studies once ready.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Sage Finance Platform",
                type: "Product Design / Frontend",
                summary:
                  "Reimagined a fintech dashboard with a modular, analytics-first layout.",
              },
              {
                title: "Studio Booking Suite",
                type: "UX Strategy / UI System",
                summary:
                  "Created a reservation flow that cut booking time by 40%.",
              },
              {
                title: "Care Delivery Portal",
                type: "Design Systems",
                summary:
                  "Built a component library to keep multi-team delivery aligned.",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-6 rounded-3xl border border-[#1b1f1d] bg-[#0f1111]/80 p-8 transition hover:-translate-y-1 hover:border-[#95a694]"
              >
                <div className="text-sm uppercase tracking-[0.35em] text-[#b7b9b3]">
                  {project.type}
                </div>
                <h4 className="text-2xl font-semibold text-[#f2f3f0]">
                  {project.title}
                </h4>
                <p className="text-base leading-7 text-[#b7b9b3]">
                  {project.summary}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#95a694]">
                  View case study
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#95a694]">
              Skills
            </p>
            <h3 className="mt-4 font-[var(--font-display)] text-4xl text-[#f2f3f0]">
              Tools and practices I trust.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Product Design",
              "Design Systems",
              "UX Research",
              "UI Prototyping",
              "Figma",
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Accessibility",
              "Storybook",
              "Framer Motion",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#1b1f1d] bg-[#0f1111]/80 px-5 py-2 text-sm uppercase tracking-[0.3em] text-[#b7b9b3]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-[#1b1f1d] bg-[#0f1111]/80 p-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#95a694]">
                Contact
              </p>
              <h3 className="mt-4 font-[var(--font-display)] text-4xl text-[#f2f3f0]">
                Let us build something quietly bold.
              </h3>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full border border-[#95a694] px-8 py-3 text-sm uppercase tracking-[0.3em] text-[#0b0c0c] transition hover:-translate-y-0.5 hover:bg-[#b7c4b5]"
              href="mailto:hello@yourdomain.com"
            >
              hello@yourdomain.com
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.3em] text-[#b7b9b3]">
            <a className="transition hover:text-[#f2f3f0]" href="#">
              LinkedIn
            </a>
            <a className="transition hover:text-[#f2f3f0]" href="#">
              GitHub
            </a>
            <a className="transition hover:text-[#f2f3f0]" href="#">
              X / Twitter
            </a>
            <a className="transition hover:text-[#f2f3f0]" href="#">
              Email
            </a>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1b1f1d] pt-6 text-sm text-[#b7b9b3]">
          <span>© 2026 Eshtab Rak Mahmud. All rights reserved.</span>
          <span>Designed and built with precision.</span>
        </footer>
      </main>
    </div>
  );
}
