import { getStats, getTodos } from './api';

export default async function DashboardPage() {
    // Initiate both requests in parallel
    const statsData = getStats();
    const todosData = getTodos();

    // Wait for the promises to resolve
    const [stats, todos] = await Promise.all([statsData, todosData]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
            <p className="text-gray-600 mb-6">
                Welcome to the dashboard. This area uses a <strong>Nested Layout</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-800 mb-2">Total Users</h3>
                    <p className="text-3xl font-bold text-blue-900">{stats.users.toLocaleString()}</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h3 className="font-semibold text-green-800 mb-2">Active Sessions</h3>
                    <p className="text-3xl font-bold text-green-900">{stats.sessions.toLocaleString()}</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                    <h3 className="font-semibold text-purple-800 mb-2">Revenue</h3>
                    <p className="text-3xl font-bold text-purple-900">${stats.revenue.toLocaleString()}</p>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Recent Todos (Batch Fetched)</h2>
                <ul className="list-disc pl-5">
                    {todos.slice(0, 5).map((todo: any) => (
                        <li key={todo.id}>{todo.item}</li>
                    ))}
                </ul>
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Try navigating to "Settings" in the sidebar. Notice how the sidebar doesn't flicker or re-render? That's the power of layouts.
            </p>
        </div>
    );
}
