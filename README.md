# Muhammad Ahmed Sajid – 3D Portfolio

A modern personal portfolio built with Next.js, React, Tailwind CSS, Three.js, and a Gemini-powered AI assistant. The experience combines immersive 3D visuals, polished UI animations, and portfolio content that can be asked about in natural language.

Live site: https://ahmed-sajid.vercel.app/

## What this project includes

- A responsive single-page portfolio experience
- Interactive 3D visuals rendered with Three.js, React Three Fiber, and Drei
- Smooth animations powered by Framer Motion, AOS, and react-tilt
- A contact form connected to EmailJS
- An AI chatbot that answers questions using [react-ai-chat](https://github.com/M-AhmedSajid/react-ai-chat) and portfolio content stored in Markdown and embedded for retrieval
- Dark/light theme support with Next Themes

## Tech stack

- Framework: Next.js 16 and React 19
- Styling: Tailwind CSS, Radix UI, React Feather Icons
- 3D: Three.js, @react-three/fiber, @react-three/drei
- AI: @ai-sdk/google, @google/genai, ai
- Utilities: next-themes, AOS, react-markdown, motion, clsx, tailwind-merge

## Project structure

- app/ – app routes, layout, and page sections
- app/api/chat/route.js – AI chat API endpoint
- app/components/ – portfolio sections such as hero, about, projects, timeline, and contact
- components/ – shared UI primitives and animated components
- data/ – Markdown content for about, experience, projects, services, skills, and certificates
- lib/ – helpers for embeddings, context retrieval, cursor effects, and theme setup
- scripts/generateEmbeddings.js – generates vector embeddings from Markdown content

## 🤖 AI Portfolio Chatbot

An AI-powered chatbot that answers questions about my skills, projects, experience, and education using Retrieval-Augmented Generation (RAG).

### Features

- Semantic search with Gemini embeddings
- Markdown-based knowledge base
- Context-aware responses
- Streaming responses
- Serverless deployment

## Getting started

1. Clone the repository

```bash
git clone https://github.com/M-AhmedSajid/My-3d-Portfolio.git
cd My-3d-Portfolio
```

2. Install dependencies

```bash
npm install
```

3. Create a local environment file

```bash
cp .env.example .env.local
```

If there is no .env.example file in your setup, create .env.local manually with the following variables:

```env
NEXT_PUBLIC_SERVICE_ID=
NEXT_PUBLIC_TEMPLATE_ID=
NEXT_PUBLIC_PUBLIC_KEY=
NEXT_PUBLIC_CHAT_API
ALLOWED_ORIGIN=
GOOGLE_GENERATIVE_AI_API_KEY=
```

4. Generate embeddings for the AI assistant

```bash
npm run embeddings
```

5. Start the development server

```bash
npm run dev
```

## Useful scripts

```bash
npm run dev      # start the local dev server
npm run build    # create a production build
npm run lint     # run ESLint
npm run embeddings # generate AI retrieval embeddings
```

## 📌 Notes

- This project is open-source but meant for educational or inspirational use.
- Do **not** directly copy personal content or assets without permission.
- Make sure to configure your own **EmailJS** keys if deploying a forked version.
- The portfolio content is mostly driven by Markdown files in the data/ folder, so updating content is straightforward.
- The AI chatbot is intentionally scoped to portfolio information and should not be used as a general-purpose assistant.
- If you fork this project for personal use, replace the content in data/ and update the contact configuration to match your own setup.

---

## 👨‍💻 Developed by

**M. Ahmed Sajid**  
Full Stack Developer 💻 | Making Web Development Easy 🛠️ 
🌐 [Visit My Portfolio](https://ahmed-sajid.vercel.app/)

---

## ⭐️ Show Support

If you like this project:

- 🌟 Star the repo  
- 🔁 Share it with friends  
- 💬 Give feedback or suggest improvements!