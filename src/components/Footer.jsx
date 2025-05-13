import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Social media icons
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

// 3D Social Media Icon component
const SocialIcon = ({ position, icon, url, color }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh 
        ref={meshRef} 
        position={position}
        onClick={() => window.open(url, '_blank')}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        <Text
          position={[0, 0, 0.51]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>
      </mesh>
    </Float>
  );
};

// Animated background
const AnimatedBackground = () => {
  const particlesRef = useRef();
  const particles = [];
  
  for (let i = 0; i < 100; i++) {
    particles.push({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ],
      size: Math.random() * 0.05 + 0.01
    });
  }
  
  useFrame((state) => {
    particlesRef.current.rotation.y += 0.001;
    particlesRef.current.rotation.x += 0.0005;
  });
  
  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#6366f1" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

// Main Scene
const Scene = ({ socialLinks }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <AnimatedBackground />
      
      {socialLinks.map((social, index) => (
        <SocialIcon 
          key={index}
          position={[index * 2.5 - (socialLinks.length - 1) * 1.25, 0, 0]} 
          icon={social.icon} 
          url={social.url} 
          color={social.color}
        />
      ))}
    </>
  );
};

const Footer = () => {
  // Replace these with your actual social media links
  const socialLinks = [
    { icon: "GH", url: "https://github.com/yourusername", color: "#333333" },
    { icon: "LI", url: "https://linkedin.com/in/yourusername", color: "#0077b5" },
    { icon: "TW", url: "https://twitter.com/yourusername", color: "#1da1f2" },
    { icon: "IG", url: "https://instagram.com/yourusername", color: "#e1306c" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-[300px] relative mt-20"
    >
      <Canvas className="w-full h-full">
        <Scene socialLinks={socialLinks} />
      </Canvas>
      
      <div className="absolute bottom-0 left-0 w-full text-center pb-4 text-white">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-purple-400 transition-colors">
            <FaGithub />
          </a>
          <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-300 transition-colors">
            <FaTwitter />
          </a>
          <a href={socialLinks[3].url} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-400 transition-colors">
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </motion.div>
  );
};

export default Footer;