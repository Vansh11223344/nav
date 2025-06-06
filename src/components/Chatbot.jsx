import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Mock bot response after delay
    setTimeout(() => {
      const botResponse = { sender: 'bot', text: `You said: "${userMessage.text}"` };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">NAVYUG Chatbot</header>
      <div className="chat-window" role="log" aria-live="polite">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
            aria-label={`${msg.sender === 'user' ? 'You' : 'Bot'}: ${msg.text}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="chat-input-area">
        <textarea
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          aria-label="Chat input"
          rows={2}
        />
        <button className="send-button" onClick={handleSend} aria-label="Send message">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
