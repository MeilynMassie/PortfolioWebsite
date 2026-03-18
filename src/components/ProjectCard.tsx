export default function ProjectCard() {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold mb-2">Project Title</h2>
            <p className="text-gray-600 mb-4">A brief description of the project goes here.</p>
            <div className="flex gap-2">
                <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                <a href="#" className="text-blue-500 hover:underline">Live Demo</a>
            </div>
        </div>
    )
}