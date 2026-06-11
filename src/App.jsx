import { useEffect, useState } from 'react'
import SkillHub3D from './components/SkillHub3D'
import { skillHubModules } from './components/skillHubData'
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Download,
  GraduationCap,
  HardHat,
  Mail,
  Menu,
  Ruler,
  SlidersHorizontal,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Resume', 'resume'],
  ['References', 'references'],
]

const recruiterHighlights = [
  ['Hands-on technical training', 'Coursework and labs across electrical, mechanical, fluid-power, robotics, and automation systems.'],
  ['PLC and automation foundation', 'Exposure to Studio 5000 / Logix 5000, Ladder Logic, SFC, I/O, sensors, and actuators.'],
  ['Instrumentation and process measurement', 'Training equipment measuring flow, level, pressure, and temperature.'],
  ['Troubleshooting mindset', 'Methodical use of schematics, test equipment, precision tools, and safe diagnostic steps.'],
]

const projects = [
  {
    number: '01',
    icon: Cable,
    title: 'PLC / MPS Automation System',
    category: 'Automation Lab & Documentation',
    description:
      'Documented pneumatic functionality across five Modular Production System stations, connecting physical devices to their electrical signals and PLC-controlled logic.',
    details: [
      'Mapped cylinders, valves, sensors, actuators, and air supply',
      'Explained each device’s function and operating requirements',
      'Outlined practical testing and troubleshooting steps',
    ],
    tags: ['Pneumatics', 'PLC Logic', 'Documentation', 'MPS'],
    roleFit: 'Automation / PLC Technician',
    featured: true,
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Process Instrumentation Trainer',
    category: 'Instrumentation Lab',
    description:
      'Used process training equipment to study how flow, level, pressure, and temperature are measured and monitored.',
    details: ['Observed four industrial process variables', 'Connected sensor signals to control-system concepts', 'Practiced measurement checks and calibration concepts'],
    tags: ['Flow', 'Level', 'Pressure', 'Temperature'],
    roleFit: 'Instrumentation / Controls Technician',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Motor Controls Lab',
    category: 'Electrical Controls Lab',
    description:
      'Built and evaluated motor control circuits using contactors, relays, overloads, and electrical schematics with an emphasis on safe troubleshooting.',
    details: ['Control circuit wiring', 'Schematic reading', 'Safe fault isolation'],
    tags: ['Motor Controls', 'Relays', 'Contactors', 'Safety'],
    roleFit: 'Electro-Mechanical / Maintenance Technician',
  },
  {
    number: '04',
    icon: CircleGauge,
    title: 'Pneumatics / Hydraulics Lab',
    category: 'Fluid Power Training',
    description:
      'Worked with pneumatic and hydraulic training systems to understand pressure, flow, directional control, and component testing.',
    details: ['Cylinder and valve operation', 'Pressure and flow analysis', 'Systematic testing methods'],
    tags: ['Hydraulics', 'Pneumatics', 'Valves', 'Diagnostics'],
    roleFit: 'Mechatronics / Maintenance Technician',
  },
  {
    number: '05',
    icon: Bot,
    title: 'Robotics Lab',
    category: 'Robotics Training',
    description:
      'Practiced robot pendant programming, taught positions, applied offsets, and developed basic path logic in a supervised lab environment.',
    details: ['Pendant navigation', 'Position teaching', 'Frames and path offsets'],
    tags: ['FANUC', 'Robotics', 'Pendant', 'Path Logic'],
    roleFit: 'Automation / Mechatronics Technician',
  },
  {
    number: '06',
    icon: Ruler,
    title: 'Electrical Troubleshooting & Schematics',
    category: 'Diagnostic Lab',
    description:
      'Practiced a safe, step-by-step approach to wiring verification, diagram reading, measurement, and fault isolation.',
    details: ['Read electrical schematics and wiring diagrams', 'Used test equipment and precision instruments', 'Documented observed faults and testing steps'],
    tags: ['Multimeter', 'Schematics', 'Wiring', 'Troubleshooting'],
    roleFit: 'Controls / Maintenance Technician',
  },
]

