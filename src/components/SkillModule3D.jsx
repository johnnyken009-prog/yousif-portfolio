import { Html, Line, RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

function EquipmentMaterial({ active, accent, color = '#252d30', metalness = 0.65, roughness = 0.38 }) {
  return (
    <meshStandardMaterial
      color={active ? '#303b3c' : color}
      metalness={metalness}
      roughness={roughness}
      emissive={accent}
      emissiveIntensity={active ? 0.08 : 0}
    />
  )
}

function PlcCabinet({ active, accent }) {
  return (
    <group>
      <RoundedBox args={[1.35, 2.05, 0.72]} radius={0.08} smoothness={4} position={[0, 1.03, 0]} castShadow>
        <EquipmentMaterial active={active} accent={accent} color="#242b2d" />
      </RoundedBox>
      <mesh position={[0, 1.42, 0.38]}>
        <boxGeometry args={[0.92, 0.55, 0.04]} />
        <meshStandardMaterial color="#111719" metalness={0.2} roughness={0.65} />
      </mesh>
      {[0.98, 0.72, 0.46].map((y, index) => (
        <group key={y}>
          <mesh position={[-0.31, y, 0.4]}>
            <boxGeometry args={[0.42, 0.17, 0.05]} />
            <meshStandardMaterial color="#171e20" />
          </mesh>
          <mesh position={[0.18, y, 0.4]}>
            <boxGeometry args={[0.5, 0.17, 0.05]} />
            <meshStandardMaterial color="#171e20" />
          </mesh>
          <mesh position={[0.49, y, 0.435]}>
            <circleGeometry args={[0.027, 16]} />
            <meshBasicMaterial color={index === 0 || active ? accent : '#6e744f'} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 0.13, 0]}>
        <boxGeometry args={[1.52, 0.18, 0.88]} />
        <meshStandardMaterial color="#171d1f" metalness={0.7} roughness={0.4} />
      </mesh>
    </group>
  )
}

function InstrumentTrainer({ active, accent }) {
  return (
    <group>
      <mesh position={[0, 1.08, 0]} castShadow>
        <cylinderGeometry args={[0.64, 0.72, 2.15, 40]} />
        <meshPhysicalMaterial
          color={active ? '#66777a' : '#536164'}
          metalness={0.5}
          roughness={0.22}
          transmission={0.08}
          transparent
          opacity={0.92}
        />
      </mesh>
      <mesh position={[0, 1.08, 0.01]}>
        <cylinderGeometry args={[0.5, 0.5, 1.72, 40]} />
        <meshPhysicalMaterial color="#34505a" transparent opacity={0.32} roughness={0.15} />
      </mesh>
      <mesh position={[0, 0.13, 0]}>
        <cylinderGeometry args={[0.92, 0.92, 0.18, 40]} />
        <meshStandardMaterial color="#202729" metalness={0.75} roughness={0.35} />
      </mesh>
      <mesh position={[0.82, 1.42, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.055, 0.055, 0.55, 16]} />
        <meshStandardMaterial color="#778184" metalness={0.85} roughness={0.25} />
      </mesh>
      <mesh position={[1.08, 1.42, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.23, 0.23, 0.14, 30]} />
        <meshStandardMaterial color="#202729" metalness={0.65} />
      </mesh>
      <mesh position={[1.16, 1.42, 0]} rotation={[0, Math.PI / 2, 0]}>
        <circleGeometry args={[0.17, 28]} />
        <meshBasicMaterial color="#d1d8d7" />
      </mesh>
      <mesh position={[0, 2.28, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.36, 16]} />
        <meshStandardMaterial color="#7c8789" metalness={0.8} />
      </mesh>
      <mesh position={[0, 2.48, 0]}>
        <sphereGeometry args={[0.13, 20, 20]} />
        <meshStandardMaterial color={active ? accent : '#687275'} emissive={accent} emissiveIntensity={active ? 0.35 : 0} />
      </mesh>
      <Line points={[[-0.72, 0.52, 0], [-1.08, 0.52, 0], [-1.08, 1.75, 0], [-0.72, 1.75, 0]]} color="#7c8789" lineWidth={2} />
    </group>
  )
}

function MotorVfd({ active, accent }) {
  return (
    <group>
      <mesh position={[0, 0.55, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.48, 0.48, 1.35, 32]} />
        <EquipmentMaterial active={active} accent={accent} color="#31383a" />
      </mesh>
      {[-0.46, -0.25, -0.04, 0.17, 0.38].map((x) => (
        <mesh key={x} position={[x, 0.55, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.5, 0.035, 8, 30]} />
          <meshStandardMaterial color="#1b2224" metalness={0.75} />
        </mesh>
      ))}
      <mesh position={[0.78, 0.55, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.42, 24]} />
        <meshStandardMaterial color="#929b9c" metalness={0.9} roughness={0.18} />
      </mesh>
      <RoundedBox args={[0.82, 1.18, 0.5]} radius={0.06} smoothness={4} position={[-0.82, 1.38, -0.12]} castShadow>
        <EquipmentMaterial active={active} accent={accent} color="#252c2e" />
      </RoundedBox>
      <mesh position={[-0.82, 1.58, 0.15]}>
        <planeGeometry args={[0.5, 0.28]} />
        <meshBasicMaterial color="#101719" />
      </mesh>
      <mesh position={[-0.82, 1.58, 0.16]}>
        <planeGeometry args={[0.32, 0.08]} />
        <meshBasicMaterial color={active ? accent : '#617266'} />
      </mesh>
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[1.85, 0.2, 1.08]} />
        <meshStandardMaterial color="#1b2224" metalness={0.7} />
      </mesh>
    </group>
  )
}

function FluidPower({ active, accent }) {
  return (
    <group>
      <mesh position={[0, 0.62, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 1.65, 30]} />
        <EquipmentMaterial active={active} accent={accent} color="#454d4f" />
      </mesh>
      <mesh position={[1.08, 0.62, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.09, 0.09, 0.62, 20]} />
        <meshStandardMaterial color="#a7aeaf" metalness={0.95} roughness={0.12} />
      </mesh>
      <RoundedBox args={[0.92, 0.62, 0.62]} radius={0.06} smoothness={4} position={[-0.95, 0.62, 0]} castShadow>
        <EquipmentMaterial active={active} accent={accent} color="#252d2f" />
      </RoundedBox>
      <mesh position={[-1.13, 1.04, 0]}>
        <boxGeometry args={[0.22, 0.28, 0.25]} />
        <meshStandardMaterial color="#1a2123" />
      </mesh>
      <mesh position={[-0.78, 1.04, 0]}>
        <boxGeometry args={[0.22, 0.28, 0.25]} />
        <meshStandardMaterial color="#1a2123" />
      </mesh>
      <Line points={[[-1.13, 1.16, 0], [-1.13, 1.4, 0.15], [-0.4, 1.4, 0.15], [-0.4, 0.86, 0.15]]} color={active ? accent : '#65706f'} lineWidth={2} />
      <Line points={[[-0.78, 1.16, 0], [-0.78, 1.55, -0.15], [0.4, 1.55, -0.15], [0.4, 0.86, -0.15]]} color="#788183" lineWidth={2} />
      <mesh position={[0, 0.13, 0]}>
        <boxGeometry args={[2.7, 0.18, 1.05]} />
        <meshStandardMaterial color="#1b2224" metalness={0.72} />
      </mesh>
    </group>
  )
}

function RobotArm({ active, accent }) {
  return (
    <group>
      <mesh position={[0, 0.22, 0]} castShadow>
        <cylinderGeometry args={[0.62, 0.72, 0.42, 32]} />
        <EquipmentMaterial active={active} accent={accent} color="#303638" />
      </mesh>
      <mesh position={[0, 0.72, 0]} rotation={[0, 0, -0.28]} castShadow>
        <boxGeometry args={[0.46, 1.15, 0.46]} />
        <EquipmentMaterial active={active} accent={accent} color="#3a4244" />
      </mesh>
      <mesh position={[0.16, 1.25, 0]}>
        <sphereGeometry args={[0.34, 24, 24]} />
        <meshStandardMaterial color="#202729" metalness={0.75} roughness={0.3} />
      </mesh>
      <mesh position={[0.62, 1.63, 0]} rotation={[0, 0, -0.88]} castShadow>
        <boxGeometry args={[0.38, 1.18, 0.38]} />
        <EquipmentMaterial active={active} accent={accent} color="#444c4e" />
      </mesh>
      <mesh position={[1.08, 2.03, 0]}>
        <sphereGeometry args={[0.27, 22, 22]} />
        <meshStandardMaterial color="#202729" metalness={0.75} />
      </mesh>
      <mesh position={[1.3, 2.06, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.48, 20]} />
        <meshStandardMaterial color={active ? accent : '#777f81'} metalness={0.8} emissive={accent} emissiveIntensity={active ? 0.15 : 0} />
      </mesh>
      <mesh position={[1.56, 2.06, 0]}>
        <boxGeometry args={[0.08, 0.42, 0.12]} />
        <meshStandardMaterial color="#8e9697" metalness={0.9} />
      </mesh>
    </group>
  )
}

function TroubleshootingTools({ active, accent }) {
  return (
    <group>
      <RoundedBox args={[1.12, 1.55, 0.34]} radius={0.12} smoothness={5} position={[0, 0.85, 0]} rotation={[-0.18, 0, 0]} castShadow>
        <EquipmentMaterial active={active} accent={accent} color="#303739" roughness={0.5} />
      </RoundedBox>
      <mesh position={[0, 1.15, 0.22]} rotation={[-0.18, 0, 0]}>
        <planeGeometry args={[0.7, 0.33]} />
        <meshBasicMaterial color="#a9b3a4" />
      </mesh>
      <mesh position={[0, 0.72, 0.24]} rotation={[-0.18, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.08, 28]} />
        <meshStandardMaterial color="#111719" metalness={0.25} />
      </mesh>
      <mesh position={[-0.25, 0.32, 0.23]} rotation={[-0.18, 0, 0]}>
        <circleGeometry args={[0.045, 18]} />
        <meshBasicMaterial color="#252b2d" />
      </mesh>
      <mesh position={[0.25, 0.32, 0.23]} rotation={[-0.18, 0, 0]}>
        <circleGeometry args={[0.045, 18]} />
        <meshBasicMaterial color="#8d3f3f" />
      </mesh>
      <Line points={[[-0.25, 0.3, 0.18], [-0.75, 0.05, 0.3], [-1.15, 0.35, 0.35]]} color="#252b2d" lineWidth={2} />
      <Line points={[[0.25, 0.3, 0.18], [0.72, 0.04, 0.25], [1.16, 0.38, 0.3]]} color={active ? accent : '#9a4d4d'} lineWidth={2} />
      <mesh position={[-1.18, 0.45, 0.35]} rotation={[0, 0, -0.35]}>
        <cylinderGeometry args={[0.035, 0.065, 0.65, 14]} />
        <meshStandardMaterial color="#22292a" />
      </mesh>
      <mesh position={[1.18, 0.48, 0.3]} rotation={[0, 0, 0.35]}>
        <cylinderGeometry args={[0.035, 0.065, 0.65, 14]} />
        <meshStandardMaterial color="#823c3c" />
      </mesh>
    </group>
  )
}

const equipment = {
  plc: PlcCabinet,
  instrumentation: InstrumentTrainer,
  motor: MotorVfd,
  fluid: FluidPower,
  robot: RobotArm,
  tools: TroubleshootingTools,
}

export default function SkillModule3D({ module, selected, onSelect }) {
  const group = useRef()
  const [hovered, setHovered] = useState(false)
  const active = hovered || selected
  const Equipment = equipment[module.equipment]

  useFrame((_, delta) => {
    if (!group.current) return
    const targetY = module.position[1] + (selected ? 0.18 : hovered ? 0.08 : 0)
    const smoothing = 1 - Math.exp(-delta * 7)
    group.current.position.y += (targetY - group.current.position.y) * smoothing
    group.current.rotation.y += ((active ? -0.04 : 0) - group.current.rotation.y) * smoothing
  })

  const setPointerState = (event, isHovered) => {
    event.stopPropagation()
    setHovered(isHovered)
    document.body.style.cursor = isHovered ? 'pointer' : ''
  }

  return (
    <group
      ref={group}
      position={module.position}
      onClick={(event) => {
        event.stopPropagation()
        onSelect(module)
      }}
      onPointerOver={(event) => setPointerState(event, true)}
      onPointerOut={(event) => setPointerState(event, false)}
    >
      <Equipment active={active} accent={module.accent} />
      {(hovered || selected) && (
        <Html center position={[0, 2.85, 0]} distanceFactor={9}>
          <button
            className="equipment-tooltip"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onSelect(module)
            }}
          >
            <span>{module.shortLabel}</span>
            <strong>Open skill details</strong>
          </button>
        </Html>
      )}
    </group>
  )
}
