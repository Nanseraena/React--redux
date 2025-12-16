import Link from 'next/link';

// Mock data (in a real app, this would come from an API)
const tasks = [
    { id: 1, title: 'Learn Next.js Routing' },
    { id: 2, title: 'Understand Layouts' },
    { id: 3, title: 'Build a Dashboard' },
];

export default function TasksPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-6">Task List</h1>
            <p className="mb-8 text-gray-600">
                Click on a task to see how dynamic routing works (watch the URL change).
            </p>
            <div className="w-full max-w-md space-y-4">
                {tasks.map((task) => (
                    <Link
                        key={task.id}
                        href={`/tasks/${task.id}`}
                        className="block p-4 border rounded-lg hover:bg-gray-50 transition duration-150 shadow-sm"
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-lg">{task.title}</span>
                            <span className="text-blue-500 text-sm">View Details &rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
