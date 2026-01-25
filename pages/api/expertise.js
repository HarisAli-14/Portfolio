const expertise = [
    {
        id: 0,
        title: 'AI & Machine Learning',
        desc: 'Specialized in building generative AI-powered applications using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). Experienced in integrating OpenAI APIs, vector databases like Pinecone, and implementing AI agents for various use cases including customer support, content generation, and intelligent automation.',
    },
    {
        id: 1,
        title: 'Full-Stack Development',
        desc: 'Expert in building scalable web applications using modern technologies. Proficient in React, Next.js for frontend development, and Node.js, Express, FastAPI for backend services. Experienced with databases including MongoDB, MySQL, and Supabase. Skilled in creating RESTful APIs and implementing secure authentication systems.',
    },
    {
        id: 2,
        title: 'SaaS Platform Development',
        desc: 'Experienced in developing production-ready SaaS applications with features like multi-tenant architecture, subscription management, analytics dashboards, and secure data handling. Built Turo SaaS for fleet management with CSV import, real-time analytics, and transaction tracking capabilities.',
    },
    {
        id: 3,
        title: 'Chrome Extension Development',
        desc: 'Built Interview Buddy, a Chrome extension that listens to interviewers and provides AI-generated answers in real-time using Whisper and ChatGPT. Experienced in Chrome APIs, background scripts, content scripts, and creating seamless browser integrations.',
    },
    {
        id: 4,
        title: 'Vector Databases & RAG',
        desc: 'Expert in implementing Retrieval-Augmented Generation systems using vector databases like Pinecone. Built Agent Dispatch, a custom AI agent builder that allows users to upload files and generate specialized AI agents using RAG technology for enhanced context-aware responses.',
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
