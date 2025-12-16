export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
            <p className="text-gray-600 mb-6">
                Welcome to the dashboard. This area uses a <strong>Nested Layout</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-800 mb-2">Total Users</h3>
                    <p className="text-3xl font-bold text-blue-900">1,234</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h3 className="font-semibold text-green-800 mb-2">Active Sessions</h3>
                    <p className="text-3xl font-bold text-green-900">567</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                    <h3 className="font-semibold text-purple-800 mb-2">Revunue</h3>
                    <p className="text-3xl font-bold text-purple-900">$12,450</p>
                </div>
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Try navigating to "Settings" in the sidebar. Notice how the sidebar doesn't flicker or re-render? That's the power of layouts.
            </p>
        </div>
    );
}
