import Link from "next/link"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-surface">
      <div className="text-center space-y-6">
        <h1 className="text-h1 text-text-primary">Sensedia User Management</h1>

        <p className="text-body text-text-secondary">
          Manage users, view details and perform actions!
        </p>

        <Link
          href="/users"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md shadow-sm hover:opacity-90 transition"
        >
          View Users
        </Link>
      </div>
    </main>
  )
}
