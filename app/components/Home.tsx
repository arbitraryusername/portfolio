import { Code, Database, Rocket } from "lucide-react"

export function Home() {
  return (
    <div className="text-blue-100 flex flex-col justify-start md:justify-center min-h-screen pt-20 md:pt-0">
      <div className="relative z-20 text-center mt-4 md:mt-0 flex flex-col h-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-blue-100">Craig Pitcher</h1>
        <h2 className="text-2xl md:text-3xl text-yellow-400 mb-6">Senior Full Stack Engineer</h2>
        <div className="overflow-y-auto max-h-[calc(100vh-250px)] mt-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-gray-900 bg-opacity-30 backdrop-blur-sm rounded-xl">
              <Code className="w-10 h-10 text-blue-300 mb-2" />
              <h3 className="text-xl font-semibold text-blue-300">Web Apps</h3>
              <p className="text-sm text-center text-blue-100">C#, Python, JS/TS</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900 bg-opacity-30 backdrop-blur-sm rounded-xl">
              <Database className="w-10 h-10 text-blue-300 mb-2" />
              <h3 className="text-xl font-semibold text-blue-300">Data</h3>
              <p className="text-sm text-center text-blue-100">HTTP, Websockets, SQL</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-900 bg-opacity-30 backdrop-blur-sm rounded-xl">
              <Rocket className="w-10 h-10 text-blue-300 mb-2" />
              <h3 className="text-xl font-semibold text-blue-300">Quality</h3>
              <p className="text-sm text-center text-blue-100">Performant, Scalable, Secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

