import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React from 'react'
import { useRef } from 'react'

const HeroCamera = ({children, isMobile}) => {

  const groupRef = useRef();

  useFrame((state,delta) =>{
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)
    if(!isMobile){
      easing.dampE(groupRef.current.rotation, [-state.pointer.y/3, -state.pointer.x/5, 0 ], 0.25, delta)
      // 0.25 is smoothing value effect

  
    }
  })
  
  return (
    <group ref={groupRef} scale={1}>{children}</group>
  )
}

export default HeroCamera