import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";

const MoonModel = () => {
  const moonRef = useRef<THREE.Mesh>(null);

  const textureLoader = new THREE.TextureLoader();
  const moonTexture = textureLoader.load(
    "./public/moon/textures/Material.002_diffuse.jpeg",
  );

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[5, 32, 32]} />{" "}
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
};

const InteractiveMoon = () => {
  return (
    <Container fluid className="my-5 py-5 text-light">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="display-4 mb-4">Observa la Luna</h1>
          <p className="lead mb-5">
            Visualiza la Luna antes de tu viaje.
            Gira y explora nuestro modelo 3D.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Card className="bg-moon shadow-lg p-4">
            <div className="moon-container">
              <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.9} />
                  <directionalLight intensity={1} position={[5, 5, 5]} />
                  <MoonModel />
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InteractiveMoon;
