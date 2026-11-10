import Image from "next/image";

import {
  ArrowRightIcon,
  AwardIcon,
  CheckIcon,
  DownloadIcon,
  ExternalIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Typewriter } from "@/components/typewriter";
import { ABOUT, CERTIFICATIONS, EXPERIENCES, PROFILE, PROJECTS, SKILLS, STATS } from "@/data/profile";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const buttonPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-[#1d4ed8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light";
const buttonGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent-light hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light";

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="font-mono text-sm text-accent-light">
        <span className="text-muted">{"// "}</span>
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </Reveal>
  );
}

function SocialLinks() {
  const links = [
    { href: PROFILE.github, label: "GitHub", icon: <GithubIcon /> },
    ...(PROFILE.linkedin ? [{ href: PROFILE.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> }] : []),
    { href: `mailto:${PROFILE.email}`, label: "E-mail", icon: <MailIcon /> },
  ];
  return (
    <ul className="flex gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={link.label}
            className="grid size-11 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-accent-light hover:text-accent-soft"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Stats({ className }: { className: string }) {
  return (
    <dl className={`w-full max-w-sm grid-cols-3 gap-3 ${className}`}>
      {STATS.map((stat) => (
        <div key={stat.label} className="card rounded-2xl px-3 py-4 text-center">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-display text-2xl font-bold text-accent-light">{stat.value}</dd>
          <dd className="mt-1 text-xs leading-tight text-muted">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}

// -----------------------------------------------------------------------------
export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-24 pb-20 sm:pt-36">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="glow absolute -top-24 left-1/2 -z-10 size-[36rem] -translate-x-1/2" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-navy-900/60 px-4 py-1.5 text-sm text-muted">
            <span className="pulse-dot size-2 rounded-full bg-green-400" aria-hidden="true" />
            {PROFILE.available}
          </p>
          <div className="space-y-3">
            <p className="font-mono text-accent-light">Bonjour, je suis</p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {PROFILE.firstName} <span className="text-accent-light">{PROFILE.lastName}</span>
            </h1>
            <p className="font-display text-xl font-semibold text-ink sm:text-2xl">
              <Typewriter words={PROFILE.roles} />
            </p>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted">{PROFILE.intro}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#projets" className={buttonPrimary}>
              Voir mes projets <ArrowRightIcon className="size-4" />
            </a>
            <a href={PROFILE.cv} download className={buttonGhost}>
              <DownloadIcon className="size-4" /> Télécharger mon CV
            </a>
          </div>
          <Stats className="grid lg:hidden" />
          <div className="flex flex-wrap items-center gap-6">
            <SocialLinks />
            <p className="flex items-center gap-1.5 text-sm text-muted">
              <MapPinIcon className="size-4" /> {PROFILE.location}
            </p>
          </div>
        </div>

        {/* Sur mobile, la photo passe au-dessus du texte. */}
        <div className="order-first flex flex-col items-center gap-10 lg:order-none">
          <div className="float relative size-48 sm:size-64 lg:size-72">
            <div className="photo-ring" aria-hidden="true" />
            <div className="relative size-full overflow-hidden rounded-full border-4 border-navy-950 bg-navy-850">
              <Image
                src={PROFILE.photo}
                alt={`Photo de ${PROFILE.firstName} ${PROFILE.lastName}`}
                fill
                sizes="(max-width: 640px) 192px, 288px"
                priority
                className="object-cover"
              />
            </div>
          </div>
          <Stats className="hidden lg:grid" />
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionTitle eyebrow="à propos" title="De la maintenance industrielle au code" />
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {ABOUT.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 120}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <div>
          <Reveal>
            <h3 className="mb-6 font-display text-xl font-semibold">Formation</h3>
          </Reveal>
          <ol className="relative space-y-6 border-l border-line pl-7">
            {ABOUT.education.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 100} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[2.2rem] size-3.5 rounded-full border-2 border-accent bg-navy-950"
                />
                <p className="font-mono text-xs text-accent-light">{item.period}</p>
                <h4 className="mt-1 font-semibold text-ink">{item.title}</h4>
                <p className="text-sm text-muted">{item.school}</p>
                {item.detail && <p className="mt-1 text-sm text-muted/80">{item.detail}</p>}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
export function Projects() {
  return (
    <section id="projets" className="bg-navy-900/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="projets"
          title="Ce que j'ai construit"
          description="Des applications complètes, testées et déployées. Chaque projet est en ligne et peut être essayé."
        />
        <ul className="space-y-10">
          {PROJECTS.map((project) => (
            <Reveal as="li" key={project.slug}>
              <article className="card card-hover grid overflow-hidden rounded-3xl lg:grid-cols-[1.25fr_1fr]">
                <div className="relative aspect-[16/11] overflow-hidden border-b border-line bg-navy-850 lg:aspect-auto lg:border-r lg:border-b-0">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-5 p-6 sm:p-8">
                  <div>
                    <p className="inline-flex items-center gap-2 rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300">
                      <span className="size-1.5 rounded-full bg-green-400" aria-hidden="true" />
                      {project.status}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-bold">{project.name}</h3>
                    <p className="mt-1 text-accent-soft">{project.tagline}</p>
                  </div>
                  <p className="leading-relaxed text-muted">{project.description}</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-sm text-ink">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent-light" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-md border border-line bg-navy-850 px-2.5 py-1 font-mono text-xs text-accent-soft">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={link.primary ? buttonPrimary : buttonGhost}
                      >
                        {link.label} <ExternalIcon className="size-4" />
                        <span className="sr-only">(nouvel onglet)</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
export function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionTitle
        eyebrow="compétences"
        title="Ma boîte à outils"
        description="Les technologies que j'ai réellement utilisées en projet ou validées en formation."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((group, index) => (
          <Reveal key={group.category} delay={index * 100} className="card card-hover rounded-3xl p-6 sm:p-7">
            <h3 className="mb-5 font-display text-lg font-semibold">{group.category}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-2 rounded-xl border border-line bg-navy-850/80 px-3 py-2 text-sm text-ink transition hover:border-accent-light"
                >
                  {item.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element -- logo SVG distant (devicon), décoratif
                    <img src={`${DEVICON}/${item.icon}.svg`} alt="" width={20} height={20} loading="lazy" className="size-5" />
                  ) : (
                    <span className="size-1.5 rounded-full bg-accent-light" aria-hidden="true" />
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
export function Certifications() {
  return (
    <section id="certifications" className="bg-navy-900/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="certifications"
          title="Formation continue"
          description="Certificats obtenus sur DataCamp dans le cadre de la bourse BHN Academy (ingénierie des données et de l'IA)."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal as="li" key={cert.title} delay={(index % 3) * 100} className="card card-hover flex gap-4 rounded-2xl p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-light">
                <AwardIcon />
              </span>
              <div>
                <h3 className="font-semibold leading-snug text-ink">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.detail}
                </p>
                <p className="mt-1 font-mono text-xs text-accent-light">{cert.date}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
export function Experiences() {
  return (
    <section id="experiences" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionTitle
        eyebrow="expériences"
        title="Mon parcours professionnel"
        description="Mes années dans l'industrie m'ont appris la rigueur, le diagnostic méthodique et le sens de la sécurité : je les applique aujourd'hui au logiciel."
      />
      <ol className="relative space-y-8 border-l border-line pl-8 sm:ml-4">
        {EXPERIENCES.map((experience, index) => (
          <Reveal as="li" key={experience.role} delay={index * 80} className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-6 -left-[2.45rem] size-4 rounded-full border-2 ${
                index === 0 ? "border-accent bg-accent" : "border-accent bg-navy-950"
              }`}
            />
            <article className="card card-hover rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm text-accent-light">{experience.period}</span>
                <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">{experience.type}</span>
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold">{experience.role}</h3>
              <p className="text-sm text-muted">{experience.place}</p>
              <ul className="mt-4 space-y-2">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-ink/90">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-light" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Domaines">
                {experience.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-navy-850 px-2 py-0.5 font-mono text-xs text-accent-soft">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

// -----------------------------------------------------------------------------
export function Contact() {
  const lines = [
    { key: "nom", value: `"${PROFILE.firstName} ${PROFILE.lastName}"` },
    { key: "poste", value: `"${PROFILE.title}"` },
    { key: "ville", value: `"${PROFILE.location}"` },
    { key: "disponible", value: "true" },
  ];

  return (
    <section id="contact" className="bg-navy-900/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="contact"
          title="Travaillons ensemble"
          description="Un poste, une mission freelance ou un projet à discuter ? Écrivez-moi, je réponds rapidement."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="card overflow-hidden rounded-3xl">
            <div className="flex items-center gap-2 border-b border-line bg-navy-850/80 px-5 py-3">
              <span className="size-3 rounded-full bg-red-400/80" aria-hidden="true" />
              <span className="size-3 rounded-full bg-yellow-400/80" aria-hidden="true" />
              <span className="size-3 rounded-full bg-green-400/80" aria-hidden="true" />
              <span className="ml-3 font-mono text-xs text-muted">contact.ts</span>
            </div>
            <pre tabIndex={0} aria-label="Fiche de contact au format code" className="overflow-x-auto p-6 font-mono text-sm leading-7 focus-visible:outline-2 focus-visible:outline-accent-light">
              <code>
                <span className="text-accent-light">const</span> <span className="text-ink">developpeur</span>{" "}
                <span className="text-muted">=</span> {"{"}
                {"\n"}
                {lines.map((line) => (
                  <span key={line.key}>
                    {"  "}
                    <span className="text-accent-soft">{line.key}</span>
                    <span className="text-muted">: </span>
                    <span className={line.value === "true" ? "text-green-300" : "text-amber-200"}>{line.value}</span>
                    <span className="text-muted">,</span>
                    {"\n"}
                  </span>
                ))}
                {"};"}
              </code>
            </pre>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            <a href={`mailto:${PROFILE.email}`} className="card card-hover flex items-center gap-4 rounded-2xl p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-light">
                <MailIcon />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted">E-mail</span>
                <span className="block truncate font-medium text-ink">{PROFILE.email}</span>
              </span>
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="card card-hover flex items-center gap-4 rounded-2xl p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-light">
                <GithubIcon />
              </span>
              <span>
                <span className="block text-sm text-muted">GitHub</span>
                <span className="block font-medium text-ink">github.com/richeTchibouanga</span>
              </span>
            </a>
            {PROFILE.linkedin && (
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="card card-hover flex items-center gap-4 rounded-2xl p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-light">
                  <LinkedinIcon />
                </span>
                <span>
                  <span className="block text-sm text-muted">LinkedIn</span>
                  <span className="block font-medium text-ink">Voir mon profil</span>
                </span>
              </a>
            )}
            <a href={PROFILE.cv} download className={`${buttonPrimary} mt-2`}>
              <DownloadIcon className="size-4" /> Télécharger mon CV (PDF)
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © 2026 {PROFILE.firstName} {PROFILE.lastName}
        </p>
        <p className="font-mono text-xs">Conçu et développé avec Next.js et Tailwind CSS</p>
      </div>
    </footer>
  );
}
