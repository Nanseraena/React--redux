export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-4">About This Project</h1>
            <p className="text-lg text-gray-600 max-w-2xl text-center">
                This application is designed to demonstrate key Next.js concepts including:
            </p>
            <ul className="list-disc text-left mt-6 space-y-2 text-gray-700">
                <li><strong>Routing:</strong> How file-system based routing works.</li>
                <li><strong>Layouts:</strong> Using nested layouts to persist UI elements.</li>
                <li><strong>Components:</strong> Building reusable UI parts.</li>
            </ul>
        </div>
    );
}
