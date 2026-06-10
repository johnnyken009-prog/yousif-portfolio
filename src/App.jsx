import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Cpu,
  Download,
  GraduationCap,
  HardHat,
  Mail,
  Menu,
  Ruler,
  Settings,
  SlidersHorizontal,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Education', 'education'],
]

const skills = [
  {
    icon: Cpu,
    number: '01',
    title: 'PLCs & Controls',
    items: ['Studio 5000 / Logix 5000', 'Ladder logic', 'SFC', 'I/O systems', 'Sensors & actuators'],
  },
  {
    icon: Zap,
    number: '02',
    title: 'Electrical & Motor Controls',
    items: ['Wiring & schematics', 'Relays & contactors', 'Motor starters', 'VFD basics', 'Electrical troubleshooting'],
  },
  {
    icon: Settings,
    number: '03',
    title: 'Mechanical Systems',
    items: ['Bearings', 'Alignment', 'Hand tools', 'Measurements', 'Industrial safety'],
  },
  {
    icon: CircleGauge,
    number: '04',
    title: 'Pneumatics & Hydraulics',
    items: ['Cylinders & valves', 'Air pressure', 'Fluid power trainers', 'Flow & pressure', 'System troubleshooting'],
  },
  {
    icon: Bot,
    number: '05',
    title: 'Robotics',
    items: ['FANUC basics', 'Pendant programming', 'Frames & positions', 'Path offsets', 'Basic path logic'],
  },
  {
    icon: Wrench,
    number: '06',
    title: 'Maintenance & Diagnostics',
    items: ['Equipment diagnosis', 'Device testing', 'Reading diagrams', 'Root-cause thinking', 'Work documentation'],
  },
  {
    icon: SlidersHorizontal,
    number: '07',
    title: 'Process Instrumentation',
    items: ['Flow measurement', 'Level measurement', 'Pressure measurement', 'Temperature measurement', 'Four-variable training equipment'],
  },
  {
    icon: Ruler,
    number: '08',
    title: 'Precision Instruments',
    items: ['Dial indicators', 'Measurement checks', 'Alignment verification', 'Component inspection', 'Careful documentation'],
  },
]

const projects = [
  {
    number: '01',
    icon: Cable,
    title: 'MPS Pneumatics & PLC Documentation',
    category: 'Technical Documentation',
    description:
      'Documented pneumatic functionality across five Modular Production System stations, connecting physical devices to their electrical signals and PLC-controlled logic.',
    details: [
      'Mapped cylinders, valves, sensors, actuators, and air supply',
      'Explained each device’s function and operating requirements',
      'Outlined practical testing and troubleshooting steps',
    ],
    tags: ['Pneumatics', 'PLC Logic', 'Documentation', 'MPS'],
    featured: true,
  },
  {
    number: '02',
    icon: Cpu,
    title: 'PLC I/O & Sensor Troubleshooting',
    category: 'Controls Lab',
    description:
      'Worked with PLC inputs, outputs, sensors, actuators, and ladder logic to trace signals and diagnose system behavior.',
    details: ['Input and output mapping', 'Online diagnostics', 'Sensor and actuator testing'],
    tags: ['Studio 5000', 'Logix 5000', 'I/O', 'Ladder Logic'],
  },
  {
    number: '03',
    icon: Zap,
    title: 'Motor Controls & Electrical Troubleshooting',
    category: 'Electrical Lab',
    description:
      'Built and evaluated motor control circuits using contactors, relays, overloads, and electrical schematics with an emphasis on safe troubleshooting.',
    details: ['Control circuit wiring', 'Schematic reading', 'Safe fault isolation'],
    tags: ['Motor Controls', 'Relays', 'Contactors', 'Safety'],
  },
  {
    number: '04',
    icon: CircleGauge,
    title: 'Fluid Power Systems',
    category: 'Fluid Power Lab',
    description:
      'Worked with pneumatic and hydraulic training systems to understand pressure, flow, directional control, and component testing.',
    details: ['Cylinder and valve operation', 'Pressure and flow analysis', 'Systematic testing methods'],
    tags: ['Hydraulics', 'Pneumatics', 'Valves', 'Diagnostics'],
  },
  {
    number: '05',
    icon: Bot,
    title: 'FANUC Robotics Lab',
    category: 'Robotics Training',
    description:
      'Practiced robot pendant programming, taught positions, applied offsets, and developed basic path logic in a supervised lab environment.',
    details: ['Pendant navigation', 'Position teaching', 'Frames and path offsets'],
    tags: ['FANUC', 'Robotics', 'Pendant', 'Path Logic'],
  },
  {
    number: '06',
    icon: Settings,
    title: 'Bearing & Alignment Lab',
    category: 'Mechanical Lab',
    description:
      'Applied industrial maintenance procedures to bearings, alignment, measurement, and mechanical component inspection.',
    details: ['Bearing handling', 'Alignment checks', 'Precision measurement'],
    tags: ['Bearings', 'Alignment', 'Maintenance', 'Measurement'],
  },
]

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

