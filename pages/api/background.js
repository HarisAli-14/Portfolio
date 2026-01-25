const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'FAST NUCES',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from FAST NUCES. Graduated in 2025.",
                year: '2021 - 2025'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Tribunus',
                role: 'Senior Developer',
                url: '',
                desc: 'Leading development initiatives as a Senior Developer, working on cutting-edge web applications and AI-powered solutions. Responsible for architecture decisions, code reviews, and mentoring junior developers. Developed Caryoyo, a production-ready SaaS application for Turo hosts.',
                year: 'December 2025 - Present',
                location: 'Canada'
            },
            {
                id: 2,
                title: 'NovaSoft',
                role: 'Full-Stack AI Developer',
                url: '',
                desc: 'Leading development of AI-based web platforms using LLMs and vector databases. Developed Agent Dispatch (custom AI agent builder with RAG), Auto Talent App (AI-powered CV generator), and Interview Buddy (Chrome extension with real-time AI interview answers).',
                year: 'June 2024 - December 2025',
                location: 'Remote'
            },
            {
                id: 3,
                title: 'Appalo',
                role: 'Web Development Intern',
                url: '',
                desc: 'Designed responsive web interfaces with React.js. Implemented dynamic UI components with JavaScript and jQuery. Optimized UX with improved layout and design, and added animations for better user engagement.',
                year: 'June 2023 - August 2023',
                location: 'Remote'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
