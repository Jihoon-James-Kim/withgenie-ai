// components/ChatBubble.tsx
import Image from 'next/image'

export default function ChatBubble({
  role,
  message,
}: {
  role: 'user' | 'genie'
  message: string
}) {
  const isUser = role === 'user'
  const avatar = isUser ? '/james.png' : '/genie.png'
  const name = isUser ? '제임스' : '지니'

  return (
    <div className={`flex items-end gap-3 my-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <Image src={avatar} alt={name} width={40} height={40} className="rounded-full" />
      )}
      <div
        className={`px-4 py-2 max-w-[70%] rounded-2xl text-sm shadow ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-purple-100 text-gray-800 rounded-bl-none'
        }`}
      >
        {message}
      </div>
      {isUser && (
        <Image src={avatar} alt={name} width={40} height={40} className="rounded-full" />
      )}
    </div>
  )
}
