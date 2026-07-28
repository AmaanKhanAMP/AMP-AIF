'use client';

import { motion } from 'framer-motion';

function renderContent(content) {
  const text = String(content || '');
  // Preserve newlines; lightly render **bold** without a markdown library
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      className={`aif-chat-message ${isUser ? 'aif-chat-message--user' : 'aif-chat-message--assistant'}`}
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="aif-chat-bubble" role="article">
        <p className="aif-chat-bubble-text">{renderContent(message.content)}</p>
      </div>
      <time className="aif-chat-timestamp">{message.timestamp}</time>
    </motion.div>
  );
}
