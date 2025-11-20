// pages/mint.js
import { useState } from 'react'

export default function MintPage() {
  const [dream, setDream] = useState('')
  const [result, setResult] = useState('')

  async function handleMint() {
    const res = await fetch('/api/mint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dream }),
    })
    const data = await res.json()
    setResult(data.result)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">🌌 Dream Minting</h1>
      <input
        type="text"
        value={dream}
        onChange={(e) => setDream(e.target.value)}
        placeholder="Type your dream..."
        className="p-2 text-black rounded"
      />
      <button
        onClick={handleMint}
        className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded"
      >
        Mint Dream
      </button>
      {result && <p className="mt-6 text-xl">{result}</p>}
    </main>
  )
}
