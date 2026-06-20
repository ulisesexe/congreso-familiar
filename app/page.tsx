"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#D9D9D9] text-[#20232C]">

{/* HERO */}

<section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#ECECEC] via-[#D9D9D9] to-white flex items-center justify-center px-5 py-20">

{/* Glow principal */}

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/40 blur-3xl rounded-full" />

<motion.div
initial={{ opacity: 0, y: 60 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="relative z-10 w-full max-w-7xl text-center"

>

{/* Badge */}
<div
  className="
    inline-flex
    items-center
    gap-3
    px-5
    py-3
    rounded-full
    bg-white/80
    backdrop-blur-xl
    shadow-xl
    border
    border-black/5
  "
>
  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

  <span
    className="
      text-xs
      md:text-sm
      uppercase
      tracking-[4px]
      font-medium
    "
  >
    Congreso Familiar 2026
  </span>
</div>

{/* TITULO */}
<div className="mt-8">

  <h1
    className="
      text-[4rem]
      sm:text-[5rem]
      md:text-[8rem]
      lg:text-[11rem]
      font-black
      uppercase
      leading-[0.9]
      tracking-tight
      text-[#20232C]
    "
  >
    Congreso
  </h1>

  <h2
    className="
      text-[3.5rem]
      sm:text-[4.5rem]
      md:text-[7rem]
      lg:text-[9rem]
      font-black
      uppercase
      leading-[0.9]
      bg-gradient-to-r
      from-[#20232C]
      via-[#4B5563]
      to-[#20232C]
      bg-clip-text
      text-transparent
    "
  >
    Familiar
  </h2>

</div>

{/* Línea */}
<div className="w-24 md:w-40 h-[3px] bg-[#20232C] mx-auto mt-6 rounded-full" />

{/* Tema */}
<div className="mt-10">

  <p
    className="
      uppercase
      tracking-[6px]
      text-sm
      text-gray-500
      mb-5
    "
  >
    Tema
  </p>

  <h3
    className="
      text-2xl
      sm:text-3xl
      md:text-5xl
      font-light
      leading-tight
      text-[#20232C]
      max-w-4xl
      mx-auto
    "
  >
    “Pero yo y mi casa
    <br />
    serviremos a Jehová”
  </h3>

  <p className="mt-5 text-lg md:text-2xl text-gray-500">
    Josué 24:15
  </p>

</div>

{/* FECHA HORA LUGAR */}
<div
  className="
    mt-10
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-5
    max-w-5xl
    mx-auto
  "
>

  <div
    className="
      bg-white/80
      backdrop-blur-xl
      rounded-3xl
      p-6
      shadow-xl
      border
      border-black/5
    "
  >
    <p className="uppercase tracking-[4px] text-gray-500 text-sm">
      Fecha
    </p>

    <p className="mt-3 text-3xl font-bold text-[#20232C]">
      19 Julio 2026
    </p>
  </div>

  <div
    className="
      bg-white/80
      backdrop-blur-xl
      rounded-3xl
      p-6
      shadow-xl
      border
      border-black/5
    "
  >
    <p className="uppercase tracking-[4px] text-gray-500 text-sm">
      Hora
    </p>

    <p className="mt-3 text-3xl font-bold text-[#20232C]">
      10:00 AM
    </p>
  </div>

  <div
    className="
      bg-white/80
      backdrop-blur-xl
      rounded-3xl
      p-6
      shadow-xl
      border
      border-black/5
      sm:col-span-2
      lg:col-span-1
    "
  >
    <p className="uppercase tracking-[4px] text-gray-500 text-sm">
      Lugar
    </p>

    <p className="mt-3 text-2xl font-bold text-[#20232C]">
      Iglesia Getsemaní
    </p>

    <p className="text-gray-500 mt-2">
      El Durazno, Hidalgo
    </p>
  </div>

</div>

{/* BOTONES */}
<div
  className="
    mt-10
    flex
    flex-col
    sm:flex-row
    justify-center
    gap-4
  "
>



{/* BOTON */}
<div className="mt-10 flex justify-center">

  <a
    href="https://maps.app.goo.gl/YFNQWnW9Forg43bV7?g_st=iwb"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      relative
      overflow-hidden
      bg-[#20232C]
      text-white
      px-10
      py-5
      rounded-full
      font-semibold
      shadow-2xl
      hover:scale-105
      transition-all
      duration-300
    "
  >

    <span className="relative z-10 flex items-center gap-3">
       Ver Ubicación
    </span>

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-white/0
        via-white/20
        to-white/0
        -translate-x-full
        group-hover:translate-x-full
        transition-transform
        duration-1000
      "
    />

  </a>

</div>

</div>


</motion.div>

</section>












      {/* ACERCA */}
      <section className="relative py-36 px-6 overflow-hidden">

        {/* Glow Fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/50 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Encabezado */}
          <div className="text-center">

            <span
              className="
                inline-block
                px-5
                py-2
                rounded-full
                bg-white/70
                backdrop-blur-md
                border
                border-black/5
                shadow-lg
                text-sm
                uppercase
                tracking-[4px]
                text-gray-600
              "
            >
              Congreso Familiar 2026
            </span>

            <h2
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-black
                uppercase
                text-[#20232C]
              "
            >
              Acerca del Congreso
            </h2>

            <div className="w-32 h-[4px] bg-[#20232C] mx-auto rounded-full mt-8" />

          </div>

          {/* Contenido Principal */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">

            {/* Texto */}
            <div>

              <h3
                className="
                  text-3xl
                  md:text-5xl
                  font-light
                  leading-tight
                  text-[#20232C]
                "
              >
                Un tiempo diseñado para
                fortalecer los hogares,
                renovar la fe y edificar
                familias firmes en Cristo.
              </h3>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-gray-600
                "
              >
                El Congreso Familiar 2026 es un espacio creado para
                que matrimonios, padres, hijos y familias completas
                puedan crecer juntos mediante enseñanzas bíblicas,
                conferencias inspiradoras y momentos de convivencia.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-gray-600
                "
              >
                Nuestro propósito es fortalecer los principios que
                Dios estableció para el hogar, brindando herramientas
                prácticas para enfrentar los desafíos actuales con
                una perspectiva cristiana.
              </p>

            </div>

            {/* Tarjeta Principal */}
            <div>

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-white/70
                  backdrop-blur-xl
                  border
                  border-white/50
                  shadow-2xl
                  p-10
                "
              >

                {/* Glow interno */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#20232C]/5 rounded-full blur-3xl" />

                <div className="relative z-10">

                  <p className="text-sm uppercase tracking-[4px] text-gray-500">
                    Tema Central
                  </p>

                  <h4
                    className="
                      mt-4
                      text-4xl
                      font-bold
                      text-[#20232C]
                    "
                  >
                    “Pero yo y mi casa
                    serviremos a Jehová”
                  </h4>

                  <p className="mt-4 text-gray-600 text-lg">
                    Josué 24:15
                  </p>

                  <div className="mt-8 border-t border-black/10 pt-8">

                    <p
                      className="
                        text-2xl
                        italic
                        font-light
                        leading-relaxed
                        text-[#20232C]
                      "
                    >
                      Edificando hogares
                      firmes en Cristo.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Stats */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">

            <div
              className="
                bg-white/70
                backdrop-blur-md
                rounded-3xl
                p-8
                text-center
                shadow-xl
              "
            >
              <h3 className="text-5xl font-black text-[#20232C]">
                1
              </h3>

              <p className="mt-3 text-gray-600">
                Día de enseñanza y comunión
              </p>
            </div>

            <div
              className="
                bg-white/70
                backdrop-blur-md
                rounded-3xl
                p-8
                text-center
                shadow-xl
              "
            >
              <h3 className="text-5xl font-black text-[#20232C]">
                6
              </h3>

              <p className="mt-3 text-gray-600">
                Temas para fortalecer el hogar
              </p>
            </div>

            <div
              className="
                bg-white/70
                backdrop-blur-md
                rounded-3xl
                p-8
                text-center
                shadow-xl
              "
            >
              <h3 className="text-5xl font-black text-[#20232C]">
                100%
              </h3>

              <p className="mt-3 text-gray-600">
                Enfocado en principios bíblicos
              </p>
            </div>

          </div>

        </div>

      </section>



















      {/* TEMAS */}

      <section className="relative py-36 px-6 overflow-hidden bg-white">

        {/* Glow decorativo */}

        <div className="absolute top-20 left-20 w-96 h-96 bg-[#20232C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#20232C]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Encabezado */}
          <div className="text-center">

            <span
              className="
      inline-block
      px-5
      py-2
      rounded-full
      bg-white
      border
      border-black/10
      shadow-lg
      text-sm
      uppercase
      tracking-[4px]
      text-gray-600
    "
            >
              Conferencias y Talleres
            </span>

            <h2
              className="
      mt-8
      text-5xl
      md:text-7xl
      font-black
      uppercase
      text-[#20232C]
    "
            >
              Temas del Congreso
            </h2>

            <p
              className="
      mt-8
      max-w-3xl
      mx-auto
      text-xl
      text-gray-600
      leading-relaxed
    "
            >
              Una jornada diseñada para fortalecer cada área del hogar,
              proporcionando principios bíblicos y herramientas prácticas
              para la vida familiar.
            </p>

          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {[
              {
                icon: "💍",
                title: "Matrimonio",
                description:
                  "Fortaleciendo el pacto establecido por Dios mediante amor, respeto y compromiso."
              },
              {
                icon: "👨‍👩‍👧",
                title: "Crianza de Hijos",
                description:
                  "Principios prácticos para formar generaciones firmes en la fe."
              },
              {
                icon: "💬",
                title: "Comunicación Familiar",
                description:
                  "Aprendiendo a construir relaciones saludables dentro del hogar."
              },
              {
                icon: "🙏",
                title: "Vida Espiritual",
                description:
                  "Cómo mantener a Cristo en el centro de la familia."
              },
              {
                icon: "💰",
                title: "Finanzas Familiares",
                description:
                  "Administración responsable de los recursos conforme a principios bíblicos."
              },
              {
                icon: "👑",
                title: "Liderazgo Cristiano",
                description:
                  "Guiando el hogar con sabiduría, servicio y ejemplo."
              }
            ].map((tema, index) => (

              <div
                key={index}
                className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        bg-white
        border
        border-black/5
        p-8
        shadow-xl
        hover:shadow-2xl
        hover:-translate-y-3
        transition-all
        duration-500
      "
              >

                {/* Glow Hover */}
                <div
                  className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#20232C]/5
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition
        "
                />

                <div className="relative z-10">

                  <div
                    className="
            w-20
            h-20
            rounded-3xl
            bg-[#20232C]
            text-white
            flex
            items-center
            justify-center
            text-4xl
            shadow-lg
          "
                  >
                    {tema.icon}
                  </div>

                  <h3
                    className="
            mt-8
            text-3xl
            font-bold
            text-[#20232C]
          "
                  >
                    {tema.title}
                  </h3>

                  <p
                    className="
            mt-4
            text-gray-600
            leading-7
          "
                  >
                    {tema.description}
                  </p>

                  <div
                    className="
            mt-8
            flex
            items-center
            gap-2
            text-sm
            uppercase
            tracking-[3px]
            text-gray-500
          "
                  >
                    Congreso Familiar 2026
                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Frase Inferior */}
          <div className="mt-24 text-center">

            <div
              className="
      max-w-5xl
      mx-auto
      bg-[#20232C]
      text-white
      rounded-[40px]
      px-10
      py-14
      shadow-2xl
    "
            >

              <p className="uppercase tracking-[4px] text-gray-300 text-sm">
                Nuestro Propósito
              </p>

              <h3
                className="
        mt-6
        text-3xl
        md:text-5xl
        font-light
        leading-tight
      "
              >
                Fortalecer familias, restaurar hogares y
                levantar una generación que sirva a Dios.
              </h3>

            </div>

          </div>

        </div>

      </section>












      {/* PROGRAMA */}

      <section className="relative py-36 px-6 overflow-hidden bg-[#20232C] text-white">

        {/* Glow Fondo */}

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Encabezado */}
          <div className="text-center">

            <span
              className="
      inline-block
      px-5
      py-2
      rounded-full
      bg-white/10
      border
      border-white/10
      backdrop-blur-md
      text-sm
      uppercase
      tracking-[4px]
      text-gray-300
    "
            >
              Agenda del Evento
            </span>

            <h2
              className="
      mt-8
      text-5xl
      md:text-7xl
      font-black
      uppercase
    "
            >
              Programa
            </h2>

            <p
              className="
      mt-8
      max-w-3xl
      mx-auto
      text-xl
      text-gray-300
      leading-relaxed
    "
            >
              Un día diseñado para aprender, crecer y compartir en familia,
              fortaleciendo nuestro hogar conforme a los principios de Dios.
            </p>

          </div>

          {/* Timeline */}
          <div className="mt-24 max-w-5xl mx-auto">

            {[
              {
                time: "10:00 AM",
                title: "Bienvenida",
                description:
                  "Recepción de asistentes, oración inicial y apertura oficial del Congreso."
              },
              {
                time: "10:30 AM",
                title: "Conferencia Principal",
                description:
                  "Mensaje central enfocado en el fortalecimiento del hogar cristiano."
              },
              {
                time: "12:00 PM",
                title: "Talleres y Enseñanzas",
                description:
                  "Sesiones enfocadas en matrimonio, crianza, liderazgo y vida espiritual."
              },
              {
                time: "02:00 PM",
                title: "Convivencia Familiar",
                description:
                  "Espacio para compartir, fortalecer lazos y convivir entre familias."
              }
            ].map((item, index) => (

              <div
                key={index}
                className="
        relative
        flex
        gap-8
        mb-12
        group
      "
              >

                {/* Línea */}
                {index !== 3 && (
                  <div
                    className="
            absolute
            left-[39px]
            top-20
            w-[2px]
            h-[140px]
            bg-white/20
          "
                  />
                )}

                {/* Hora */}
                <div
                  className="
          flex-shrink-0
          w-20
          h-20
          rounded-full
          bg-white
          text-[#20232C]
          flex
          items-center
          justify-center
          font-bold
          shadow-2xl
          group-hover:scale-110
          transition
        "
                >
                  ●
                </div>

                {/* Card */}
                <div
                  className="
          flex-1
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-[32px]
          p-8
          hover:bg-white/10
          transition-all
          duration-500
        "
                >

                  <span
                    className="
            text-sm
            uppercase
            tracking-[4px]
            text-gray-400
          "
                  >
                    {item.time}
                  </span>

                  <h3
                    className="
            mt-3
            text-3xl
            font-bold
          "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
            mt-4
            text-gray-300
            leading-7
          "
                  >
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Card Inferior */}
          <div className="mt-24">

            <div
              className="
      max-w-5xl
      mx-auto
      rounded-[40px]
      bg-gradient-to-r
      from-white/10
      to-white/5
      border
      border-white/10
      backdrop-blur-xl
      p-12
      text-center
    "
            >

              <p
                className="
        text-sm
        uppercase
        tracking-[4px]
        text-gray-400
      "
              >
                Congreso Familiar 2026
              </p>

              <h3
                className="
        mt-6
        text-3xl
        md:text-5xl
        font-light
        leading-tight
      "
              >
                Una experiencia diseñada para fortalecer
                matrimonios, padres, hijos y familias completas.
              </h3>

            </div>

          </div>

        </div>

      </section>


























      {/* UBICACIÓN */}

      <section className="relative py-36 px-6 overflow-hidden bg-gradient-to-b from-[#F8F8F8] to-white">

        {/* Glow Fondo */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#20232C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#20232C]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">

   
          {/* Encabezado */}
          <div className="text-center">

            <span
              className="
      inline-block
      px-5
      py-2
      rounded-full
      bg-white
      border
      border-black/10
      shadow-lg
      text-sm
      uppercase
      tracking-[4px]
      text-gray-600
    "
            >
              Lugar del Evento
            </span>

            <h2
              className="
      mt-8
      text-5xl
      md:text-7xl
      font-black
      uppercase
      text-[#20232C]
    "
            >
              Ubicación
            </h2>

            <p
              className="
      mt-8
      max-w-3xl
      mx-auto
      text-xl
      text-gray-600
      leading-relaxed
    "
            >
              Te esperamos para vivir juntos una experiencia
              especial de crecimiento, aprendizaje y comunión.
            </p>

          </div>

          {/* Layout */}
          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            {/* Información */}
            <div
              className="
      bg-white
      rounded-[40px]
      p-10
      shadow-2xl
      border
      border-black/5
    "
            >

              <div
                className="
        w-20
        h-20
        rounded-3xl
        bg-[#20232C]
        text-white
        flex
        items-center
        justify-center
        text-4xl
        shadow-xl
      "
              >
                📍
              </div>

              <h3
                className="
        mt-8
        text-4xl
        font-bold
        text-[#20232C]
      "
              >
                Iglesia Getsemaní
              </h3>

              <p
                className="
        mt-4
        text-xl
        text-gray-600
      "
              >
                El Durazno, Hidalgo
              </p>

              <div className="mt-10 space-y-5">

                <div
                  className="
          flex
          items-center
          gap-4
          p-5
          rounded-2xl
          bg-gray-50
        "
                >
                  🗓️
                  <span>Domingo 19 de Julio 2026</span>
                </div>

                <div
                  className="
          flex
          items-center
          gap-4
          p-5
          rounded-2xl
          bg-gray-50
        "
                >
                  ⏰
                  <span>10:00 AM</span>
                </div>

                <div
                  className="
          flex
          items-center
          gap-4
          p-5
          rounded-2xl
          bg-gray-50
        "
                >
                  👨‍👩‍👧‍👦
                  <span>Evento para toda la familia</span>
                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <button
                  className="
          group
          relative
          overflow-hidden
          bg-[#20232C]
          text-white
          px-8
          py-4
          rounded-full
          font-semibold
          shadow-xl
          hover:scale-105
          transition-all
        "
                >
                  Cómo llegar
                </button>

                <button
                  className="
          px-8
          py-4
          rounded-full
          border-2
          border-[#20232C]
          hover:bg-[#20232C]
          hover:text-white
          transition-all
        "
                >
                  Confirmar asistencia
                </button>

              </div>

            </div>

            {/* Mapa */}
            <div
              className="
      relative
      overflow-hidden
      rounded-[40px]
      shadow-2xl
      min-h-[550px]
      border
      border-black/5
    "
            >

              <iframe
                src="https://www.google.com/maps/embed?pb="
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="
        absolute
        bottom-6
        left-6
        right-6
        bg-white/90
        backdrop-blur-xl
        rounded-3xl
        p-6
        shadow-xl
      "
              >

                <p
                  className="
          text-sm
          uppercase
          tracking-[4px]
          text-gray-500
        "
                >
                  Congreso Familiar 2026
                </p>

                <h4
                  className="
          mt-2
          text-2xl
          font-bold
          text-[#20232C]
        "
                >
                  Iglesia Getsemaní
                </h4>

                <p className="text-gray-600 mt-2">
                  El Durazno, Hidalgo
                </p>

              </div>

            </div>

          </div>

          {/* Frase */}
          <div className="mt-24">

            <div
              className="
      max-w-5xl
      mx-auto
      bg-[#20232C]
      text-white
      rounded-[40px]
      px-12
      py-14
      text-center
      shadow-2xl
    "
            >

              <p
                className="
        uppercase
        tracking-[4px]
        text-gray-300
        text-sm
      "
              >
                Nos vemos pronto
              </p>

              <h3
                className="
        mt-6
        text-3xl
        md:text-5xl
        font-light
        leading-tight
      "
              >
                Prepara tu corazón, reúne a tu familia
                y acompáñanos en este tiempo especial.
              </h3>

            </div>

          </div>


        </div>

      </section>


















      {/* FOOTER */}

      <footer className="relative overflow-hidden bg-[#20232C] text-white">

        {/* Glow decorativo */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* CTA FINAL */}
          <div className="py-28 text-center border-b border-white/10">

            <span
              className="
      inline-block
      px-5
      py-2
      rounded-full
      bg-white/10
      backdrop-blur-md
      border
      border-white/10
      text-sm
      uppercase
      tracking-[4px]
      text-gray-300
    "
            >
              Congreso Familiar 2026
            </span>

            <h2
              className="
      mt-8
      text-5xl
      md:text-7xl
      font-black
      uppercase
      leading-tight
    "
            >
              Te Esperamos
            </h2>

            <p
              className="
      mt-8
      max-w-3xl
      mx-auto
      text-xl
      text-gray-300
      leading-relaxed
    "
            >
              Un día para fortalecer la familia, renovar la fe
              y crecer juntos en los principios que Dios estableció
              para el hogar.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button
                className="
        group
        relative
        overflow-hidden
        px-10
        py-5
        rounded-full
        bg-white
        text-[#20232C]
        font-semibold
        shadow-2xl
        hover:scale-105
        transition-all
      "
              >
                Confirmar Asistencia
              </button>

              <button
                className="
        px-10
        py-5
        rounded-full
        border-2
        border-white
        hover:bg-white
        hover:text-[#20232C]
        transition-all
      "
              >
                Ver Ubicación
              </button>

            </div>

          </div>

          {/* FOOTER PRINCIPAL */}
          <div className="py-16 grid md:grid-cols-3 gap-12">

            {/* Marca */}
            <div>

              <h3
                className="
        text-4xl
        font-black
        uppercase
      "
              >
                Congreso Familiar
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                Una jornada diseñada para fortalecer matrimonios,
                padres, hijos y familias completas mediante la
                enseñanza de la Palabra de Dios.
              </p>

            </div>

            {/* Información */}
            <div>

              <h4
                className="
        text-lg
        uppercase
        tracking-[3px]
        mb-6
      "
              >
                Información
              </h4>

              <div className="space-y-4 text-gray-400">

                <p>📅 19 de Julio 2026</p>

                <p>⏰ 10:00 AM</p>

                <p>📍 Iglesia Getsemaní</p>

                <p>📍 El Durazno, Hidalgo</p>

              </div>

            </div>

            {/* Versículo */}
            <div>

              <h4
                className="
        text-lg
        uppercase
        tracking-[3px]
        mb-6
      "
              >
                Versículo Tema
              </h4>

              <blockquote
                className="
        text-xl
        leading-relaxed
        text-gray-300
        italic
      "
              >
                “Pero yo y mi casa
                serviremos a Jehová.”
              </blockquote>

              <p className="mt-4 text-gray-500">
                Josué 24:15
              </p>

            </div>

          </div>

          {/* COPYRIGHT */}
          <div
            className="
    border-t
    border-white/10
    py-8
    flex
    flex-col
    md:flex-row
    justify-between
    items-center
    gap-4
  "
          >

            <p className="text-gray-500 text-sm">
              © 2026 Congreso Familiar. Todos los derechos reservados.
            </p>

            <p className="text-gray-500 text-sm">
              Movimiento de la Iglesia Pentecostés de México, A.R.
            </p>

          </div>


        </div>

      </footer>


    </main>
  );
}