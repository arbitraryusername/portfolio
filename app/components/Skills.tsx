"use client"

import { Cpu, Code, Database, Server, Cloud, TestTube, Smartphone } from "lucide-react"

export function Skills() {
  const InfographicSummary = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 justify-items-center">
      <div className="flex flex-col items-center py-4 px-6 md:p-6 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl max-w-[350px] w-full">
        <Code className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-2 md:mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-center text-blue-300">Languages</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>C#, Python, SQL</li>
          <li>JS/TS, HTML, CSS</li>
          <li>Go, Java, C++</li>
        </ul>
      </div>
      <div className="flex flex-col items-center py-4 px-6 md:p-6 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl max-w-[350px] w-full">
        <Server className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-2 md:mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-center text-blue-300">Backend</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>.NET, Blazor (C#)</li>
          <li>Flask, FastAPI (Python)</li>
          <li>RabbitMQ, GraphQL</li>
        </ul>
      </div>
      <div className="flex flex-col items-center py-4 px-6 md:p-6 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl max-w-[350px] w-full">
        <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-2 md:mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-center text-blue-300">Frontend</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>Vue, React, Angular</li>
          <li>Node.js, Webpack</li>
          <li>WebSockets, HTTP</li>
        </ul>
      </div>
      <div className="flex flex-col items-center py-4 px-6 md:p-6 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl max-w-[350px] w-full">
        <Database className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-2 md:mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-center text-blue-300">Data Storage</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>MySQL, PostgreSQL</li>
          <li>MongoDB (NoSQL)</li>
          <li>Azure Blob, AWS S3</li>
        </ul>
      </div>
      <div className="flex flex-col items-center py-4 px-6 md:p-6 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl max-w-[350px] w-full">
        <Cloud className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-2 md:mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-center text-blue-300">Cloud/DevOps</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>Azure: VMs, Blob, IoT</li>
          <li>AWS: EKS, RDS, S3</li>
          <li>Docker, CircleCI</li>
        </ul>
      </div>
      <div className="flex flex-col items-center py-4 px-6 md:p-6 bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl max-w-[350px] w-full">
        <TestTube className="w-10 h-10 md:w-12 md:h-12 text-blue-300 mb-2 md:mb-4" />
        <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-center text-blue-300">Testing</h3>
        <ul className="list-disc text-blue-100 text-left pl-4">
          <li>Unit, Integration, E2E</li>
          <li>Selenium (C# & JS)</li>
          <li>NUnit, JUnit</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="text-blue-100 pt-20">
      <div className="relative z-20">
        <h2 className="text-3xl font-bold mb-6 md:mb-12 text-center flex items-center justify-center bg-transparent">
          <Cpu className="w-8 h-8 mr-2 text-yellow-400" />
          Skills
        </h2>
        <div className="max-w-5xl mx-auto px-4 md:px-12 overflow-y-auto max-h-[calc(100vh-180px)] pb-10">
          <InfographicSummary />
        </div>
      </div>
    </div>
  )
}

