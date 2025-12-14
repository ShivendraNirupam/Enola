import { Boxes } from "./ui/background-boxes";

export default function About() {
  return (
    <section className="w-full overflow-x-hidden">
      {/* Divider */}
      <div className="mb-10 hidden md:flex justify-center items-center w-full px-6">
        <div className="w-full h-0.5 bg-linear-to-r from-transparent via-white to-transparent" />
      </div>

      {/* Content */}
      <div className="mt-5 w-full flex justify-center px-4">
        <div
          className="
            w-full
            max-w-7xl
            grid
            grid-cols-1
            gap-4
            lg:grid-cols-5
            lg:grid-rows-4
          "
        >
          {/* Card 1 */}
          <div className="lg:col-span-3 lg:row-span-2">
            <div className="relative min-h-125 rounded-2xl border border-white/10 hover:border-white/50 flex flex-col items-center justify-center gap-4 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-30">
                <Boxes />
              </div>

              <h1 className="relative z-10 text-xl lg:text-2xl font-bold italic text-center">
                Connect anywhere, anytime
              </h1>

              <p className="relative z-10 text-2xl lg:text-4xl text-center max-w-xl">
                Stay close to the people who matter, wherever you are.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="flex flex-col end  min-h-125  items-center rounded-2xl border border-white/10 hover:border-white/50 hover:rotate-5 overflow-hidden">
              <h1 className="z-10 mt-10 text-xl font-bold italic text-center">
                Attractive Ui and Smooth UX
              </h1>
            </div>
          </div>

          {/* Card 3 — End-to-End Encryption */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="relative min-h-125 rounded-2xl border border-white/10 hover:border-white/50 overflow-hidden flex flex-col items-center justify-center gap-4 p-6">
              {/* Animated encrypted lines */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="flex gap-4">
                  <span className="h-20 w-1 bg-cyan-400/60 animate-pulse"></span>
                  <span className="h-28 w-1 bg-cyan-400/40 animate-pulse [animation-delay:200ms]"></span>
                  <span className="h-16 w-1 bg-cyan-400/50 animate-pulse [animation-delay:400ms]"></span>
                </div>
              </div>

              {/* Lock icon (pure CSS circle) */}
              <div className="relative  flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-sm border-2 border-cyan-400"></div>
                </div>
              </div>

              {/* Content */}
              <h1 className="relative z-10 text-2xl font-bold italic">
                End-to-End Encrypted
              </h1>

              <p className="relative z-10 text-center text-white/70 max-w-xs">
                Your messages are encrypted on your device and can only be read
                by the people you choose.
              </p>
            </div>
          </div>

          {/* Card 4 — Developer Contact */}
          <div className="lg:col-span-3 lg:row-span-2">
            <div className=" relative min-h-125 rounded-2xl border border-white/10 hover:border-white/50 overflow-hidden p-6 flex flex-col justify-center gap-4">
              {/* Soft glow background */}
              <div className="absolute -bottom-20 -right-20 h-64 w-64 bg-indigo-500/30 blur-3xl"></div>
              {/* Content */}
              <h1 className="relative z-10 text-2xl lg:text-3xl font-bold italic">
                Built by Developers
              </h1>

              <p className="relative z-10 text-white/70 max-w-xl">
                Have ideas, feedback, or want to collaborate? The people who
                built Chatty are just a message away.
              </p>

              {/* Contact CTA */}
              <div className="relative z-10 flex gap-4 mt-2">
                <a
                  href="mailto:snsm1988@gmail.com"
                  className="px-5 py-2 rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  Email Us
                </a>

                <a
                  href="https://github.com/shivendranirupam"
                  target="_blank"
                  className="px-5 py-2 rounded-full border border-white/20 hover:border-purple-400 hover:text-purple-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
