'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiXMark } from 'react-icons/hi2';
import ChatWindow from './ChatWindow';
import ChatRobot from './ChatRobot';
import { useChat } from '../hooks/useChat';
import '../styles/chatbot.css';

export default function ChatWidget() {
  const {
    isOpen,
    messages,
    isTyping,
    welcomeText,
    inputValue,
    setInputValue,
    close,
    toggle,
    startNewChat,
    sendMessage,
  } = useChat();

  const fabRef = useRef(null);
  const unread = !isOpen && messages.length > 0 ? 1 : 0;

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
        fabRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  const handleFabClick = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'aif-chat-fab-ripple';
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    button.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 500);
    toggle();
  };

  return (
    <div className="aif-chat-root">
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        isTyping={isTyping}
        welcomeText={welcomeText}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSend={() => sendMessage()}
        onClose={close}
        onNewChat={startNewChat}
        onSuggestionSelect={(text) => sendMessage(text)}
      />

      <div className="aif-chat-fab-wrap">
        {!isOpen ? <span className="aif-chat-fab-pulse" aria-hidden="true" /> : null}

        <motion.button
          ref={fabRef}
          type="button"
          className={`aif-chat-fab ${isOpen ? 'aif-chat-fab--open' : ''}`}
          onClick={handleFabClick}
          aria-label={isOpen ? 'Close AMP AI Assistant' : 'Open AMP AI Assistant'}
          aria-expanded={isOpen}
          aria-controls="aif-chat-panel"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 340, damping: 20 }}
        >
          {unread > 0 ? (
            <span className="aif-chat-fab-badge" aria-label="Unread messages">
              {unread}
            </span>
          ) : null}

          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                className="aif-chat-fab-icon"
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.18 }}
              >
                <HiXMark size={26} />
              </motion.span>
            ) : (
              <motion.span
                key="robot"
                className="aif-chat-fab-icon aif-chat-fab-icon--robot"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.18 }}
              >
                <ChatRobot size="sm" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
