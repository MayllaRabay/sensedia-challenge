"use client"

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="p-8">
      <h2>Something went wrong loading users</h2>
      <p className="text-danger">{error.message}</p>

      <button onClick={reset}>Try again</button>
    </div>
  )
}
