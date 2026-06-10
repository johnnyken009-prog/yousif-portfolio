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
  CircuitBoard,
  Cpu,
  Download,
  GraduationCap,
  HardHat,
  Mail,
  Menu,
  Play,
  Ruler,
  Settings,
  SlidersHorizontal,
  SquareActivity,
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

const simulatorStages = [
  {
    title: 'Sensors / Inputs',
    shortTitle: 'Inputs',
    icon: SlidersHorizontal,
    note: 'Hands-on lab training with sensors, PLC inputs, and process instrumentation measurement equipment.',
    items: [
      ['Flow', 'Hands-on process instrumentation training with flow measurement.'],
      ['Level', 'Lab experience working with equipment used to measure process level.'],
      ['Pressure', 'Hands-on training with pressure measurement and fluid-power systems.'],
      ['Temperature', 'Process instrumentation training with temperature measurement equipment.'],
      ['Proximity / Photoelectric', 'Experience testing sensors and tracing their input signals to PLC I/O.'],
    ],
  },
  {
    title: 'PLC Logic',
    shortTitle: 'PLC',
    icon: CircuitBoard,
    note: 'PLC programming exposure using Ladder Logic, SFC, and Studio 5000 / Logix 5000.',
    items: [
      ['Studio 5000 / Logix 5000', 'Hands-on college lab exposure using Studio 5000 / Logix 5000.'],
      ['Ladder Logic', 'Programmed and reviewed ladder logic for training-station sequences.'],
      ['SFC', 'Training exposure to Sequential Function Chart concepts for step-based automation.'],
      ['I/O Troubleshooting', 'Traced PLC inputs and outputs to diagnose sensors, actuators, and sequence behavior.'],
    ],
  },
  {
    title: 'Outputs / Actuators',
    shortTitle: 'Outputs',
    icon: Settings,
    note: 'Hands-on training connecting PLC outputs to electrical, mechanical, and pneumatic devices.',
    items: [
      ['Motor', 'Built and tested motor-control circuits in a supervised lab environment.'],
      ['VFD', 'Training exposure to VFD fundamentals and motor-speed control concepts.'],
      ['Solenoid Valve', 'Worked with electrically controlled valves in pneumatic training systems.'],
      ['Pneumatic Cylinder', 'Tested cylinder operation, air supply, valves, sensors, and sequence behavior.'],
      ['Actuator', 'Worked with actuators as PLC-controlled outputs in automation labs.'],
    ],
  },
  {
    title: 'Testing / Tools',
    shortTitle: 'Testing',
    icon: SquareActivity,
    note: 'Methodical lab troubleshooting using measurement tools, diagrams, testing procedures, and documentation.',
    items: [
      ['Multimeter', 'Used electrical test equipment while building and diagnosing training circuits.'],
      ['Precision Instruments', 'Used dial indicators and precision checks for alignment and mechanical inspection.'],
      ['Schematics', 'Read electrical schematics, wiring diagrams, and equipment documentation.'],
      ['Calibration / Troubleshooting', 'Practiced systematic testing, measurement checks, fault isolation, and documentation.'],
    ],
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

function MechatronicsSimulator() {
  const [activeStage, setActiveStage] = useState(0)
  const [selectedNote, setSelectedNote] = useState(simulatorStages[0].note)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return undefined

    const timer = window.setTimeout(() => {
      if (activeStage < simulatorStages.length - 1) {
        const nextStage = activeStage + 1
        setActiveStage(nextStage)
        setSelectedNote(simulatorStages[nextStage].note)
      } else {
        setRunning(false)
      }
    }, activeStage === simulatorStages.length - 1 ? 1200 : 900)

    return () => window.clearTimeout(timer)
  }, [activeStage, running])

  const selectStage = (index, note = simulatorStages[index].note) => {
    setRunning(false)
    setActiveStage(index)
    setSelectedNote(note)
  }

  const runSequence = () => {
    setActiveStage(0)
    setSelectedNote(simulatorStages[0].note)
    setRunning(true)
  }

  return (
    <section className="simulator" aria-labelledby="simulator-title">
      <div className="simulator-header">
        <div>
          <span className="simulator-kicker">INTERACTIVE TECHNICAL OVERVIEW</span>
          <h2 id="simulator-title">Mechatronics Control Simulator</h2>
        </div>
        <div className={running ? 'simulator-status running' : 'simulator-status'}>
          <i />
          {running ? `STEP ${activeStage + 1} / 4` : 'READY'}
        </div>
      </div>

      <div className="simulator-flow" aria-label="Sensors and inputs flow to PLC logic, outputs and actuators, then testing and troubleshooting">
        {simulatorStages.map(({ title, shortTitle, icon: Icon, items }, index) => (
          <div className="simulator-stage-wrap" key={title}>
            <article className={`simulator-stage ${activeStage === index ? 'active' : ''}`}>
              <button
                className="stage-heading"
                type="button"
                onClick={() => selectStage(index)}
                aria-pressed={activeStage === index}
              >
                <span className="stage-index">0{index + 1}</span>
                <Icon aria-hidden="true" />
                <span>
                  <small>{shortTitle}</small>
                  <strong>{title}</strong>
                </span>
              </button>
              <div className="stage-items">
                {items.map(([label, note]) => (
                  <button
                    type="button"
                    key={label}
                    onClick={() => selectStage(index, note)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </article>
            {index < simulatorStages.length - 1 && (
              <div className={`flow-connector ${activeStage > index || (running && activeStage === index) ? 'passed' : ''}`} aria-hidden="true">
                <i />
                <ChevronRight />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="simulator-readout">
        <div className="readout-label">
          <span>SKILL NOTE</span>
          <b>0{activeStage + 1}</b>
        </div>
        <p aria-live="polite">{selectedNote}</p>
      </div>

      <button className="run-sequence" type="button" onClick={runSequence} disabled={running}>
        <Play size={14} fill="currentColor" />
        {running ? 'Sequence Running' : 'Start Sequence'}
      </button>
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
          <MechatronicsSimulator />
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
