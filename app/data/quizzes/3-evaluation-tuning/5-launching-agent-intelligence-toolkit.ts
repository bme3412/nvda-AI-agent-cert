import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What command is used to start the AIQ toolkit server with a specific configuration?',
    options: [
      'aiq start --config_file=path/to/config.yml to initialize the server with specified workflow settings',
      'aiq launch --config_file=path/to/config.yml to begin server operations with custom parameters',
      'aiq run --config_file=path/to/config.yml to execute the server process with configuration directives',
      'aiq serve --config_file=path/to/config.yml to launch the server using the designated configuration'
    ],
    correctAnswer: 3,
    explanation: 'The correct command is aiq serve --config_file=examples/simple_calculator/configs/config.yml. The serve subcommand specifically launches the AIQ toolkit server, which then runs on http://localhost:8000 by default. The config file specifies the workflow, models, tools, and other settings the server will use.'
  },
  {
    id: 'q2',
    question: 'What prerequisite software must be installed to launch the AIQ toolkit web user interface?',
    options: [
      'Node.js version 18 or higher to run the web development server and install dependencies',
      'Python version 3.8 or higher with pip package manager and virtual environment support',
      'Docker Desktop for containerization along with docker-compose for orchestration capabilities',
      'Java Runtime Environment version 11 or newer to execute the frontend compilation process'
    ],
    correctAnswer: 0,
    explanation: 'Launching the AIQ toolkit UI requires Node.js v18+ to be installed. The UI is a Node.js-based web application located in the external/aiqtoolkit-opensource-ui subdirectory. After navigating to this directory, you run npm install to install dependencies and npm run dev to start the development server.'
  },
  {
    id: 'q3',
    question: 'What is the default port on which the AIQ toolkit server runs after launching?',
    options: [
      'Port 8080, which is the standard alternative HTTP port commonly used for development servers',
      'Port 3000, which is the typical port for Node.js applications and web development servers',
      'Port 5000, which is the conventional port for Flask and lightweight Python web applications',
      'Port 8000, which is where Uvicorn hosts the AIQ toolkit server by default for API requests'
    ],
    correctAnswer: 3,
    explanation: 'The server runs on http://localhost:8000 as shown in the startup output: "Uvicorn running on http://localhost:8000". This is the port where you send API requests like POST to /generate. The web UI (which is separate) runs on port 3000 by default.'
  },
  {
    id: 'q4',
    question: 'Which HTTP endpoint is recommended for receiving intermediate results streaming from the server?',
    options: [
      '/generate for basic request-response interactions without any streaming of intermediate processing steps',
      '/websocket for persistent bidirectional connections that maintain state across multiple interactions',
      '/api/stream for generic streaming responses that provide continuous data flow during processing',
      '/chat/stream for streaming intermediate results, which is the recommended endpoint for real-time updates'
    ],
    correctAnswer: 3,
    explanation: 'The documentation specifically notes "It is recommended to select /chat/stream for intermediate results streaming." This endpoint allows you to see the agent\'s intermediate steps and reasoning in real-time as it processes your request, rather than waiting for the complete final response.'
  },
  {
    id: 'q5',
    question: 'What alternative port does the AIQ toolkit UI use if the default port is already in use?',
    options: [
      'Port 3001 as an alternative if port 3000 is already occupied by another running application',
      'Port 8001 as the automatic fallback when the primary port encounters conflicts with other services',
      'Port 8080 which serves as the standard backup port for all Node.js development servers',
      'Port 5000 as the secondary option when the default configuration cannot bind successfully'
    ],
    correctAnswer: 0,
    explanation: 'The documentation states "Port 3001 is an alternative port if port 3000 (default) is in use." The UI\'s development server automatically attempts to use port 3001 if it cannot bind to port 3000, ensuring you can still run the interface even if another application is using the default port.'
  },
  {
    id: 'q6',
    question: 'Where is the AIQ toolkit user interface code located within the repository structure?',
    options: [
      'In a git submodule at external/aiqtoolkit-opensource-ui that must be explicitly initialized and updated',
      'In the src/ui directory at the root level alongside other core source code components',
      'In the web-ui folder under the main examples directory containing demonstration implementations',
      'In a separate npm package that must be installed globally using npm install -g commands'
    ],
    correctAnswer: 0,
    explanation: 'The UI is located in a git submodule at external/aiqtoolkit-opensource-ui. Before using it, you must run git submodule update --init --recursive to check out the submodule. This approach keeps the UI code separate and allows independent versioning and updates.'
  },
  {
    id: 'q7',
    question: 'What are the available HTTP API endpoint options for chat completion in AIQ toolkit?',
    options: [
      'Only /generate and /chat endpoints without any streaming capabilities for real-time responses',
      'Exclusively WebSocket-based endpoints for all communication requiring persistent bidirectional connections',
      '/api/v1/chat and /api/v1/generate following RESTful versioning conventions for backward compatibility',
      '/generate, /generate/stream, /chat, and /chat/stream endpoints supporting both standard and streaming interactions'
    ],
    correctAnswer: 3,
    explanation: 'The settings panel shows four HTTP endpoint options: /generate (basic request), /generate/stream (streaming generation), /chat (basic chat), and /chat/stream (streaming chat with recommended intermediate results). These provide flexibility in how you interact with the agent depending on whether you need streaming updates.'
  },
  {
    id: 'q8',
    question: 'What method can be used to verify that the AIQ toolkit server is running correctly?',
    options: [
      'Making a POST request to an endpoint like /generate with appropriate JSON payload and headers',
      'Checking the server logs for error messages and confirming all services initialized without failures',
      'Opening the web browser and navigating directly to http://localhost:8000 to view the interface',
      'Running a health check command aiq status to query the server\'s current operational state'
    ],
    correctAnswer: 0,
    explanation: 'The documentation shows verifying the server by making a curl POST request to http://localhost:8000/generate with JSON data. A successful response confirms the server is running and processing requests. The web UI is separate and runs on port 3000, not 8000.'
  },
  {
    id: 'q9',
    question: 'What UI features does the AIQ toolkit user interface provide for workflow interaction?',
    options: [
      'Chat history, HTTP and WebSocket interaction options, and control over intermediate step visibility',
      'Only basic text input with no ability to view conversation history or intermediate processing steps',
      'Exclusively file upload capabilities for document processing without any conversational interface elements',
      'Simple command-line interface wrapper without graphical elements for configuration or monitoring'
    ],
    correctAnswer: 0,
    explanation: 'The UI provides multiple features: chat history for reviewing conversations, interaction via HTTP API or WebSocket, ability to enable/disable workflow intermediate steps, option to expand all intermediate steps by default, and capability to override intermediate steps with the same ID. These features provide rich interaction and debugging capabilities.'
  },
  {
    id: 'q10',
    question: 'What is the purpose of the WebSocket connection option in the AIQ toolkit UI settings?',
    options: [
      'To establish persistent bidirectional communication with the running AIQ toolkit server for real-time interaction',
      'To enable file uploads and downloads between the client browser and the server infrastructure',
      'To provide authentication mechanisms for securing connections between multiple concurrent users',
      'To enable distributed processing across multiple server instances for improved performance scaling'
    ],
    correctAnswer: 0,
    explanation: 'The WebSocket URL setting allows connecting to the AIQ toolkit server using WebSocket protocol, which provides persistent bidirectional communication. This is useful for real-time streaming of agent responses and intermediate steps, maintaining stateful connections, and reducing latency compared to repeated HTTP requests.'
  },
  {
    id: 'q11',
    question: 'What information does the server startup output provide to confirm successful initialization?',
    options: [
      'Process ID, registered handlers, agent graph initialization status, and the URL where server is accessible',
      'Only the port number without any details about registered components or initialization sequence',
      'Memory usage statistics, performance benchmarks, and expected response times for common operations',
      'Database connection strings, API keys validation results, and external service health checks'
    ],
    correctAnswer: 0,
    explanation: 'The startup output shows the process ID (47250), Langchain callback handler registration, prompt variable filling, ReAct Agent Graph initialization, graph compilation success, and the Uvicorn URL (http://localhost:8000). This comprehensive output confirms all components initialized correctly before the server begins accepting requests.'
  },
  {
    id: 'q12',
    question: 'What configuration option allows users to choose between light and dark visual themes?',
    options: [
      'The theme option in the UI settings panel accessible from the bottom left corner icon',
      'The appearance setting in the system preferences that automatically syncs with operating system theme',
      'The color-scheme parameter in the configuration YAML file that controls server-side rendering',
      'The display mode toggle in the browser\'s developer tools that overrides all stylesheet preferences'
    ],
    correctAnswer: 0,
    explanation: 'The Settings panel (accessed via the icon in the bottom left corner) includes a "Theme: Light or Dark Theme" option. This allows users to choose their preferred visual appearance for the web interface independently of system settings or server configuration.'
  },
  {
    id: 'q13',
    question: 'What does the "use_knowledge_base" parameter control in the API request payload?',
    options: [
      'Which specific database instance to query from among multiple configured knowledge base options',
      'The maximum number of knowledge base entries to retrieve before generating the response',
      'Whether to cache knowledge base results for future requests to improve performance',
      'Whether the agent should retrieve information from configured vector databases or knowledge sources'
    ],
    correctAnswer: 3,
    explanation: 'The example request includes "use_knowledge_base": true in the JSON payload. This parameter indicates whether the agent should utilize configured knowledge sources (like vector databases) when processing the request, allowing the agent to access additional context beyond its base capabilities.'
  },
  {
    id: 'q14',
    question: 'What must be done before accessing the AIQ toolkit UI code if it\'s not already present?',
    options: [
      'Execute git submodule update --init --recursive to initialize and check out the UI submodule',
      'Run npm install from the repository root to download all frontend dependencies automatically',
      'Clone a separate repository containing the UI code and manually link it to the main project',
      'Download a pre-built UI distribution package from the official NVIDIA developer portal'
    ],
    correctAnswer: 0,
    explanation: 'Because the UI is in a git submodule (not regular repository files), you must explicitly initialize it with git submodule update --init --recursive. This command fetches the submodule content from its repository. Only after this can you navigate to the UI directory and run npm commands.'
  },
  {
    id: 'q15',
    question: 'What does the "Override intermediate steps with the same ID" feature allow users to do?',
    options: [
      'Permanently delete duplicate intermediate steps from the workflow execution history and logs',
      'Prevent multiple agents from executing identical steps simultaneously to avoid resource conflicts',
      'Merge redundant processing steps into a single operation for improved performance optimization',
      'Replace or update intermediate step results sharing the same identifier during workflow execution'
    ],
    correctAnswer: 3,
    explanation: 'This UI feature allows overriding intermediate steps that have the same ID, meaning if multiple intermediate steps share an identifier, you can replace or update their results. This is useful for debugging, testing alternative approaches, or manually correcting agent behavior without rerunning entire workflows.'
  }
];
