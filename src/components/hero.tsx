"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Bounds } from "@react-three/drei";
import { Model } from "./modal";
import { Spotlight } from "./ui/spotlight-new";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative h-screen w-screen  px-10">
      <div className="hidden lg:block">
        <Spotlight  />
      </div>

      <div className="grid h-full grid-cols-1 lg:grid-cols-3 items-center justify-between">
        {/* LEFT SIDE (TEXT) */}
        <div className="col-span-1 flex flex-col gap-4 items-center relative ">
          <h2 className="special_font text-xl lg:text-4xl">Introducing</h2>

          <div className="flex special_font text-yellow-300 text-5xl lg:text-7xl cursor-pointer gap-4">
            <h1 className="hover:scale-150 transition duration-300">C</h1>
            <h1 className="hover:scale-150 transition duration-300">H</h1>
            <h1 className="hover:scale-150 transition duration-300">A</h1>
            <h1 className="hover:scale-150 transition duration-300">T</h1>
            <h1 className="hover:scale-150 transition duration-300">T</h1>
            <h1 className="hover:scale-150 transition duration-300">Y</h1>
          </div>

          <p className="lg:text-xl text-center">
            Chatty — where conversations feel warm, simple, and alive.
          </p>

          <div className="mt-4">
            <button className="bg-white text-black font-bold rounded-full w-36 py-1 hover:bg-linear-to-r hover:from-pink-600 hover:via-purple-700 hover:to-cyan-700 transition duration-300">
              <Link href={"/signup"}>Get Started</Link>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (CANVAS) */}
        <div className="col-span-2 h-full ml-50 hidden  lg:block">
          <h1 className="absolute z-100 top-50 special_font flex"><span>Click and Drag me</span><ArrowRightIcon /></h1>
          <Canvas camera={{ position: [20, 1, 20], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Bounds fit observe margin={1.2}>
              <Center>
                <Model scale={1.5} position={[0, -1.5, 0]} />
              </Center>
            </Bounds>
            <OrbitControls enableZoom={false} enableRotate={true} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
