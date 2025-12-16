export default function SettingsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <p className="text-gray-600 mb-8">
                This is a sub-page within the dashboard layout.
            </p>

            <div className="space-y-6 max-w-lg">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                    <div>
                        <h4 className="font-medium">Notifications</h4>
                        <p className="text-sm text-gray-500">Receive email updates</p>
                    </div>
                    <div className="h-6 w-11 bg-blue-500 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></div>
                    </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                    <div>
                        <h4 className="font-medium">Dark Mode</h4>
                        <p className="text-sm text-gray-500">Toggle website theme</p>
                    </div>
                    <div className="h-6 w-11 bg-gray-300 rounded-full relative cursor-pointer">
                        <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
