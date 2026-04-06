import { Cloud, Code, Database, Rocket } from "lucide-react"

export function Home() {
  return (
    <div className="text-blue-100 flex flex-col justify-start md:justify-center min-h-screen pt-20 md:pt-0">
      <div className="relative z-20 text-center mt-4 md:mt-0 flex flex-col h-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-blue-100">Craig Pitcher</h1>
        <h2 className="text-2xl md:text-4xl text-yellow-300 mb-4 md:mb-6">Senior Web Developer</h2>
        <div className="overflow-y-auto max-h-[calc(100vh-250px)] mt-2 md:mt-4 pb-2 md:pb-4 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto items-center justify-items-center">
            <div className="flex flex-col items-center py-4 px-6 md:p-6 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl max-w-[350px] md:max-w-none w-full">
              <Code className="w-10 h-10 text-blue-300 mb-2" />
              <h3 className="text-xl font-semibold text-blue-300 text-center">Elite Engineering</h3>
              <p className="text-sm text-center text-blue-100">Frontend, Backend</p>
            </div>
            <div className="flex flex-col items-center py-4 px-6 md:p-6 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl max-w-[350px] md:max-w-none w-full">
              <Database className="w-10 h-10 text-blue-300 mb-2" />
              <h3 className="text-xl font-semibold text-blue-300 text-center">Database Modeling</h3>
              <p className="text-sm text-center text-blue-100">SQL, NoSQL</p>
            </div>
            <div className="flex flex-col items-center py-4 px-6 md:p-6 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl max-w-[350px] md:max-w-none w-full">
              <Cloud className="w-10 h-10 text-blue-300 mb-2" />
              <h3 className="text-xl font-semibold text-blue-300 text-center">Cloud Computing</h3>
              <p className="text-sm text-center text-blue-100">AWS, Azure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

