import Link from 'next/link';

// Mock data to simulate fetching details
const tasks = [
    { id: 1, title: 'Learn Next.js Routing', description: 'Understand how file-system routing maps files to URLs.' },
    { id: 2, title: 'Understand Layouts', description: 'Learn how to share UI across multiple pages using layout.tsx.' },
    { id: 3, title: 'Build a Dashboard', description: 'Create nested layouts for complex application interfaces.' },
];

export default async function TaskDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    // Await the params object
    const { id } = await params;
    const taskId = parseInt(id);
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-8">
                <h1 className="text-2xl font-bold text-red-500">Task not found</h1>
                <Link href="/tasks" className="mt-4 text-blue-500 hover:underline">
                    &larr; Back to Task List
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="w-full max-w-2xl border p-8 rounded-xl shadow-lg">
                <div className="mb-6">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        Task ID: {taskId}
                    </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{task.title}</h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {task.description}
                </p>
                <Link
                    href="/tasks"
                    className="inline-block px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                    &larr; Back to Task List
                </Link>
            </div>
        </div>
    );
}
