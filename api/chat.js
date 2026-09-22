const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.GROQ_API_KEY) {
    return response.status(500).json({ error: 'GROQ_API_KEY is not configured' })
  }

  const { messages, systemPrompt } = request.body || {}
  if (!Array.isArray(messages) || typeof systemPrompt !== 'string') {
    return response.status(400).json({ error: 'Invalid request body' })
  }

  try {
    const groqResponse = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        max_tokens: 800,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
      }),
    })

    const data = await groqResponse.json()
    if (!groqResponse.ok) {
      return response.status(groqResponse.status).json({
        error: data.error?.message || 'Groq API error',
      })
    }

    return response.status(200).json({
      content: data.choices?.[0]?.message?.content || '',
    })
  } catch {
    return response.status(502).json({ error: 'Unable to reach Groq' })
  }
}