function TechnicalSchematic() {
  return (
    <div className="schematic-wrap" aria-label="Process automation and instrumentation schematic">
      <div className="schematic-heading">
        <span>PROCESS CONTROL // TRAINING SYSTEM</span>
        <span>DWG 01</span>
      </div>
      <svg className="schematic" viewBox="0 0 620 520" role="img" aria-labelledby="schematic-title">
        <title id="schematic-title">Blueprint diagram connecting a PLC to flow, level, pressure, and temperature instrumentation</title>
        <g className="schematic-grid-lines">
          {[80, 160, 240, 320, 400, 480, 560].map((x) => <line key={`x-${x}`} x1={x} y1="0" x2={x} y2="520" />)}
          {[70, 140, 210, 280, 350, 420, 490].map((y) => <line key={`y-${y}`} x1="0" y1={y} x2="620" y2={y} />)}
        </g>

        <g className="process-lines">
          <path d="M82 260H188M290 260H388M484 260H550" />
          <path d="M238 210V122H455V176" />
          <path d="M238 310V402H455V344" />
        </g>

        <g className="instrument instrument-flow">
          <circle cx="82" cy="260" r="34" />
          <path d="M65 260h34M91 250l10 10-10 10" />
          <text x="82" y="315">FLOW</text>
          <text x="82" y="329">FT-101</text>
        </g>

        <g className="plc-block">
          <rect x="188" y="210" width="102" height="100" rx="3" />
          <text x="239" y="247">PLC</text>
          <text x="239" y="266">LOGIX 5000</text>
          <g className="io-points">
            {[226, 244, 262, 280, 298].map((y) => <circle key={y} cx="198" cy={y} r="3" />)}
          </g>
          <path d="M216 286h46M216 294h31" />
        </g>

        <g className="process-vessel">
          <path d="M388 196h96v128h-96zM398 196c0-24 76-24 76 0M398 324c0 24 76 24 76 0" />
          <path className="liquid-line" d="M389 278h94" />
          <text x="436" y="247">PROCESS</text>
          <text x="436" y="263">VESSEL</text>
        </g>

        <g className="instrument instrument-level">
          <circle cx="455" cy="122" r="30" />
          <text x="455" y="119">LT</text>
          <text x="455" y="135">102</text>
          <text x="455" y="80">LEVEL</text>
        </g>

        <g className="instrument instrument-pressure">
          <circle cx="455" cy="402" r="30" />
          <text x="455" y="399">PT</text>
          <text x="455" y="415">103</text>
          <text x="455" y="458">PRESSURE</text>
        </g>

        <g className="instrument instrument-temp">
          <circle cx="550" cy="260" r="34" />
          <path d="M550 242v27M543 269a7 7 0 1 0 14 0" />
          <text x="550" y="315">TEMPERATURE</text>
          <text x="550" y="329">TT-104</text>
        </g>

        <g className="signal-notes">
          <text x="118" y="248">4-20 mA</text>
          <text x="306" y="248">CONTROL SIGNAL</text>
          <text x="298" y="114">LEVEL INPUT</text>
          <text x="298" y="421">PRESSURE INPUT</text>
        </g>
      </svg>
      <div className="schematic-legend">
        <span><i /> PLC CONTROL</span>
        <span><i /> FIELD INSTRUMENTS</span>
        <span><i /> PROCESS LOOP</span>
      </div>
    </div>
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
            <div className="hero-targets">
              <span>Controls Technician</span>
              <span>Instrumentation Technician</span>
            </div>
            <h1>Yousif<br /><span>Al-Abbasi.</span></h1>
            <p className="hero-title">Mechatronics Student <span>|</span> Automation <span>|</span> Industrial Maintenance <span>|</span> Controls <span>|</span> Instrumentation</p>
            <p className="hero-intro">
              Hands-on mechatronics student focused on PLCs, motor controls, robotics, process instrumentation,
              pneumatics, hydraulics, troubleshooting, and industrial automation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View Projects <ArrowDown size={17} /></a>
              <a className="button secondary" href="/resume.pdf" download="Yousif-Al-Abbasi-Resume.pdf">Resume <Download size={17} /></a>
              <a className="text-link" href="#contact">Contact Me <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <TechnicalSchematic />
          <div className="hero-meta">
            <span>BASED IN SNELLVILLE, GA</span>
            <span className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14} /></span>
          </div>
        </section>

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
                  {['Maintenance Technician', 'Automation Technician', 'PLC Technician', 'Controls Technician', 'Instrumentation Technician'].map((role) => (
                    <p key={role}><ChevronRight size={15} /> {role}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading
            eyebrow="TECHNICAL TOOLKIT"
            title="Skills built on the lab floor."
            text="A practical foundation across the electrical, mechanical, and controls systems that keep modern production moving."
          />
          <div className="skills-grid">
            {skills.map(({ icon: Icon, number, title, items }) => (
              <article className="skill-card reveal" key={title}>
                <div className="card-head"><Icon /><span>{number}</span></div>
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
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
