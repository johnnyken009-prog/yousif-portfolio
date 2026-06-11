import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Grid, Html, Line, OrbitControls, RoundedBox } from '@react-three/drei'
import { Vector3 } from 'three'
import SkillModule3D from './SkillModule3D'
import { skillHubModules } from './skillHubData'

const overviewCamera = new Vector3(7.6, 5.4, 9.2)
const overviewTarget = new Vector3(0, 0.25, 0)

const signalPaths = [
  [[-2.4, 0.38, -0.85], [-1.25, 0.38, -0.85], [-1.25, 0.38, -1.4], [-0.7, 0.38, -1.4]],
  [[0.7, 0.4, -1.45], [1.25, 0.4, -1.45], [1.25, 0.4, -0.75], [1.8, 0.4, -0.75]],
  [[1.9, 0.4, -0.3], [1.9, 0.4, 0.65], [2.15, 0.4, 0.65]],
  [[-1.25, 0.38, -0.45], [-1.25, 0.38, 0.5], [-1.45, 0.38, 0.5]],
]

const utilityNavigation = [
  { label: 'Projects', target: 'projects' },
  { label: 'Resume', target: 'resume' },
  { label: 'Contact', target: 'contact' },
]

function Workbench() {
  return (
    <group>
      <RoundedBox args={[7.5, 0.32, 5.25]} radius={0.12} smoothness={4} position={[0, 0, 0]} receiveShadow castShadow>
        <meshStandardMaterial color="#1b2224" metalness={0.58} roughness={0.5} />
      </RoundedBox>
      <mesh position={[0, 0.17, 0]}>
        <boxGeometry args={[7.1, 0.035, 4.85]} />
        <meshStandardMaterial color="#293133" metalness={0.45} roughness={0.6} />
      </mesh>
      {[[-3.35, -1.2, -2.2], [3.35, -1.2, -2.2], [-3.35, -1.2, 2.2], [3.35, -1.2, 2.2]].map((position) => (
        <mesh key={position.join('-')} position={position}>
          <boxGeometry args={[0.28, 2.4, 0.28]} />
          <meshStandardMaterial color="#161c1e" metalness={0.7} roughness={0.4} />
        </mesh>
      ))}
      <Grid
        position={[0, 0.2, 0]}
        args={[7, 4.75]}
        cellSize={0.25}
        cellThickness={0.22}
        cellColor="#4f5b5d"
        sectionSize={1}
        sectionThickness={0.55}
        sectionColor="#687477"
        fadeDistance={10}
        infiniteGrid={false}
      />
    </group>
  )
}

function CameraDirector({ focusModule, focusRevision, controls }) {
  const { camera } = useThree()
  const moving = useRef(false)
  const destination = useRef(overviewCamera.clone())
  const lookAt = useRef(overviewTarget.clone())

  useEffect(() => {
    if (focusModule) {
      const [x, , z] = focusModule.position
      lookAt.current.set(x, 0.15, z)
      destination.current.set(x + 3.35, 2.9, z + 4.25)
    } else {
      lookAt.current.copy(overviewTarget)
      destination.current.copy(overviewCamera)
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && controls.current) {
      camera.position.copy(destination.current)
      controls.current.target.copy(lookAt.current)
      controls.current.update()
      moving.current = false
      return
    }
    moving.current = true
  }, [camera, controls, focusModule, focusRevision])

  useFrame((_, delta) => {
    if (!moving.current || !controls.current) return
    const smoothing = 1 - Math.exp(-delta * 4.2)
    camera.position.lerp(destination.current, smoothing)
    controls.current.target.lerp(lookAt.current, smoothing)
    controls.current.update()

    if (camera.position.distanceTo(destination.current) < 0.045 && controls.current.target.distanceTo(lookAt.current) < 0.035) {
      moving.current = false
    }
  })

  return null
}

