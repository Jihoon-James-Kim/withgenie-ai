'use client'

import { useEffect, useState, useRef } from 'react'
import ChatBubble from '@/components/ChatBubble'

export default function MemoryChatPage() {
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/memory/list')
      const data = await res.json()
      setMessages(data.messages || [])
    }
    load()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = {
      user_id: '123e4567-e89b-12d3-a456-426614174000',
      role: 'user',
      message: input,
      tags: ['chat'],
      emotion: [],
      data_json: {},
      context_id: '00000000-0000-0000-0000-000000000000',
    }

    await fetch('/api/memory/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userMessage),
    })

    setMessages((prev) => [...prev, userMessage])
    setInput('')

    const res = await fetch('/api/genie/reply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })
    const data = await res.json()

    const genieMessage = {
      user_id: 'genie-ai',
      role: 'assistant',
      message: data.reply,
      tags: ['reply'],
      emotion: [],
      data_json: {},
      context_id: '00000000-0000-0000-0000-000000000000',
    }

    await fetch('/api/memory/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(genieMessage),
    })

    setMessages((prev) => [...prev, genieMessage])
  }

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">🧠 지니와의 대화</h1>

      <div className="flex-1 overflow-y-scroll border rounded-lg p-4 bg-white shadow-sm">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} role={msg.role} message={msg.message} />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="mt-4 flex gap-2">
        <textarea
          className="w-full border p-2 rounded-lg resize-none"
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="지니에게 말해보세요..."
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700"
        >
          전송
        </button>
      </div>
    </div>
  )
}
