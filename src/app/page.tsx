"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { InputField, TextareaField } from "@/components/portfolio/FormField";
import { Section } from "@/components/portfolio/Section";
import { caseStudies } from "@/content/caseStudies";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { skills } from "@/content/skills";
import { testimonials } from "@/content/testimonials";

const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "case-studies", label: "Case Studies" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const triggerLine = 120;
      let current = "hero";

      for (const item of navSections) {
        const element = document.getElementById(item.id);
        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top <= triggerLine && rect.bottom > triggerLine) {
          current = item.id;
          break;
        }

        if (rect.top <= triggerLine) {
          current = item.id;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="pt-16">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(154,176,209,0.16)] bg-[rgba(7,11,18,0.9)] shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-md">
        <div className="mx-auto flex min-h-[4.2rem] w-[min(1120px,92vw)] items-center justify-between gap-4 md:min-h-[3.85rem]">
          <a
            href="#hero"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[0.65rem] border border-[rgba(154,176,209,0.28)] bg-[rgba(18,28,45,0.7)] text-sm font-bold text-[var(--text)]"
            aria-label="Go to homepage"
          >
            EM
          </a>

          <nav className="flex items-center gap-1 overflow-x-auto py-1" aria-label="Main navigation">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition md:text-sm ${
                  activeSection === item.id
                    ? "border-[rgba(30,200,165,0.7)] bg-gradient-to-r from-[var(--accent)] to-[#20e4bb] text-[#061620]"
                    : "border-transparent text-[#c5d7f1] hover:border-[rgba(154,176,209,0.25)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="grid min-h-[96vh] items-center scroll-mt-24 py-20 md:min-h-0" id="hero">
        <div className="mx-auto grid w-[min(1120px,92vw)] items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.04em] text-[var(--accent)]">
              Web Developer | Graphic Designer | Digital Solutions Provider
            </span>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Hi, I&apos;m</h1>
            <h1 className="mt-2 text-4xl font-bold leading-[1.08] md:text-6xl">Eshtab Rak Mahmud</h1>
            <p className="mt-4 max-w-[58ch] text-base text-[var(--muted)] md:text-lg">
              I build modern websites, create engaging designs, and help businesses
              grow their online presence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#portfolio">
                View My Work
              </a>
              <a className="btn btn-secondary" href="#contact">
                Hire Me
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5" aria-label="social links">
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(154,176,209,0.28)] bg-[rgba(15,22,36,0.8)] text-[var(--muted)] transition hover:border-[rgba(30,200,165,0.62)] hover:text-[var(--text)]"
                href="#"
                aria-label="GitHub"
                title="GitHub"
              >
                G
              </a>
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(154,176,209,0.28)] bg-[rgba(15,22,36,0.8)] text-[var(--muted)] transition hover:border-[rgba(30,200,165,0.62)] hover:text-[var(--text)]"
                href="#"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                L
              </a>
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(154,176,209,0.28)] bg-[rgba(15,22,36,0.8)] text-[var(--muted)] transition hover:border-[rgba(30,200,165,0.62)] hover:text-[var(--text)]"
                href="#"
                aria-label="Facebook"
                title="Facebook"
              >
                F
              </a>
            </div>
          </div>

          <div className="grid aspect-square place-items-center overflow-hidden rounded-[1.1rem] border border-[rgba(154,176,209,0.3)] bg-[linear-gradient(145deg,#0d1728,#16243a)]">
            <Image
              src="/Images/Main.jpeg"
              alt="Eshtab Mahmud"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <Section id="about" title="About Me">
        <p className="max-w-[66ch] text-[var(--muted)]">
            I&apos;m a Computer Science student at AIUB and a frontend developer focused
            on modern web experiences. I provide digital services including website
            development, social media design, and brand support for small businesses.
          </p>
        <p className="mt-4 max-w-[66ch] text-[var(--muted)]">
            My goal is to help small businesses and startups build a strong digital presence.
        </p>
      </Section>

      <Section id="skills" title="Skills" lead="Developer + Designer + Business mindset.">

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <article className="surface-card" key={group.title}>
              <h3 className="mt-0">{group.title}</h3>
              <div className="mt-3.5 grid gap-2.5">
                {group.items.map((item) => (
                  <div className="grid gap-1.5" key={item.name}>
                    <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="h-[0.58rem] overflow-hidden rounded-full bg-[rgba(154,176,209,0.15)]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(120deg,var(--accent-2),var(--accent))]"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="services" title="Services" lead="What clients can hire me for.">

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article className="surface-card" key={service.title}>
              <h3 className="mt-0">{service.title}</h3>
              <ul className="mb-0 pl-[1.1rem] text-[var(--muted)]">
                {service.points.map((point) => (
                  <li key={point} className="mt-1.5">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="portfolio" title="Portfolio" lead="Selected projects and delivery samples.">

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article className="surface-card" key={project.name}>
              <div className="mb-4 h-32 rounded-xl border border-[rgba(154,176,209,0.24)] bg-[linear-gradient(120deg,rgba(47,128,237,0.18),rgba(30,200,165,0.08))]" />
              <h3 className="mt-0">{project.name}</h3>
              <p className="mt-2 text-[var(--muted)]">{project.description}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-[rgba(154,176,209,0.22)] px-3 py-1.5 text-sm text-[var(--muted)]">
                {project.tools}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <a className="btn btn-secondary" href="#">
                  View Project
                </a>
                <a className="btn btn-secondary" href="#">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="case-studies" title="Case Studies" lead="Problem to solution to measurable result.">
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <article className="surface-card" key={`${study.problem}-${index}`}>
              <h3 className="mt-0">Case Study {index + 1}</h3>
              <p className="mb-2">
                <strong>Client Problem:</strong> {study.problem}
              </p>
              <p className="mb-2">
                <strong>Solution:</strong> {study.solution}
              </p>
              <p className="mb-1.5">
                <strong>Result:</strong>
              </p>
              <ul className="m-0 pl-[1.1rem] text-[var(--muted)]">
                {study.result.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="testimonials" title="Testimonials">
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article className="surface-card" key={testimonial.author}>
              <p className="mt-0 text-[1.06rem] text-[var(--text)]">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="mb-0 text-[var(--muted)]">- {testimonial.author}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="cta">
        <div className="surface-card p-8 text-center">
          <h2 className="mb-3 text-[clamp(1.8rem,4vw,2.5rem)]">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto max-w-[66ch] text-[var(--muted)]">
            Need a website, designs, or digital help for your business?
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a className="btn btn-primary" href="#contact">
              Contact Me
            </a>
            <a className="btn btn-secondary" href="#contact">
              Hire Me
            </a>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact" lead="Let's build something valuable for your business.">
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <aside className="surface-card">
            <h3 className="mt-0">Contact Details</h3>
            <div className="grid gap-3 text-[var(--muted)]">
              <p>Email: <a href="mailto:eshtab@example.com">eshtab@example.com</a></p>
              <p>LinkedIn: <a href="#">linkedin.com/in/eshtab</a></p>
              <p>GitHub: <a href="#">github.com/eshtab</a></p>
              <p>Facebook: <a href="#">facebook.com/eshtab</a></p>
              <p>WhatsApp: <a href="#">Chat on WhatsApp</a></p>
            </div>
          </aside>

          <form className="surface-card grid gap-3" action="#" method="post">
            <h3 className="mt-0">Send a Message</h3>
            <InputField id="name" label="Name" />
            <InputField id="email" label="Email" type="email" />
            <TextareaField id="message" label="Message" />

            <button className="btn btn-primary" type="submit">
              Contact Me
            </button>
          </form>
        </div>
      </Section>

      <Section id="future-ventures">
        <div className="surface-card">
          <h2 className="mb-3 text-[clamp(1.8rem,4vw,2.5rem)]">
            Future Ventures
          </h2>
          <p className="max-w-[66ch] text-[var(--muted)]">
            Founder of upcoming digital brand Dumham.
          </p>
        </div>
      </Section>

      <footer className="border-t border-[rgba(154,176,209,0.2)] py-6 text-[var(--muted)]">
        <div className="mx-auto flex w-[min(1120px,92vw)] flex-wrap justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="m-0">© 2026 Eshtab Mahmud - Digital Solutions</p>
        </div>
      </footer>
    </main>
  );
}
