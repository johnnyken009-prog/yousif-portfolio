import { useEffect, useState } from 'react'
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Bot,
  Boxes,
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
  Settings,
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
    items: ['Studio 5000', 'Logix 5000 basics', 'Ladder logic', 'I/O systems', 'Sensors & actuators'],
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
        <span className="brand-mark">YA</span>
        <span>YOUSIF<span className="brand-dot">.</span>CC</span>
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

function ControlPanel() {
  return (
    <div className="control-wrap" aria-label="Animated industrial control system illustration">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="control-panel">
        <div className="panel-top">
          <span>SYSTEM CONTROL</span>
          <div className="status"><i /> ONLINE</div>
        </div>
        <div className="panel-screen">
          <div className="screen-header">
            <span>PLC // MAIN_PROCESS</span>
            <span>RUN</span>
          </div>
          <div className="ladder">
            {[0, 1, 2, 3].map((row) => (
              <div className="ladder-row" key={row}>
                <i />
                <span className={`contact ${row === 1 ? 'off' : ''}`}>] [</span>
                <b />
                <span className="coil">( )</span>
                <i />
              </div>
            ))}
          </div>
          <div className="screen-footer">
            <span>I/O STATUS</span>
            <div>{[1, 1, 0, 1, 0, 1].map((on, i) => <i className={on ? 'on' : ''} key={i} />)}</div>
          </div>
        </div>
        <div className="panel-controls">
          <div className="gauge">
            <div className="gauge-face"><span>72</span><small>PSI</small></div>
            <p>AIR PRESSURE</p>
          </div>
          <div className="panel-buttons">
            <div><i className="green" /><span>RUN</span></div>
            <div><i className="amber" /><span>RESET</span></div>
            <div><i className="red" /><span>STOP</span></div>
          </div>
        </div>
        <div className="screw tl">+</div><div className="screw tr">+</div>
        <div className="screw bl">+</div><div className="screw br">+</div>
      </div>
      <div className="floating-label label-one"><Activity size={14} /> SIGNAL ACTIVE</div>
      <div className="floating-label label-two"><CheckCircle2 size={14} /> SYSTEM NOMINAL</div>
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
            <h1>Yousif<br /><span>Al-Abbasi.</span></h1>
            <p className="hero-title">Mechatronics Student <span>|</span> Automation & Industrial Maintenance</p>
            <p className="hero-intro">
              Hands-on mechatronics student focused on PLCs, motor controls, robotics, pneumatics, hydraulics,
              troubleshooting, and industrial automation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View Projects <ArrowDown size={17} /></a>
              <a className="button secondary" href="/resume.pdf" download>Resume <Download size={17} /></a>
              <a className="text-link" href="#contact">Contact Me <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <ControlPanel />
          <div className="hero-meta">
            <span>BASED IN GEORGIA, USA</span>
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
                controls, robotics, pneumatics and hydraulics, sensors, actuators, and maintenance fundamentals.
                I approach equipment methodically: understand the process, isolate the issue, test safely, and
                document the result.
              </p>
              <p>
                I&apos;m building toward a career as a maintenance, automation, PLC, controls, or mechatronics
                technician where I can keep learning and contribute on the floor from day one.
              </p>
              <div className="target-roles">
                <span>CAREER TARGETS</span>
                <div>
                  {['Maintenance Technician', 'Automation Technician', 'PLC Technician', 'Controls Technician'].map((role) => (
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
                <h3>Process Assistant</h3>
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
              <p>AAS in Mechatronics</p>
              <p>Mechatronics Technician Certificate</p>
              <div className="education-line" />
            </article>
            <article className="education-card reveal">
              <div className="education-icon"><HardHat /></div>
              <span>IN PROGRESS</span>
              <h3>Kennesaw State University</h3>
              <p>Mechatronics Engineering Student</p>
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
              <a className="button outline-light" href="/resume.pdf" download>Download Resume <Download size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">YA</span><span>YOUSIF<span className="brand-dot">.</span>CC</span></a>
        <p>Mechatronics / Automation / Industrial Maintenance</p>
        <div className="footer-links">
          {/* TODO: Replace # with Yousif's LinkedIn and GitHub profile URLs. */}
          <a href="#" aria-label="LinkedIn profile placeholder">LinkedIn <ArrowUpRight size={13} /></a>
          <a href="#" aria-label="GitHub profile placeholder">GitHub <ArrowUpRight size={13} /></a>
          <a href="mailto:yousifabassi2015@gmail.com">Email <ArrowUpRight size={13} /></a>
        </div>
        <span className="copyright">&copy; {new Date().getFullYear()} Yousif Al-Abbasi</span>
      </footer>
    </div>
  )
}

export default App