const skillProjectLinks = {
  'plc-control': ['PLC / MPS Automation System', 'Automation Lab & Documentation'],
  instrumentation: ['Process Instrumentation Trainer', 'Instrumentation Lab'],
  'motor-controls': ['Motor Controls Lab', 'Electrical Controls Lab'],
  'fluid-power': ['Pneumatics / Hydraulics Lab', 'Fluid Power Training'],
  'robotics-automation': ['Robotics Lab', 'Robotics Training'],
  'industrial-mechanics': ['Electrical Troubleshooting & Schematics', 'Industrial Mechanics / Diagnostic Lab'],
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span>//</span> {eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Yousif Al-Abbasi home">
        <span className="brand-mark" aria-hidden="true">
          <span>YA</span>
          <i />
        </span>
        <span className="brand-name">Yousif<span className="brand-dot">.</span>cc</span>
      </a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
          Let&apos;s Talk <ArrowUpRight size={15} />
        </a>
      </nav>
      <button
        className="menu-button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}

function SkillChapters() {
  return (
    <section className="skill-chapters" id="skills" aria-label="Technical skill chapters">
      <div className="chapter-intro">
        <span>01-06 / TECHNICAL SYSTEMS</span>
        <h2>From signals<br />to machine behavior.</h2>
        <p>
          Six connected areas from my coursework and lab training. Each chapter shows the practical foundation,
          tools, and system thinking I am building for technician work.
        </p>
      </div>
      {skillHubModules.map((module, index) => {
        const Icon = module.icon
        const [projectTitle, projectType] = skillProjectLinks[module.id]
        return (
          <article
            className={`skill-chapter reveal ${index % 2 ? 'chapter-reverse' : ''}`}
            id={module.sectionId}
            key={module.id}
          >
            <div className="chapter-index">
              <span>0{index + 1}</span>
              <Icon aria-hidden="true" />
            </div>
            <div className="chapter-title">
              <p>{module.shortLabel}</p>
              <h2>{module.title}</h2>
              <p className="chapter-description">{module.description}</p>
            </div>
            <div className="chapter-details">
              <span className="chapter-label">HANDS-ON FOUNDATION</span>
              <ul>
                {module.bullets.map((bullet) => (
                  <li key={bullet}><CheckCircle2 size={16} />{bullet}</li>
                ))}
              </ul>
              <div className="chapter-tools">
                {module.related.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
              <a className="chapter-project" href="#projects">
                <span>RELATED LAB EXAMPLE</span>
                <strong>{projectTitle}</strong>
                <small>{projectType}</small>
                <ArrowDown size={18} />
              </a>
            </div>
          </article>
        )
      })}
    </section>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="availability"><i /> AVAILABLE FOR INTERNSHIPS & ENTRY-LEVEL ROLES</div>
            <p className="hero-kicker">MECHATRONICS <span>/</span> AUTOMATION <span>/</span> MAINTENANCE</p>
            <h1>Yousif<br /><span>Al-Abbasi.</span></h1>
            <p className="hero-title">Mechatronics Student focused on Automation, Controls, and Industrial Maintenance</p>
            <p className="hero-specialties">PLC Control <span>•</span> Instrumentation <span>•</span> Motor Controls <span>•</span> Robotics <span>•</span> Fluid Power <span>•</span> Troubleshooting</p>
            <p className="hero-intro">
              Hands-on mechatronics student with training in PLCs, motor controls, robotics, process instrumentation,
              pneumatics, hydraulics, electrical troubleshooting, schematics, and industrial automation.
            </p>
            <div className="hero-targets" aria-label="Target roles">
              {['Mechatronics Technician', 'Automation Technician', 'Controls Technician', 'Instrumentation Technician', 'Maintenance Technician', 'Electro-Mechanical Technician', 'PLC Technician', 'Machine Assembly Technician'].map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View Projects <ArrowDown size={17} /></a>
              <a className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume <ArrowUpRight size={17} /></a>
              <a className="button secondary" href="/resume.pdf" download="Yousif-Al-Abbasi-Resume.pdf">Download Resume <Download size={17} /></a>
              <a className="text-link" href="#contact">Contact Me <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <SkillHub3D />
          <div className="hero-meta">
            <span>BASED IN SNELLVILLE, GA</span>
            <span className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14} /></span>
          </div>
        </section>

        <section className="what-i-bring" aria-labelledby="what-i-bring-title">
          <div className="bring-heading">
            <span className="eyebrow"><span>//</span> RECRUITER SUMMARY</span>
            <h2 id="what-i-bring-title">What I Bring</h2>
          </div>
          <div className="bring-grid">
            {recruiterHighlights.map(([title, text], index) => (
              <article className="bring-card reveal" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <SkillChapters />

        <section className="section about" id="about">
          <div className="about-layout">
            <SectionHeading eyebrow="ABOUT ME" title={<>Built to understand<br />how things work.</>} />
            <div className="about-copy reveal">
              <p className="lead">
                I&apos;m a mechatronics student who learns by doing: wiring circuits, tracing signals,
                reading schematics, programming controls, and understanding the mechanics behind a system.
              </p>
              <p>
                My hands-on training spans industrial automation, electrical troubleshooting, PLCs, motor
                controls, process instrumentation, robotics, pneumatics and hydraulics, sensors, actuators,
                precision instruments, and maintenance fundamentals. I have trained with equipment measuring
                the four core process variables: flow, level, pressure, and temperature.
                I approach equipment methodically: understand the process, isolate the issue, test safely, and
                document the result.
              </p>
              <p>
                I&apos;m building toward a career as a maintenance, automation, PLC, controls, instrumentation,
                or mechatronics technician where I can keep learning and contribute on the floor from day one.
              </p>
              <div className="target-roles">
                <span>CAREER TARGETS</span>
                <div>
                  {['Maintenance Technician', 'Automation Technician', 'PLC Technician', 'Controls Technician', 'Instrumentation Technician', 'Electro-Mechanical Technician', 'Machine Assembly Technician'].map((role) => (
                    <p key={role}><ChevronRight size={15} /> {role}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            eyebrow="SELECTED LAB WORK"
            title="Technical work, documented."
            text="Academic projects and hands-on training focused on real industrial components, practical diagnostics, and clear technical thinking."
          />
          <div className="projects-grid">
            {projects.map(({ icon: Icon, ...project }) => (
              <article className={`project-card reveal ${project.featured ? 'featured' : ''}`} key={project.title}>
                <div className="project-top">
                  <span className="project-number">PROJECT / {project.number}</span>
                  <Icon />
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul>{project.details.map((detail) => <li key={detail}><CheckCircle2 size={15} />{detail}</li>)}</ul>
                <p className="project-role"><span>ROLE FIT</span>{project.roleFit}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading eyebrow="EXPERIENCE" title="Reliable in real operations." />
          <div className="timeline">
            <article className="timeline-item reveal">
              <div className="timeline-icon"><BriefcaseBusiness /></div>
              <div className="timeline-date">OPERATIONS & LEADERSHIP</div>
              <div>
                <h3>Process Guide</h3>
                <h4>Amazon</h4>
                <p>Supported daily workflow, coordinated team priorities, helped resolve process issues, and communicated operational needs in a fast-moving environment.</p>
              </div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-icon"><BriefcaseBusiness /></div>
              <div className="timeline-date">SERVICE & COMMUNICATION</div>
              <div>
                <h3>Service Advocate</h3>
                <h4>Target</h4>
                <p>Built a record of reliability, clear communication, attention to detail, and calm problem-solving while helping customers and supporting store operations.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section education-section" id="education">
          <SectionHeading eyebrow="EDUCATION" title="Engineering the next step." />
          <div className="education-grid">
            <article className="education-card reveal">
              <div className="education-icon"><GraduationCap /></div>
              <span>COMPLETED</span>
              <h3>Gwinnett Technical College</h3>
              <p>AAS in Mechatronics, 2026</p>
              <p>Mechatronics Technician Certificate, 2026</p>
              <div className="education-line" />
            </article>
            <article className="education-card reveal">
              <div className="education-icon"><HardHat /></div>
              <span>INCOMING FALL 2026</span>
              <h3>Kennesaw State University</h3>
              <p>B.S. Mechatronics Engineering</p>
              <p>Expected 2029</p>
              <div className="education-line" />
            </article>
          </div>
        </section>

        <section className="section references-section" id="references">
          <div className="references-layout">
            <SectionHeading
              eyebrow="REFERENCES"
              title="Professional context, available when needed."
              text="References are available upon request for recruiters and hiring teams. Academic, technical training, and workplace references can be provided when needed."
            />
            <div className="references-card reveal">
              <span>FOR RECRUITERS & HIRING TEAMS</span>
              <h3>References available upon request.</h3>
              <p>To protect personal contact information, reference details are shared directly during the hiring process.</p>
              <a className="button secondary" href="#contact">Request References <ArrowDown size={17} /></a>
            </div>
          </div>
        </section>

        <section className="section resume-section" id="resume">
          <div className="resume-number" aria-hidden="true">CV</div>
          <div className="resume-copy reveal">
            <span className="eyebrow"><span>//</span> RESUME</span>
            <h2>A practical record of training, work, and education.</h2>
            <p>
              Review my current resume for education, technical coursework, operations experience, and the
              technician roles I am pursuing.
            </p>
            <div className="resume-actions">
              <a className="button primary" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume <ArrowUpRight size={17} /></a>
              <a className="button secondary" href="/resume.pdf" download="Yousif-Al-Abbasi-Resume.pdf">Download Resume <Download size={17} /></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid" />
          <div className="contact-content reveal">
            <span className="eyebrow"><span>//</span> CONTACT</span>
            <h2>Let&apos;s build something<br /><em>that works.</em></h2>
            <p>
              I&apos;m interested in technician roles, internships, and entry-level opportunities in
              mechatronics, automation, controls, and industrial maintenance.
            </p>
            <a className="email-link" href="mailto:yousifabassi2015@gmail.com">
              <span><Mail /> EMAIL ME</span>
              yousifabassi2015@gmail.com
              <ArrowUpRight />
            </a>
            <div className="contact-actions">
              <a className="button light" href="mailto:yousifabassi2015@gmail.com">Start a Conversation <ArrowUpRight size={17} /></a>
              <a className="button outline-light" href="/resume.pdf" download="Yousif-Al-Abbasi-Resume.pdf">Download Resume <Download size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><span>YA</span><i /></span>
          <span className="brand-name">Yousif<span className="brand-dot">.</span>cc</span>
        </a>
        <p>Mechatronics / Automation / Industrial Maintenance</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/yousifala/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
          <a href="https://github.com/johnnyken009-prog" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
          <a href="mailto:yousifabassi2015@gmail.com">Email <ArrowUpRight size={13} /></a>
        </div>
        <span className="copyright">&copy; {new Date().getFullYear()} Yousif Al-Abbasi</span>
      </footer>
    </div>
  )
}

export default App
