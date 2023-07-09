"use client"

export default function GlobalError({ _error }: { _error: Error; _reset: () => void }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-6xl font-bold">500</div>
      <p className="text-2xl font-bold">Error</p>
      <p className="text-xl">Sorry, something went wrong.</p>
    </div>
  )
}
