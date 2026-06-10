import { useEffect, useRef } from 'react'
import { CheckCircle2, X } from 'lucide-react'

export default function SkillDetailModal({ module, onClose }) {
  const closeButton = useRef()

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', closeOnEscape)
    closeButton.current?.focus()

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  const Icon = module.icon

  return (
    <div className="hub-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="hub-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hub-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button ref={closeButton} className="hub-close" type="button" onClick={onClose} aria-label="Close skill details">
          <X />
        </button>
        <div className="hub-dialog-heading">
          <Icon aria-hidden="true" />
          <div>
            <span>MECHATRONICS LAB MODULE</span>
            <h2 id="hub-dialog-title">{module.title}</h2>
          </div>
        </div>
        <p className="hub-dialog-description">{module.description}</p>
        <div className="hub-dialog-body">
          <div>
            <h3>Hands-on foundation</h3>
            <ul>
              {module.bullets.map((bullet) => (
                <li key={bullet}><CheckCircle2 />{bullet}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Related skills and tools</h3>
            <div className="hub-tags">
              {module.related.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
        <button className="hub-back" type="button" onClick={onClose}>Back to 3D Skill Hub</button>
      </section>
    </div>
  )
}
