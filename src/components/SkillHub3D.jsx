import { Suspense, useCallback, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, Line, OrbitControls, RoundedBox } from '@react-three/drei'
import SkillDetailModal from './SkillDetailModal'
import SkillModule3D from './SkillModule3D'
import { skillHubModules } from './skillHubData'

function MechatronicsScene({ selectedModule, onSelect }) {
  return (
    <>
      <color attach="background" args={['#0a1210']} />
      <fog attach="fog" args={['#0a1210', 9, 15]} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 7]} intensity={2.4} color="#d7e5df" castShadow />
      <pointLight position={[-4, -2, 4]} intensity={8} color="#9bea63" distance={9} />

      <group rotation={[-0.08, 0, 0]}>
        {skillHubModules.map((module) => (
          <Line
            key={`${module.id}-connection`}
            points={[[0, 0, -0.18], module.position]}
            color={module.accent}
            lineWidth={0.65}
            transparent
            opacity={selectedModule?.id === module.id ? 0.72 : 0.22}
          />
        ))}

        <group position={[0, 0, 0.08]}>
          <RoundedBox args={[2.05, 1.12, 0.56]} radius={0.14} smoothness={5} castShadow receiveShadow>
            <meshStandardMaterial color="#192722" metalness={0.34} roughness={0.5} />
          </RoundedBox>
          <mesh position={[0, 0, 0.3]}>
            <ringGeometry args={[0.25, 0.34, 32]} />
            <meshBasicMaterial color="#9bea63" transparent opacity={0.8} />
          </mesh>
          <Html transform position={[0, -0.02, 0.32]} distanceFactor={8.5}>
            <div className="core-3d-label">
              <span>CONTROL SYSTEM</span>
              <strong>Mechatronics Core</strong>
            </div>
          </Html>
        </group>

        {skillHubModules.map((module) => (
          <SkillModule3D
            key={module.id}
            module={module}
            selected={selectedModule?.id === module.id}
            onSelect={onSelect}
          />
        ))}

        <mesh position={[0, 0, -0.55]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
          <cylinderGeometry args={[4.45, 4.45, 0.15, 64]} />
          <meshStandardMaterial color="#0d1714" metalness={0.15} roughness={0.85} />
        </mesh>
      </group>

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.075}
        minDistance={6.3}
        maxDistance={11}
        minPolarAngle={Math.PI * 0.27}
        maxPolarAngle={Math.PI * 0.73}
        maxAzimuthAngle={Math.PI * 0.34}
        minAzimuthAngle={-Math.PI * 0.34}
        panSpeed={0.45}
        rotateSpeed={0.55}
        zoomSpeed={0.65}
      />
    </>
  )
}

export default function SkillHub3D() {
  const [selectedModule, setSelectedModule] = useState(null)
  const closeModal = useCallback(() => setSelectedModule(null), [])

  return (
    <>
      <section className="skill-hub skill-hub-3d" aria-labelledby="skill-hub-title">
        <div className="skill-hub-heading">
          <span>INTERACTIVE 3D TECHNICAL OVERVIEW</span>
          <h2 id="skill-hub-title">Mechatronics Lab / Skill Hub</h2>
          <p>Explore the connected systems behind industrial automation.</p>
        </div>
        <div className="skill-canvas" aria-label="Interactive 3D mechatronics skill modules">
          <Canvas shadows dpr={[1, 1.65]} camera={{ position: [0, 0.15, 9.4], fov: 40 }}>
            <Suspense fallback={<Html center><span className="canvas-loading">Loading 3D lab...</span></Html>}>
              <MechatronicsScene selectedModule={selectedModule} onSelect={setSelectedModule} />
            </Suspense>
          </Canvas>
        </div>
        <div className="skill-hub-footer">
          <span>Drag to rotate</span><i />
          <span>Scroll to zoom</span><i />
          <span>Click a module</span>
        </div>
        <div className="skill-hub-access">
          <span>Keyboard access:</span>
          {skillHubModules.map((module) => (
            <button key={module.id} type="button" onClick={() => setSelectedModule(module)}>
              {module.title}
            </button>
          ))}
        </div>
      </section>
      {selectedModule && <SkillDetailModal module={selectedModule} onClose={closeModal} />}
    </>
  )
}