function MechatronicsScene({ compactScene, focusModule, focusRevision, onNavigate }) {
  const controls = useRef()

  return (
    <>
      <color attach="background" args={['#0b1012']} />
      <fog attach="fog" args={['#0b1012', 14, 25]} />
      <ambientLight intensity={1.05} />
      <hemisphereLight intensity={1.15} color="#eef3f1" groundColor="#172022" />
      <directionalLight position={[5, 8, 6]} intensity={2.8} color="#f1f5f3" castShadow />
      <directionalLight position={[-5, 4, 3]} intensity={1.25} color="#91aaa5" />
      <pointLight position={[-4, 3, 2]} intensity={5.5} color="#abc1bc" distance={12} />
      <pointLight position={[3, 2, -2]} intensity={2.1} color="#9bea63" distance={7} />

      <group position={[0, -1.1, 0]}>
        <Workbench />
        {signalPaths.map((points, index) => (
          <Line
            key={points.flat().join('-')}
            points={points}
            color={index === 1 ? '#9bea63' : '#758486'}
            lineWidth={1.15}
            transparent
            opacity={focusModule ? 0.7 : 0.42}
          />
        ))}
        {skillHubModules.map((module) => (
          <SkillModule3D
            key={module.id}
            module={module}
            selected={focusModule?.id === module.id}
            onNavigate={onNavigate}
          />
        ))}
      </group>

      <OrbitControls
        ref={controls}
        makeDefault
        target={[0, 0.25, 0]}
        enableDamping
        dampingFactor={0.07}
        minDistance={6.2}
        maxDistance={13.5}
        minPolarAngle={Math.PI * 0.22}
        maxPolarAngle={Math.PI * 0.48}
        maxAzimuthAngle={Math.PI * 0.38}
        minAzimuthAngle={-Math.PI * 0.38}
        enablePan={!compactScene}
        panSpeed={0.35}
        rotateSpeed={0.5}
        zoomSpeed={0.65}
      />
      <CameraDirector focusModule={focusModule} focusRevision={focusRevision} controls={controls} />
    </>
  )
}

function revealSection(targetId) {
  const section = document.getElementById(targetId)
  if (!section) return
  section.classList.remove('section-arriving')
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.setTimeout(() => section.classList.add('section-arriving'), 250)
  window.setTimeout(() => section.classList.remove('section-arriving'), 1450)
}

export default function SkillHub3D() {
  const [focusModule, setFocusModule] = useState(null)
  const [focusRevision, setFocusRevision] = useState(0)
  const [compactScene] = useState(() => (
    window.matchMedia('(max-width: 680px)').matches
    || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
  ))
  const resetTimer = useRef()

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  const navigateToModule = useCallback((module) => {
    window.clearTimeout(resetTimer.current)
    setFocusModule(module)
    setFocusRevision((revision) => revision + 1)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.setTimeout(() => revealSection(module.sectionId), reducedMotion ? 0 : 850)
    resetTimer.current = window.setTimeout(() => {
      setFocusModule(null)
      setFocusRevision((revision) => revision + 1)
    }, reducedMotion ? 50 : 1400)
  }, [])

  const navigateToUtility = useCallback((target) => {
    window.clearTimeout(resetTimer.current)
    setFocusModule(null)
    setFocusRevision((revision) => revision + 1)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.setTimeout(() => revealSection(target), reducedMotion ? 0 : 450)
  }, [])

  return (
    <section className="skill-hub skill-hub-3d" aria-labelledby="skill-hub-title">
      <div className="skill-hub-heading">
        <span>GUIDED 3D PORTFOLIO NAVIGATION</span>
        <h2 id="skill-hub-title">Mechatronics Workbench</h2>
        <p>Choose a system and move directly into the matching technical chapter.</p>
      </div>
      <div className="skill-canvas" aria-label="Interactive 3D mechatronics portfolio navigation">
        <Canvas shadows={compactScene ? false : 'basic'} dpr={compactScene ? 1 : [1, 1.5]} camera={{ position: [7.6, 5.4, 9.2], fov: 38 }}>
          <Suspense fallback={<Html center><span className="canvas-loading">Loading 3D lab...</span></Html>}>
            <MechatronicsScene
              compactScene={compactScene}
              focusModule={focusModule}
              focusRevision={focusRevision}
              onNavigate={navigateToModule}
            />
          </Suspense>
        </Canvas>
        <div className="scene-callout">
          <span>GUIDED SKILL EXPLORER</span>
          <strong>Select a nameplate to focus the equipment and open its full chapter.</strong>
        </div>
      </div>
      <div className="skill-hub-footer">
        <span>Drag to inspect the station. Select a category to continue.</span>
      </div>
      <nav className="skill-hub-access" aria-label="Technical portfolio shortcuts">
        <span>Explore</span>
        {skillHubModules.map((module) => (
          <button
            className={focusModule?.id === module.id ? 'active' : ''}
            key={module.id}
            type="button"
            onClick={() => navigateToModule(module)}
          >
            {module.title}
          </button>
        ))}
        {utilityNavigation.map((item) => (
          <button key={item.target} type="button" onClick={() => navigateToUtility(item.target)}>
            {item.label}
          </button>
        ))}
      </nav>
    </section>
  )
}
