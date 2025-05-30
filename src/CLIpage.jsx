import { useState } from 'react';

export function CLIpage(){
  const [activeCommand, setActiveCommand] = useState(null);

  const commands = [
    {
      name: 'explain',
      about: 'This command analyzes your code file and generates a comprehensive explanation of how it works, including the purpose of each section and key functions. It helps developers understand unfamiliar codebases quickly.',
      description: 'Generates a detailed explanation of the code in the specified file',
      usage: 'explain filename.extension',
      example: 'explain main.py',
      output: 'Creates explanation.txt with line-by-line breakdown of the code'
    },
    {
      name: 'debug',
      about: 'The debug command scans your code for potential errors, logical flaws, and common anti-patterns. It provides actionable suggestions to fix issues and improve code reliability.',
      description: 'Identifies and explains potential bugs in the code',
      usage: 'debug filename.extension',
      example: 'debug app.js',
      output: 'Generates debug_report.txt with found issues and suggestions'
    },
    {
      name: 'optimize',
      about: 'This command examines your code for performance bottlenecks and suggests optimizations. It covers algorithmic improvements, memory usage, and computational efficiency.',
      description: 'Suggests optimizations for better performance',
      usage: 'optimize filename.extension',
      example: 'optimize database.rb',
      output: 'Produces optimization_suggestions.txt with improvements'
    },
    {
      name: 'test',
      about: 'Automatically generates relevant test cases for your code, including edge cases and typical usage scenarios. Helps improve test coverage without manual test writing.',
      description: 'Generates test cases for the code',
      usage: 'test filename.extension',
      example: 'test utils.go',
      output: 'Creates test_cases.txt with suggested unit tests'
    },
    {
      name: 'validate',
      about: 'Checks your code against industry best practices, style guides, and security standards. Ensures consistency and quality across your codebase.',
      description: 'Checks code against best practices and style guides',
      usage: 'validate filename.extension',
      example: 'validate index.html',
      output: 'Outputs validation_report.txt with compliance results'
    }
  ];

  const toggleCommand = (index) => {
    setActiveCommand(activeCommand === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Offline CLI Commands</h1>
        <p className="text-center text-gray-300 mb-12">
          Our project provides these powerful commands that work offline using Ollama LLM.
          No internet connection required!
        </p>

        <div className="space-y-4">
          {commands.map((command, index) => (
            <div 
              key={command.name}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border border-gray-700"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none hover:bg-gray-700 transition-colors duration-200"
                onClick={() => toggleCommand(index)}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">
                    {command.name} <span className="text-sm font-normal text-gray-400 ml-2">command</span>
                  </h2>
                  <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${activeCommand === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {activeCommand === index && (
                <div className="px-6 pb-4 pt-0">
                  <div className="border-t border-gray-700 pt-4 space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-1">About</h3>
                      <p className="text-gray-300">{command.about}</p>
                    </div>
                    
                    <div className="bg-gray-700 p-3 rounded-md">
                      <h3 className="text-sm font-medium text-gray-400 mb-1">Usage</h3>
                      <code className="text-gray-100 font-mono">{command.usage}</code>
                    </div>
                    
                    <div className="bg-gray-700 p-3 rounded-md">
                      <h3 className="text-sm font-medium text-gray-400 mb-1">Example</h3>
                      <code className="text-gray-100 font-mono">{command.example}</code>
                    </div>
                    
                    <div className="bg-gray-700 p-3 rounded-md">
                      <h3 className="text-sm font-medium text-gray-400 mb-1">Output</h3>
                      <p className="text-gray-100">{command.output}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-lg font-medium text-blue-400 mb-2">How it works</h2>
          <p className="text-gray-300">
            These commands use Ollama LLM to process your files locally. Just type the command in your terminal
            followed by a filename, and the tool will generate a text file with the results. No internet
            connection needed!
          </p>
        </div>
      </div>
    </div>
  );
};

