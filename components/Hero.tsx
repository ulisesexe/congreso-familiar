"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#D9D9D9] flex flex-col items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >

        <p className="tracking-[8px] uppercase text-gray-600 mb-4">
          Domingo · Julio 19 · 2026
        </p>

        <h1 className="text-7xl md:text-9xl font-black uppercase text-[#20232C]">
          Congreso
        </h1>

        <h2 className="text-6xl md:text-8xl font-black uppercase text-[#20232C]">
          Familiar
        </h2>

        <p className="mt-10 text-3xl md:text-5xl max-w-4xl">
          Pero yo y mi casa serviremos a Jehová
        </p>

        <p className="mt-4 text-xl">
          Josué 24:15
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button
            className="
            bg-[#20232C]
            text-white
            px-8
            py-4
            rounded-full
            hover:scale-105
            transition
          "
          >
            Confirmar Asistencia
          </button>

          <button
            className="
            border-2
            border-[#20232C]
            px-8
            py-4
            rounded-full
          "
          >
            Ver Ubicación
          </button>

        </div>

      </motion.div>

    </section>
  );
}