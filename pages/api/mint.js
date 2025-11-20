// pages/api/mint.js
import OpenAI from "openai"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' })
  }

  const { dream } = req.body
  if (!dream || dream.trim() === '') {
    return res.status(400).json({ error: 'Dream text is required' })
  }

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini", // fast, lightweight model
      messages: [
        {
          role: "system",
          content: "You are a ritual scribe minting dreams into covenant coins.",
        },
        {
          role: "user",
          content: `Mint this dream into a coin of revelation: ${dream}`,
        },
      ],
    })

    const mintedCoin = response.choices[0].message.content
    return res.status(200).json({ result: mintedCoin })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to mint dream' })
  }
}
