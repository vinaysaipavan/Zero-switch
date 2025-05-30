
 export function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-700 to-pink-500 text-transparent bg-clip-text">
          Project Documentation
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-lg leading-relaxed">
            This project leverages NLP and offline AI models to help developers solve coding problems
            without requiring an internet connection. By downloading the Ollama model locally and integrating
            Python CLI tools, our solution ensures instant and distraction-free help during development.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Offline AI assistance using locally downloaded Ollama model</li>
            <li>Command-line based Python tool for quick interaction</li>
            <li>Capable of understanding and solving common coding queries</li>
            <li>Supports various programming languages</li>
            <li>Zero network dependency once installed</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Clone the repository to your local machine.</li>
            <li>Install Python dependencies using <code>pip install -r requirements.txt</code>.</li>
            <li>Download the Ollama model from the official source.</li>
            <li>Run <code>python main.py</code> to start the CLI interface.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Usage</h2>
          <p className="text-lg leading-relaxed">
            Once the CLI is up and running, you can type in your coding question, and the model will
            return a solution based on the downloaded knowledge base. You can continue asking questions
            without the need for the internet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Credits</h2>
          <p className="text-lg">
            Built by BRIX for Hackvyuha 2025 using Python, Ollama, and React.
          </p>
        </section>
      </div>
    </div>
  );
};

