"use client"

import { useState } from "react"
import { FileText, Code, Database, Server, Cloud, TestTube, Smartphone } from "lucide-react"

export function Resume() {
  const [showFullResume, setShowFullResume] = useState(false)

  const ToggleSwitch = () => (
    <div className="flex items-center justify-end mb-2 max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
      <span className={`mr-3 text-sm font-medium ${!showFullResume ? "text-yellow-400" : "text-blue-300"}`}>
        Summary
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={showFullResume}
          onChange={() => setShowFullResume(!showFullResume)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
      </label>
      <span className={`ml-3 text-sm font-medium ${showFullResume ? "text-yellow-400" : "text-blue-300"}`}>Full</span>
    </div>
  )

  const InfographicSummary = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      <div className="bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-lg flex flex-col items-center">
        <Code className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center text-blue-300">Languages</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>C#, Python, Java</li>
          <li>JS/TS, HTML, CSS</li>
          <li>SQL, JSON, C++</li>
        </ul>
      </div>
      <div className="bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-lg flex flex-col items-center">
        <Server className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center text-blue-300">Backend</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>ASP.NET, .NET (C#)</li>
          <li>Flask, FastAPI (Python)</li>
          <li>GraphQL, RabbitMQ</li>
        </ul>
      </div>
      <div className="bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-lg flex flex-col items-center">
        <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center text-blue-300">Frontend</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>Vue, React, Angular</li>
          <li>Node.js, Webpack, Vite</li>
          <li>WebSockets, HTTP</li>
        </ul>
      </div>
      <div className="bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-lg flex flex-col items-center">
        <Database className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center text-blue-300">Data Storage</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>MySQL, PostgreSQL</li>
          <li>MongoDB (NoSQL)</li>
          <li>Azure Blob, AWS S3</li>
        </ul>
      </div>
      <div className="bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-lg flex flex-col items-center">
        <Cloud className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center text-blue-300">Cloud/DevOps</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>Azure VMs/Blob/IoT</li>
          <li>CircleCI, Jenkins</li>
          <li>Docker Scripting</li>
        </ul>
      </div>
      <div className="bg-gray-800 bg-opacity-50 p-4 md:p-6 rounded-lg flex flex-col items-center">
        <TestTube className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center text-blue-300">Testing</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>Unit, Integration, E2E</li>
          <li>Selenium (C# & JS)</li>
          <li>NUnit, JUnit</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="text-blue-100 pt-20 min-h-screen flex flex-col">
      <div className="relative z-20">
        <h2 className="text-3xl font-bold mb-3 text-center flex items-center justify-center bg-transparent">
          <FileText className="w-8 h-8 mr-2 text-yellow-400" />
          Resume
        </h2>
        <ToggleSwitch />
        <div className="flex-grow overflow-y-auto pb-10">
          {" "}
          {/* Update 1 */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-4 mb-6 rounded-xl bg-gray-900 bg-opacity-30 backdrop-blur-sm">
            {" "}
            {/* Update 3 */}
            {showFullResume ? (
              <div className="max-h-[calc(100vh-220px)] overflow-y-auto pr-4">
                {" "}
                {/* Update 2 */}
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-300">PROFESSIONAL SUMMARY</h3>
                  <p className="mb-4">
                    Senior Full Stack Software Engineer with 9 years of professional web development experience,
                    including 8 years full-stack work, 7 years C#/.NET, 5+ years in fully remote roles, and 3+ years at
                    a growing startup. Single-handedly designed and implemented several complex, user-friendly web
                    applications, including 3 in Blazor Server, 2 in Angular, and 3 in Vue. Implemented and extended
                    distributed systems with event driven architectures, including a large loan processing backend with
                    containerized microservices deployed in AWS and a laser engraving app with containers on a local
                    cluster. Has 4+ years of experience with cloud platforms, including Azure, AWS, CircleCI, and
                    DataDog. Advocates for code reviews via GitHub pull requests to maximize code quality and team
                    situational awareness. Leads discussions and product decisions that focus team efforts on the bare
                    essentials to quickly deliver valuable outcomes. Embraces cross-team collaboration to foster
                    continuous learning and camaraderie.
                  </p>
                </section>
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-300">SKILLS SUMMARY</h3>
                  <ul className="list-disc list-outside ml-6 space-y-2">
                    <li>
                      <span>
                        <span className="font-semibold">Languages:</span> C#, Python, JavaScript (ES6), TypeScript,
                        HTML5, CSS/SCSS, Kotlin, Java, C++, SQL
                      </span>
                    </li>
                    <li>
                      <span>
                        <span className="font-semibold">Backend:</span> .NET & Blazor (C#), Flask & FastAPI (Python),
                        Spring (Java), Swagger, GraphQL, RabbitMQ
                      </span>
                    </li>
                    <li>
                      <span>
                        <span className="font-semibold">Frontend:</span> Vue, AngularJS, React, Webpack, Vite, NPM,
                        Bootstrap, WebSockets, responsive layouts
                      </span>
                    </li>
                    <li>
                      <span>
                        <span className="font-semibold">Data Storage:</span> MySQL. PostgreSQL, Microsoft SQL Server,
                        MongoDB (NoSQL), Azure Blob & IoT
                      </span>
                    </li>
                    <li>
                      <span>
                        <span className="font-semibold">Cloud/DevOps:</span> Azure: VMs, Blob Storage, IoT, Key Vault,
                        Service Bus; AWS ECS, Docker, CircleCI, Jenkins, Datadog
                      </span>
                    </li>
                    <li>
                      <span>
                        <span className="font-semibold">Architectures:</span> Microservices, Event Driven Architecture,
                        MVC, MVVM, CQRS
                      </span>
                    </li>
                    <li>
                      <span>
                        <span className="font-semibold">Workflow:</span> Scrum, Kanban, GitHub (Issues, Actions, PRs),
                        Jira, Confluence, TeamCity, Slack
                      </span>
                    </li>
                  </ul>
                </section>
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-300">WORK EXPERIENCE</h3>

                  <div className="mb-6">
                    <h4 className="text-xl font-medium">Senior Software Engineer | Full Spectrum Laser</h4>
                    <p className="text-yellow-400 mb-2">January 2023 – Present</p>
                    <ul className="list-disc list-outside ml-6 space-y-2">
                      <li>
                        <span>
                          Co-wrote a performant FastAPI server in Python with an event-driven, scalable microservices
                          architecture. Used MySQL database hosted on an Azure VM for user data, Azure blob storage for
                          user-uploaded content, Azure IoT for laser device data, and Azure key vault for secrets.
                          Implemented a thread-safe cache for frequently accessed data.
                        </span>
                      </li>
                      <li>
                        <span>
                          Created mobile-friendly full-stack web app to control laser engraving machines with Blazor
                          Server (C#).
                        </span>
                      </li>
                      <li>
                        <span>
                          Leveraged Docker and Portainer to deploy and monitor containers for web server and supporting
                          services.
                        </span>
                      </li>
                      <li>
                        <span>
                          More than doubled a web server's capacity for the number of concurrent users by eliminating
                          all thread-blocking operations and offloading CPU-heavy tasks from server thread. Decreased
                          server's startup time by a factor of two.
                        </span>
                      </li>
                      <li>
                        <span>
                          Single-handedly designed and implemented full-stack web app for designing and running 3D laser
                          jobs. Leveraged Vue and Vite for rapid prototyping and design iteration. Designed the SQL
                          database and server API.
                        </span>
                      </li>
                      <li>
                        <span>
                          Mentored junior developers on client and server coding principles through discussions and code
                          reviews.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-medium">Backend Engineer | Promontory MortgagePath</h4>
                    <p className="text-yellow-400 mb-2">October 2021 – November 2022</p>
                    <ul className="list-disc list-outside ml-6 space-y-2">
                      <li>
                        <span>
                          Implemented all backend code in a microservices architecture to support a new affordable loan
                          program for end users. Updated databases, wrote unit and integration tests, and wrote thorough
                          documentation on Confluence.
                        </span>
                      </li>
                      <li>
                        <span>
                          Implemented backend code to pull employment history and tax documents for end users into the
                          company's system from a third-party vendor (Argyle). Used AWS S3 for updating multiple
                          databases with this new data.
                        </span>
                      </li>
                      <li>
                        <span>
                          Created highly beneficial dashboards in Datadog for third-party integrations, which enabled
                          early detection of issues and provided visuals of valuable business metrics.
                        </span>
                      </li>
                      <li>
                        <span>
                          Assisted in deploying and monitoring services deployed in AWS ECS. Used CircleCI for
                          cloud-based CI/CD system.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-medium">Software Engineer | MI Technical Solutions</h4>
                    <p className="text-yellow-400 mb-2">September 2020 – September 2021</p>
                    <ul className="list-disc list-outside ml-6 space-y-2">
                      <li>
                        <span>
                          Delivered full-stack app (.NET Core) for an important company contract. Implemented all
                          frontend and backend code with little guidance. Performed extensive research to determine the
                          design specifications and business rules. Wrote automated unit tests to achieve near 100%
                          coverage of the code and business use-cases.
                        </span>
                      </li>
                      <li>
                        <span>
                          Initiated effort to eliminate a large amount of duplicated code and to relocate files in a
                          poorly organized codebase. Successfully eliminated 2,000 lines of duplicated code. Created
                          smaller projects and folders to organize files based on the functionality of the code, while
                          carefully considering cross-project dependencies.
                        </span>
                      </li>
                      <li>
                        <span>
                          Worked on a complex app with large datasets that processed millions of Windows event logs and
                          used machine learning to detect anomalies in the logs. Created new web pages and database
                          queries, improved the overall organization and health of the codebase, and gave demos and
                          talks about the app to the company.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-medium">Software Engineer | ZulaFly</h4>
                    <p className="text-yellow-400 mb-2">May 2017 – September 2020</p>
                    <ul className="list-disc list-outside ml-6 space-y-2">
                      <li>
                        <span>
                          Generated high impact at a small startup by modernizing the company's main cloud-deployed
                          (Azure) web app. Implemented nearly all of the frontend (Vue) and a majority of the backend
                          (.NET Core). Greatly improved the scalability and performance on both client and server.
                          Regularly reviewed code with senior developers to ensure the code met high standards of
                          quality, which ensured quick feature iteration going forward.
                        </span>
                      </li>
                      <li>
                        <span>
                          Reduced server-side report generation time by a factor of 10 through code refactoring, which
                          minimized database round-trips and minimized the amount of data returned in each query from a
                          NoSQL (MongoDB) database.
                        </span>
                      </li>
                      <li>
                        <span>
                          Monitored and configured high volume message queues with RabbitMQ, which received events from
                          IoT devices through a cloud-deployed service on Azure.
                        </span>
                      </li>
                      <li>
                        <span>
                          Led design decisions for the company's new web app to improve the ease of use, visual
                          appearance, and page layout responsiveness compared to the old web app. Quickly prototyped
                          pages and views to show to the business owner and senior developers, then iterated on the
                          design based on their feedback.
                        </span>
                      </li>
                      <li>
                        <span>
                          Carefully reviewed all code from other in-house developers and consultants for the new web app
                          code base, often catching issues or inconsistencies before the code was merged.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-medium">Programmer | Blue Cross Blue Shield</h4>
                    <p className="text-yellow-400 mb-2">November 2015 – May 2017</p>
                    <ul className="list-disc list-outside ml-6 space-y-2">
                      <li>
                        <span>
                          Rebuilt a legacy web app into an AngularJS frontend as the only code contributor. This web app
                          allowed customers to register for a particular health insurance program. The rebuilt app had a
                          much better appearance and user-experience, including improved validation messages and better
                          content organization.
                        </span>
                      </li>
                      <li>
                        <span>
                          Co-wrote a full-stack ASP.NET MVC app that displayed data about the company's internal servers
                          and applications.
                        </span>
                      </li>
                      <li>
                        <span>
                          Led development on a command line interface program to create and populate a SQL database that
                          contained complex entity relationships with mock data for patients and healthcare providers.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-300">FORMAL EDUCATION</h3>

                  <div className="mb-4">
                    <h4 className="text-xl font-medium">M.S. in Physics | University of California Irvine</h4>
                    <p className="text-yellow-400 mb-2">September 2012 – June 2015</p>
                    <ul className="list-disc list-outside ml-6">
                      <li>
                        <span>
                          Wrote C++ programs to perform numerical analysis and data visualizations for physics Master's
                          thesis.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium">
                      B.S. in Engineering Physics | University of Colorado Boulder
                    </h4>
                    <p className="text-yellow-400 mb-2">August 2008 – May 2012</p>
                    <ul className="list-disc list-outside ml-6">
                      <li>
                        <span>
                          Wrote C++ programs to generate particle physics simulations and data visualizations for
                          physics Honors thesis.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            ) : (
              <div className="max-h-[calc(100vh-220px)] overflow-y-auto pr-4">
                {" "}
                {/* Update 2 */}
                <InfographicSummary />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

