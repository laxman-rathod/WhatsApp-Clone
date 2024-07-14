# WhatsApp Clone - A Seamless Messaging Experience 💬

## Introduction 🧩

This project is a WhatsApp clone built using Next.js, Convex, and TypeScript, designed to provide a smooth and feature-rich messaging experience. It leverages modern web technologies to deliver real-time chat functionality, secure user authentication using Clerk Auth, and an intuitive user interface handled by Next.js, React.js, Tailwind CSS, and Shadcn.

## Features 🪶

- **Real-time Chat:** Engage in instant messaging with individuals or groups.
- **Video Calling:** Call and video chat with anyone from anywhere.
- **Screen Sharing:** Share your screen with anyone in real-time.
- **End-to-End Encryption:** Enjoy secure and private conversations with end-to-end encryption.
- **User Authentication:** Securely manage user accounts and profiles.
- **Group Messaging:** Create and participate in group chats.
- **AI Support:** Get real-time intelligent responses like text, and image generation from AI agents such as Gemini pro, and DALL-E-3.
- **Online Presence Indicators:** See who's online and available to chat.
- **Modern User Interface:** A clean and intuitive interface inspired by WhatsApp.

## Tech Stack 🚀

- **Frontend:** Next.js, React.js, TypeScript, Tailwind CSS, ShadCN
- **Backend:** Next.js App Router for the SSR & SSG, Convex (Serverless backend) for real-time events and cloud functions
- **Database:** Convex (Built-in database)
- **API:** Google Generative AI, OpenAI DALL-E-3, ZegoCloud
- **Authentication:** Clerk Auth
  **Real-time Video Calling:** ZegoCloud

## Deployment 🪴

- **Quick Demo:** Feel free to explore the quick demo by clicking [here](https://whatsapp-cloned.vercel.app).
- Vercel (Production)
- GitHub (Source Code)

## Getting Started 🔥

### Prerequisites 🔮

- **Node.js and npm:** Download and install Node.js from [NodeJS](https://nodejs.org/). This will also install npm.
- **Convex:** Creat a Convex account if you already not [Convex.dev](https://convex.dev/).
- **Clerk:** Create a [Clerk](https://clerk.com) account for user authentication and get your Secret keys.
- **Google Gemini:** Make sure you have a [Google Gemini](https://deepmind.google/technologies/gemini/) API key.
- **OpenAI:** Make sure you have an [OpenAI](https://openai.com/) API key.

### Installation ⚙️

**1. Clone the repository:**

```bash
git clone https://github.com/laxman-rathod/WhatsApp-Clone.git
```

**2. Navigate to the project directory:**

```bash
cd WhatsApp-Clone
```

**3. Install dependencies:**

```bash
npm install
```

**4. Create a .env.local file in the root directory and add the following environment variables:**

```bash
CONVEX_DEPLOYMENT=<your-convex-deployment-url>
NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
OPENAI_API_KEY=<your-openai-api-key>
ZEGO_APP_ID=<your-zego-app-id>
ZEGO_SERVER_SECRET=<your-zego-server-secret>
GOOGLE_GENERATIVE_AI_API_KEY=<your-google-ai-api-key>
```

**5. Run the development server:**

```bash

npx convex dev # Deployment used by
npm run dev # Development server
```

The application should now be running at http://localhost:3000.

## Contributing 🤝

Contributions are highly welcome!

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature-name).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature-name).
- Open a pull request.

## License 📝

This project is licensed under the MIT LICENSE. See the [License](LICENSE) file for details.
