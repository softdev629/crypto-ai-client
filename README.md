# Crypto Chatbot UI

A **React-based Chatbot User Interface** designed for cryptocurrency-related tasks. It offers real-time communication, PDF viewing for crypto-related documents (e.g., whitepapers), and a clean design built with **Ant Design**, **PDF.js**, and **WebSocket hooks**.

---

## Features

- **Crypto-Focused Chatbot Interface**: Engage with a chatbot specifically customized for cryptocurrency tasks like price tracking, updates, FAQs, or educational material.
- **PDF Viewer**: Easily view cryptocurrency whitepapers, reports, or guides using [PDF.js library](https://mozilla.github.io/pdf.js/).
- **Ant Design UI**: Elegant and intuitive user interface with Ant Design components.
- **Real-Time Communication**: Real-time message exchange powered by WebSocket hooks.

---

## Prerequisites

1. **Node.js** (v16 or later): Install Node.js from [nodejs.org](https://nodejs.org/).
2. **Chatbot Backend API**: The chatbot interacts with a backend API. Ensure the backend service handling the crypto-related chatbot data is up and running.

---

## Getting Started

Follow these steps to set up and test the Crypto Chatbot UI locally:

### 1. Clone the Repository

```bash
git clone https://github.com/softdev629/crypto-ai-client.git
cd crypto-ai-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Backend API

Ensure the chatbot API backend (which provides cryptocurrency-related answers and functionality) is properly configured and running. Follow the backend repository setup instructions for details.

If you're testing locally, ensure your backend listens on `localhost` with the correct ports (e.g., `5000`).

---

### 4. Start the Development Server

Once the backend API is running, start the React development server:

```bash
npm start
```

Access the project at [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

Organized for scalability and ease of development:

```
src/
├── components/          // Reusable React components
│   ├── chatbox.js         // Handles chatbot UI and message rendering
│   ├── doc-upload.js       // Handles displaying PDFs like whitepapers
└── App.js               // Main application entry point
```

---

## Libraries Used

| Library                            | Purpose                                      |
|------------------------------------|----------------------------------------------|
| [React](https://reactjs.org)       | Core framework for building the application  |
| [Ant Design](https://ant.design/)  | Prebuilt UI components and styling           |
| [PDF.js](https://mozilla.github.io/pdf.js/) | Viewing crypto whitepapers or PDFs        |
| [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) | Real-time communication with the crypto backend  |

---

## Use Cases

This chatbot can be customized for various crypto-related use cases:

- Get live cryptocurrency price updates (e.g., Bitcoin, Ethereum).
- Access FAQs about crypto trading, wallets, or technology.
- Display cryptocurrency whitepapers or PDF documents for users.
- Offer educational content about blockchain and crypto in an interactive conversation.

---

## Contributing

Contributions are welcome! Feel free to fork this repository, make updates, and submit a pull request.

If you encounter any issues or have feature requests, file an issue in this repository.

---

## Acknowledgments

Special thanks to:

- **Ant Design Team** for providing highly customizable UI components.
- **Mozilla's PDF.js** for the PDF viewer.
- The open-source community for making amazing libraries and frameworks available.
- The cryptocurrency community for inspiring use cases and projects.

---

## Future Enhancements

Potential ideas to extend the project's functionality:

1. **Multi-Language Support**: Add NLP support for multiple languages.
2. **Authentication**: Secure the chatbot with user logins for personalized responses.
3. **Crypto Market Analytics**: Show advanced charts or real-time metrics for crypto prices.
4. **Bot Training**: Integrate machine learning models for intelligent crypto-related query handling.
