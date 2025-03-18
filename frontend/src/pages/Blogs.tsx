
import { Blogcard } from "../components/ Blogcard"
import { Appbar } from "../components/Appbar"

export const Blogs = () => {
    return <div className="min-h-screen bg-gray-900 py-10 px-4">
        <Appbar />
        <div className="max-w-6xl mx-auto space-y-8">
            <Blogcard
                authorName="Divyansh Nahar"
                authorDescription="CEO, BLASTprod Inc"
                title="How to get started with React"
                content="React is a popular JavaScript library for building user interfaces. Learn how to get started with React in this blog post."
                publishedDate="2021-09-01"
            />
            <Blogcard
                authorName="John Doe"
                authorDescription="Software Engineer"
                title="How to get started with TypeScript"
                content="TypeScript is a popular programming language that is a superset of JavaScript. Learn how to get started with TypeScript in this blog post."
                publishedDate="2021-09-02"
            />
            <Blogcard
                authorName="Jane Doe"
                authorDescription="Frontend Developer"
                title="How to get started with Tailwind CSS"
                content="Tailwind CSS is a popular utility-first CSS framework. Learn how to get started with Tailwind CSS in this blog post."
                publishedDate="2021-09-02"
            />
        </div>
    </div>
}