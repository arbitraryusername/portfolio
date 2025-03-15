import { Mail, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <div className="text-blue-100 pt-20 min-h-screen flex flex-col">
      <div className="relative z-20">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center bg-transparent">
          <Mail className="w-8 h-8 mr-2 text-yellow-400" />
          Contact
        </h2>
        <div className="max-w-fit mx-auto px-8 sm:px-12 md:px-16 py-8 rounded-xl bg-gray-900 bg-opacity-30 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-yellow-400" />
              <a
                href="mailto:pitcher.craig@gmail.com"
                className="text-xl hover:text-yellow-400 transition-colors duration-300"
              >
                pitcher.craig@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-yellow-400" />
              <a
                href="https://www.linkedin.com/in/craig-w-pitcher/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-yellow-400 transition-colors duration-300"
              >
                <span className="whitespace-nowrap">linkedin.com/in/</span>
                <span className="whitespace-nowrap">craig-w-pitcher</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

