import { Lightbulb, Code, Cloud } from "lucide-react"

export function Projects() {
  return (
    <div className="text-blue-100 pt-20">
      <div className="relative z-20">
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center bg-transparent">
          <Lightbulb className="w-8 h-8 mr-2 text-yellow-400" />
          Side Projects
        </h2>
        <div className="max-w-4xl mx-auto overflow-y-auto max-h-[calc(100vh-180px)] px-2 sm:px-4 md:px-6 py-8 rounded-xl bg-gray-900 bg-opacity-30 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">Portfolio</h3>
                <div className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-yellow-400" />
                  <a
                    href="https://github.com/arbitraryusername/portfolio/"
                    className="text-yellow-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code on GitHub
                  </a>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    You're looking at my portfolio website now! I wanted to created a website that
                    showcases my personality and my side projects. I hope you like the night sky theme!
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-medium">Tech Highlights</h4>
                  <p>AWS Amplify, React, Next.js, Typescript, Tailwind</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">Accessible Weather Maps</h3>
                <div className="flex items-center mb-2">
                  <Cloud className="w-5 h-5 mr-2 text-yellow-400" />
                  <a
                    href="https://weathermaphelper.azurewebsites.net"
                    className="text-yellow-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Use App
                  </a>
                </div>
                <div className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-yellow-400" />
                  <a
                    href="https://github.com/arbitraryusername/ColorCodedLegendUtil"
                    className="text-yellow-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code on GitHub
                  </a>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    Weather maps are usually color coded, making them not very accessible to people with color
                    blindness. This app helps with that by drawing an arrow from the point the user clicked to the
                    region on the legend corresponding to the clicked pixel's color. This project comes with 4 weather
                    maps pulled from Climavision's website. The local database is seeded when the app starts up for the
                    first time, so you have 4 maps to test out this program with.
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-medium">Tech Highlights</h4>
                  <p>C#, .NET 8, Blazor, Entity Framework, Azure Web Service</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">AI Code Helper</h3>
                <div className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-yellow-400" />
                  <a
                    href="https://github.com/arbitraryusername/ai-tools-gui"
                    className="text-yellow-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code on GitHub
                  </a>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    An AI-powered app for rapid code iteration in a local git repo. This app enables you to quickly add
                    code from several files, folders, or the entire app to your prompt. It automatically applies the AI
                    generated code changes to your local repo, and it automatically commits them locally (does not push
                    commit to remote repo).
                  </p>
                  <h4 className="text-lg font-medium mt-4">Workflow</h4>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                    <li>
                      Specify the path to a local git repo then click "Load Repo". The UI then shows the tracked files
                      and folders in a collapsible, selectable tree view. It also shows the most recent 10 commit
                      messages along with the diffs for each file in that commit.
                    </li>
                    <li>
                      Select the relevant files you wish to include with the prompt by checking individual files or
                      folders.
                    </li>
                    <li>
                      Type your prompt then click "Submit". For example, you can type a short prompt about adding a new
                      endpoint and creating the client and server code. Or maybe you want to refactor some code to be
                      more performant or better organized. Or you might want to describe a bug that needs to be fixed.
                    </li>
                    <li>
                      After the response is received from OpenAI, the code changes are automatically applied to the
                      files, including updating, adding, and/or deleting files.
                    </li>
                    <li>The UI refreshes with the latest files and the most recent commit.</li>
                    <li>
                      If you do not like the last change, then simply click the revert button to undo the last set of
                      changes.
                    </li>
                  </ul>
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-medium">Tech Highlights</h4>
                  <p>TypeScript, React, Express Server, OpenAI</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">CraigsBooks</h3>
                <div className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-yellow-400" />
                  <a
                    href="https://bitbucket.org/arbitraryusername/craigsbooks/src"
                    className="text-yellow-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code and Screenshots
                  </a>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    Full-stack web app written on the MEAN stack (MongoDB, ExpressJS, AngularJS, and NodeJS). Every web
                    page is carefully designed to look great on any screen size. You can add books (with a title,
                    author, publisher, summary, genre, cover image), edit existing books, and delete books. You can
                    search all books in the database by title, author, and genre. The home page of this app features an
                    animated carousel with images of books, book reviews, the 6 most recently added books, and the 6
                    most viewed books.
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-medium">Tech Highlights</h4>
                  <p>JavaScript, AngularJS, MongoDB, Mongoose, Bootstrap</p>
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-medium">Why I Made It</h4>
                  <p className="text-sm">
                    I was a junior dev working on a lot of legacy systems for in my job, so I wanted to learn more
                    modern web programming skills and tools in my free time. This project ended up being useful in my
                    job: after I built this app, I then recommended using AngularJS and Bootstrap for our next client
                    apps we were tasked with. This resulted in better, more maintainable, and more stylish apps than if
                    we had continued using the legacy tools. This project also helped me get my next job at a small
                    startup, which I ended up liking a lot more than my first job.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">Crypto Charts</h3>
                <div className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-yellow-400" />
                  <a
                    href="https://bitbucket.org/cryptoteamo/tradingbotrepo/src"
                    className="text-yellow-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
                <div className="mt-2">
                  <p className="text-sm">
                    These python scripts ingest historical time series price data (like USD price data for Bitcoin) and
                    generates charts and histograms that illustrate trends and characteristics of the data, like
                    volatility and price velocity. There are also scripts that attempt to identify good times to buy and
                    sell the asset based on whether price trends are reversing, and a plot is generated that shows when
                    buy/sell suggestions would have been given on historical data.
                  </p>
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-medium">Tech Highlights</h4>
                  <p>Python, MatPlotLib, Numpy, Pandas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

