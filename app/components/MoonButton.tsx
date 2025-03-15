interface MoonButtonProps {
  setCurrentSection: (section: string) => void
}

export function MoonButton({ setCurrentSection }: MoonButtonProps) {
  return (
    <button
      onClick={() => setCurrentSection("home")}
      className="absolute top-4 left-4 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-[0_0_20px_10px_rgba(255,255,255,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_15px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      aria-label="Go to home page"
    >
      <div className="w-full h-full rounded-full bg-[url('/moon-texture.png')] bg-cover relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0)_20%,_rgba(0,0,0,0.2)_60%,_rgba(0,0,0,0)_100%)] mix-blend-overlay"></div>
      </div>
    </button>
  )
}

