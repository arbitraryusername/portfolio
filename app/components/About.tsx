import { User } from "lucide-react"

export function About() {
  return (
    <div className="text-blue-100 pt-20">
      <div className="relative z-20">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center bg-transparent">
          <User className="w-8 h-8 mr-2 text-yellow-400" />
          About Me
        </h2>
        <div className="max-w-4xl mx-auto overflow-y-auto max-h-[calc(100vh-180px)] p-8 rounded-xl bg-gray-900 bg-opacity-30 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto">
            <section>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Personal Life</h3>
              <p className="mb-4">
                In my free time I love to code side projects and follow the latest news in AI, web technologies, and
                scientific fields like astronomy. I write songs, play piano, DJ, and rap. To stay fit I enjoy hiking,
                running, and indoor rock climbing. Most importantly, I love spending time with my wife and daughter!
              </p>
            </section>
            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Professional Life</h3>
              <p>
                As a Senior Full Stack Engineer with a strong background in physics and computer science, I bring
                exceptional analytical and mathematical skills to software development. My extensive experience spans a
                variety of programming languages and modern web technologies. I have a knack for writing maintainable,
                scalable, and well-tested code, ensuring robust and efficient applications. My aptitude for quick
                learning and adopting new technologies allows me to consistently speed up development processes and stay
                at the forefront of industry trends.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

