import { User, Code, Heart, Music, Dumbbell, Rocket, GraduationCap } from "lucide-react"

export function About() {
  return (
    <div className="text-blue-100 pt-20">
      <div className="relative z-20">
        <h2 className="text-3xl font-bold mb-6 md:mb-12 text-center flex items-center justify-center bg-transparent">
          <User className="w-8 h-8 mr-2 text-yellow-400" />
          About
        </h2>
        
        <div className="max-w-4xl mx-auto px-4 md:px-0 overflow-y-auto max-h-[calc(100vh-180px)] pb-5 md:pb-10">
          <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-6 justify-center items-center mx-auto">
            <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm py-4 px-6 md:p-6 rounded-xl flex flex-col items-center text-center border border-blue-900/30 max-w-[350px] md:w-[32%] w-full">
              <Heart className="w-10 h-10 text-blue-300 mb-2 md:mb-4" />
              <h3 className="text-xl font-semibold mb-1 md:mb-2 text-blue-300">Family Man</h3>
              <p className="text-sm text-blue-100">
                Husband, Father, Brother
              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm py-4 px-6 md:p-6 rounded-xl flex flex-col items-center text-center border border-blue-900/30 max-w-[350px] md:w-[32%] w-full">
              <GraduationCap className="w-10 h-10 text-blue-300 mb-2 md:mb-4" />
              <h3 className="text-xl font-semibold mb-1 md:mb-2 text-blue-300">Science Nerd</h3>
              <p className="text-sm text-blue-100">
                Physics, Astronomy, Meteorology
              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm py-4 px-6 md:p-6 rounded-xl flex flex-col items-center text-center border border-blue-900/30 max-w-[350px] md:w-[32%] w-full">
              <Music className="w-10 h-10 text-blue-300 mb-2 md:mb-4" />
              <h3 className="text-xl font-semibold mb-1 md:mb-2 text-blue-300">Musician</h3>
              <p className="text-sm text-blue-100">
                Composer, Piano Player, DJ
              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm py-4 px-6 md:p-6 rounded-xl flex flex-col items-center text-center border border-blue-900/30 max-w-[350px] md:w-[32%] w-full">
              <Dumbbell className="w-10 h-10 text-blue-300 mb-2 md:mb-4" />
              <h3 className="text-xl font-semibold mb-1 md:mb-2 text-blue-300">Active Adult</h3>
              <p className="text-sm text-blue-100">
                Hiker, Runner, Rock Climber
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

