import { Mail, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <div className="text-blue-100 pt-20 min-h-screen flex flex-col">
      <div className="relative z-20">
        <h2 className="text-3xl font-bold mb-6 md:mb-12 text-center flex items-center justify-center bg-transparent">
          <Mail className="w-8 h-8 mr-2 text-yellow-400" />
          Contact
        </h2>
        
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Email Card (Width matched to 3-column grid) */}
            <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center border border-blue-900/30 max-w-[350px] md:w-[32%] w-full">
              <Mail className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Email</h3>
              <a
                href="mailto:pitcher.craig@gmail.com"
                className="text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                pitcher.craig@gmail.com
              </a>
            </div>

            {/* LinkedIn Card (Width matched to 3-column grid) */}
            <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center border border-blue-900/30 max-w-[350px] md:w-[32%] w-full">
              <Linkedin className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-300 text-nowrap">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/craig-w-pitcher/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                @craig-w-pitcher
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

