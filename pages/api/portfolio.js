const portfolio = [
    {
        id: 0,
        projectName: "Agent Dispatch",
        url: "https://agent-dispatch.com",
        image: "projects/agent-dispatch.png",
        projectDetail: "A custom AI agent builder platform that allows users to upload files and generate specialized AI agents using Retrieval-Augmented Generation (RAG) and OpenAI. Built with scalable architecture using Next.js frontend and FastAPI backend. Users can create task-specific AI agents trained on their own data for enhanced context-aware responses.",
        technologiesUsed: [
            {
                tech: "Next.js"
            },
            {
                tech: "FastAPI"
            },
            {
                tech: "OpenAI"
            },
            {
                tech: "RAG"
            },
            {
                tech: "Pinecone"
            },
            {
                tech: "TypeScript"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Yetti AI",
        url: "https://yetti.ai/",
        image: "projects/yetti-ai.png",
        projectDetail: "An AI-powered customer support platform that provides intelligent chat automation across multiple messaging platforms including WhatsApp, Instagram, Telegram, and more. Features include knowledge base management, workspace hours tracking, billing integration with Stripe, and multi-language support. Built with Next.js 16, Supabase, and modern AI integrations.",
        technologiesUsed: [
            {
                tech: "Next.js 16"
            },
            {
                tech: "Supabase"
            },
            {
                tech: "Stripe"
            },
            {
                tech: "TypeScript"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Framer Motion"
            },
        ]
    },
    {
        id: 2,
        projectName: "Caryoyo",
        url: "https://caryoyo.com/",
        image: "projects/turo-saas.png",
        projectDetail: "A production-ready SaaS application for Turo hosts to manage their fleet and track profits. Features include secure authentication, robust CSV import with license plate normalization, real-time analytics dashboard with monthly charts, vehicle management, transaction tracking, and beautiful Turo-inspired UI. Built with Next.js 14, Supabase, and comprehensive security features.",
        technologiesUsed: [
            {
                tech: "Next.js 14"
            },
            {
                tech: "Supabase"
            },
            {
                tech: "PostgreSQL"
            },
            {
                tech: "TypeScript"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Recharts"
            },
            {
                tech: "Framer Motion"
            },
        ]
    },
    {
        id: 3,
        projectName: "Auto Talent App",
        url: "https://app.autotalent.co/",
        image: "projects/auto-talent.png",
        projectDetail: "An AI-powered CV generator and LinkedIn job scraper application. Features include AI-generated resume building, LinkedIn job scraping capabilities, and role-based quizzes for skills assessment to evaluate job fit. Helps job seekers create professional resumes and find matching opportunities.",
        technologiesUsed: [
            {
                tech: "Next.js"
            },
            {
                tech: "OpenAI"
            },
            {
                tech: "Node.js"
            },
            {
                tech: "Express"
            },
            {
                tech: "MongoDB"
            },
        ]
    },
    {
        id: 4,
        projectName: "Interview Buddy",
        url: "",
        image: "projects/interview-buddy.png",
        projectDetail: "A Chrome extension that listens to interviewers in real-time and suggests AI-generated answers using Whisper for speech-to-text and ChatGPT for intelligent responses. Provides instant assistance during interviews, helping candidates respond confidently to questions. Built using Chrome APIs, background scripts, and AI integration.",
        technologiesUsed: [
            {
                tech: "Chrome Extension"
            },
            {
                tech: "Whisper API"
            },
            {
                tech: "ChatGPT"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Chrome APIs"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
