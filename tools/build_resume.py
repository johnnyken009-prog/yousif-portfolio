from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "resume.pdf"
GREEN = colors.HexColor("#23604B")
DARK = colors.HexColor("#1C2623")
MUTED = colors.HexColor("#53605C")

styles = getSampleStyleSheet()
base = ParagraphStyle(
    "Base",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.25,
    leading=9.7,
    textColor=DARK,
    spaceAfter=1.5,
)
summary_style = ParagraphStyle(
    "Summary",
    parent=base,
    fontSize=8.5,
    leading=10.2,
    spaceAfter=1,
)
name_style = ParagraphStyle(
    "Name",
    parent=base,
    fontName="Helvetica-Bold",
    fontSize=19,
    leading=21,
    alignment=TA_CENTER,
    spaceAfter=1,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=base,
    fontSize=7.7,
    leading=9,
    alignment=TA_CENTER,
    textColor=MUTED,
    spaceAfter=3,
)
section_style = ParagraphStyle(
    "Section",
    parent=base,
    fontName="Helvetica-Bold",
    fontSize=9.2,
    leading=10,
    textColor=GREEN,
    spaceBefore=3,
    spaceAfter=1,
)
role_style = ParagraphStyle(
    "Role",
    parent=base,
    fontSize=8.25,
    leading=9.5,
    spaceBefore=1,
    spaceAfter=1,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=base,
    fontSize=8.05,
    leading=9.3,
    leftIndent=11,
    firstLineIndent=-7,
    bulletIndent=2,
    spaceAfter=1,
)
skill_style = ParagraphStyle(
    "Skill",
    parent=base,
    fontSize=8.05,
    leading=9.3,
    spaceAfter=1,
)


def section_heading(title):
    return KeepTogether(
        [
            Paragraph(title.upper(), section_style),
            HRFlowable(width="100%", thickness=0.75, color=GREEN, spaceBefore=0, spaceAfter=2),
        ]
    )


def bullet(text):
    return Paragraph(text, bullet_style, bulletText="•")


def role(title, company, dates):
    return Paragraph(
        f"<b>{title} | {company}</b>"
        f"<font color='#53605C'>&nbsp;&nbsp; | &nbsp;&nbsp;{dates}</font>",
        role_style,
    )


story = [
    Paragraph("YOUSIF AL-ABBASI", name_style),
    Paragraph(
        "Snellville, GA&nbsp;&nbsp; | &nbsp;&nbsp;770-589-4645&nbsp;&nbsp; | &nbsp;&nbsp;"
        "yousifabassi2015@gmail.com&nbsp;&nbsp; | &nbsp;&nbsp;linkedin.com/in/yousifala"
        "&nbsp;&nbsp; | &nbsp;&nbsp;yousif.cc",
        contact_style,
    ),
    section_heading("Professional Summary"),
    Paragraph(
        "Recent A.A.S. Mechatronics graduate and incoming B.S. Mechatronics Engineering student "
        "with hands-on training across electrical, mechanical, automation, and fluid-power systems. "
        "Experienced in PLC and I/O troubleshooting, motor controls, sensors and actuators, pneumatics, "
        "hydraulics, robotics, preventive-maintenance fundamentals, and technical documentation. Brings "
        "reliable operations experience, clear team communication, and a safety-focused approach to "
        "learning and supporting industrial equipment.",
        summary_style,
    ),
    section_heading("Education"),
    role(
        "B.S. Mechatronics Engineering",
        "Kennesaw State University",
        "Incoming Fall 2026 | Expected 2029",
    ),
    role(
        "Associate of Applied Science in Mechatronics",
        "Gwinnett Technical College",
        "2026",
    ),
    bullet("Mechatronics Technician Certificate, 2026"),
    section_heading("Technical Skills"),
]

skills = [
    ("PLCs &amp; Controls", "Studio 5000/Logix 5000, ladder logic, station I/O, sensors, actuators, process sequences"),
    ("Electrical &amp; Motor Controls", "AC/DC circuits, schematics, wiring diagrams, relays, contactors, starters, fuses, VFD fundamentals"),
    ("Mechanical &amp; Maintenance", "Hand tools, bearing replacement, shaft alignment, dial indicators, component inspection, equipment testing"),
    ("Fluid Power &amp; Robotics", "Pneumatics, hydraulics, cylinders, valves, pressure/flow concepts, FANUC pendant programming and path basics"),
    ("Safety &amp; Documentation", "PPE, lockout/tagout concepts, industrial safety, written procedures, test results, troubleshooting documentation"),
]
for label, detail in skills:
    story.append(Paragraph(f"<b>{label}:</b> {detail}", skill_style))

story.extend(
    [
        section_heading("Hands-On Technical Training"),
        bullet(
            "Programmed and troubleshot PLC training stations using ladder logic, Studio 5000/Logix 5000, "
            "station I/O, sensors, outputs, and production-style sequences."
        ),
        bullet(
            "Built, wired, tested, and diagnosed AC/DC and motor-control circuits using relays, starters, "
            "fuses, sensors, actuators, electrical schematics, and test equipment."
        ),
        bullet(
            "Troubleshot mechanical, electrical, pneumatic, hydraulic, and PLC training systems while "
            "following written procedures and lab safety requirements."
        ),
        bullet(
            "Practiced maintenance fundamentals through bearing replacement, shaft alignment, dial-indicator "
            "measurements, component inspection, and equipment testing."
        ),
        bullet(
            "Completed FANUC robotics and fluid-power labs involving pendant programming, positions, offsets, "
            "cylinders, valves, pressure, flow, and sequence troubleshooting."
        ),
        section_heading("Work Experience"),
        role("Process Guide", "Amazon", "2023-2024"),
        bullet(
            "Supported fast-paced distribution operations by monitoring workflow, assigning daily tasks, "
            "and helping team members meet productivity, quality, and safety goals."
        ),
        bullet(
            "Communicated operational issues, adjusted to changing priorities, and maintained accurate, "
            "organized work areas."
        ),
        role("Service Advocate", "Target", "2024-2025"),
        bullet(
            "Resolved customer questions and service issues through clear communication, attention to detail, "
            "and consistent procedure-following."
        ),
        bullet(
            "Supported team coverage, daily organization, and task completion in a high-volume environment."
        ),
        section_heading("Additional"),
        Paragraph(
            "<b>Languages:</b> English and Arabic&nbsp;&nbsp; | &nbsp;&nbsp;"
            "<b>Strengths:</b> Troubleshooting, teamwork, organization, adaptability, safety awareness, "
            "and technical communication",
            skill_style,
        ),
        Spacer(1, 1),
    ]
)

document = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=letter,
    rightMargin=0.58 * inch,
    leftMargin=0.58 * inch,
    topMargin=0.42 * inch,
    bottomMargin=0.4 * inch,
    title="Yousif Al-Abbasi - General Mechatronics Resume",
    author="Yousif Al-Abbasi",
    subject="Mechatronics, automation, maintenance, and engineering resume",
)
document.build(story)
