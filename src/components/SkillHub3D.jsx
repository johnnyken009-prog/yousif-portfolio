import { Suspense, useCallback, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Grid, Html, Line, OrbitControls, RoundedBox } from '@react-three/drei'
import SkillDetailModal from './SkillDetailModal'
import SkillModule3D from './SkillModule3D'
import { skillHubModules } from './skillHubData'

const signalPaths = [
  [[-2.4, 0.38, -0.85], [-1.25, 0.38, -0.85], [-1.25, 0.38, -1.4], [-0.7, 0.38, -1.4]],
  [[0.7, 0.4, -1.45], [1.25, 0.4, -1.45], [1.25, 0.4, -0.75], [1.8, 0.4, -0.75]],
  [[1.9, 0.4, -0.3], [1.9, 0.4, 0.65], [2.15, 0.4, 0.65]],
  [[-1.25, 0.38, -0.45], [-1.25, 0.38, 0.5], [-1.45, 0.38, 0.5]],
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

function MechatronicsScene({ selectedModule, onSelect }) {
  return (
    <>
      <color attach="background" args={['#090d10']} />
      <fog attach="fog" args={['#090d10', 11, 22]} />
      <ambientLight intensity={0.7} />
      <hemisphereLight intensity={0.8} color="#d8e0df" groundColor="#111719" />
      <directionalLight position={[5, 8, 6]} intensity={2.2} color="#e6ecea" castShadow />
      <pointLight position={[-4, 3, 2]} intensity={4} color="#87a69d" distance={10} />
      <pointLight position={[3, 2, -2]} intensity={2.5} color="#9bea63" distance={7} />

      <group position={[0, -1.1, 0]}>
        <Workbench />
        {signalPaths.map((points, index) => (
          <Line
            key={points.flat().join('-')}
            points={points}
            color={index === 1 ? '#9bea63' : '#758486'}
            lineWidth={1.15}
            transparent
            opacity={0.5}
          />
        ))}
        {skillHubModules.map((module) => (
          <SkillModule3D
            key={module.id}
            module={module}
            selected={selectedModule?.id === module.id}
            onSelect={onSelect}
          />
        ))}
      </group>

      <OrbitControls
        makeDefault
        target={[0, 0.25, 0]}
        enableDamping
        dampingFactor={0.07}
        minDistance={7}
        maxDistance={13.5}
        minPolarAngle={Math.PI * 0.22}
        maxPolarAngle={Math.PI * 0.48}
        maxAzimuthAngle={Math.PI * 0.38}
        minAzimuthAngle={-Math.PI * 0.38}
        panSpeed={0.35}
        rotateSpeed={0.5}
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
          <span>INTERACTIVE PROCESS-CONTROL STATION</span>
          <h2 id="skill-hub-title">Mechatronics Workbench</h2>
          <p>Inspect the equipment to see the training and skills behind each system.</p>
        </div>
        <div className="skill-canvas" aria-label="Interactive 3D mechatronics process-control workbench">
          <Canvas shadows dpr={[1, 1.6]} camera={{ position: [7.6, 5.4, 9.2], fov: 38 }}>
            <Suspense fallback={<Html center><span className="canvas-loading">Loading 3D lab...</span></Html>}>
              <MechatronicsScene selectedModule={selectedModule} onSelect={setSelectedModule} />
            </Suspense>
          </Canvas>
          <div className="scene-callout">
            <span>LIVE SKILL EXPLORER</span>
            <strong>Click the PLC module or inspect the process trainer.</strong>
          </div>
        </div>
        <div className="skill-hub-footer">
          <span>Explore the lab: drag, zoom, and click equipment.</span>
        </div>
        <div className="skill-hub-access">
          <span>Equipment shortcuts</span>
          {skillHubModules.map((module) => (
            <button key={module.id} type="button" onClick={() => setSelectedModule(module)}>
              {module.shortLabel}
            </button>
          ))}
        </div>
      </section>
      {selectedModule && <SkillDetailModal module={selectedModule} onClose={closeModal} />}
    </>
  )
}
