
export async function getStats() {
    const res = await fetch('http://127.0.0.1:8000/api/dashboard-stats/', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch stats');
    }
    return res.json();
}

export async function getTodos() {
    const res = await fetch('http://127.0.0.1:8000/api/todos/', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch todos');
    }
    return res.json();
}
