import Link from 'next/link';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar - This persists across dashboard pages */}
            <aside className="w-64 bg-white border-r shadow-sm hidden md:block">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
                </div>
                <nav className="p-4 space-y-2">
                    <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                    >
                        Overview
                    </Link>
                    <Link
                        href="/dashboard/settings"
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                    >
                        Settings
                    </Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="bg-white p-6 rounded-xl shadow-sm min-h-[500px]">
                    {children}
                </div>
            </main>
        </div>
    );
}
