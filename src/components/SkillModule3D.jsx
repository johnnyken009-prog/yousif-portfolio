import { Html, RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export default function SkillModule3D({ module, selected, onSelect }) {
  const group = useRef()
  const [hovered, setHovered] = useState(false)
  const active = hovered || selected

  useFrame((_, delta) => {
    if (!group.current) return
    const targetScale = active ? 1.08 : 1
    const targetZ = module.position[2] + (selected ? 0.42 : 0)
    const smoothing = 1 - Math.exp(-delta * 8)
    group.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, smoothing)
    group.current.position.z += (targetZ - group.current.position.z) * smoothing
  })

  const handlePointer = (event, isHovered) => {
    event.stopPropagation()
    setHovered(isHovered)
    document.body.style.cursor = isHovered ? 'pointer' : ''
  }

  return (
    <group ref={group} position={module.position}>
      <RoundedBox
        args={[1.7, 0.92, 0.42]}
        radius={0.09}
        smoothness={4}
        castShadow
        receiveShadow
        onClick={(event) => {
          event.stopPropagation()
          onSelect(module)
        }}
        onPointerOver={(event) => handlePointer(event, true)}
        onPointerOut={(event) => handlePointer(event, false)}
      >
        <meshStandardMaterial
          color={active ? '#1b2b25' : '#14201c'}
          metalness={0.28}
          roughness={0.58}
          emissive={module.accent}
          emissiveIntensity={active ? 0.11 : 0.025}
        />
      </RoundedBox>
      <mesh position={[0, 0, 0.225]}>
        <planeGeometry args={[1.48, 0.7]} />
        <meshBasicMaterial color="#23342e" transparent opacity={0.42} />
      </mesh>
      <mesh position={[-0.58, 0.25, 0.24]}>
        <boxGeometry args={[0.28, 0.08, 0.025]} />
        <meshBasicMaterial color={module.accent} />
      </mesh>
      <mesh position={[0.59, -0.26, 0.24]}>
        <circleGeometry args={[0.045, 20]} />
        <meshBasicMaterial color={active ? module.accent : '#52615c'} />
      </mesh>
      <Html transform position={[0, -0.02, 0.255]} distanceFactor={8.5}>
        <button
          className="module-3d-label"
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onSelect(module)
          }}
          aria-label={`Open ${module.title} details`}
        >
          <span>{module.shortLabel}</span>
          <strong>{module.title}</strong>
        </button>
      </Html>
    </group>
  )
}
