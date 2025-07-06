import React, { useState, useRef, useEffect } from 'react';
import { Zap, Send, MessageCircle } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Chatbot.css';

const FAQ = [
  {
    keywords: ['service', 'diagnostic', 'repair', 'maintenance', 'fix'],
    answer: "🔧 We offer EV diagnostics, battery health checks, software updates, and general repairs. Would you like to book a service or know pricing details?"
  },
  {
    keywords: ['contact', 'support', 'phone', 'email', 'reach'],
    answer: "📞 Reach us at +91 98355 94986 or navyuginnovations@gmail.com. How can we assist you today?"
  },
  {
    keywords: ['charging', 'station', 'setup', 'install', 'charger'],
    answer: "⚡ We provide smart charging station setup and maintenance for homes and businesses. Need details for your location or want to schedule a setup?"
  },
  {
    keywords: ['training', 'skill', 'course', 'learn', 'education'],
    answer: "🎓 Our training programs empower rural EV technicians with hands-on skills. Interested in joining or partnering with us?"
  },
  {
    keywords: ['price', 'cost', 'fee', 'charge', 'rate'],
    answer: "💰 Diagnostics start at ₹1,000, with detailed pricing for other services. Type 'services' or 'pricing' for a full list."
  },
  {
    keywords: ['about', 'company', 'navyug', 'info', 'information'],
    answer: "🌱 Navyug Innovations is pioneering India's rural EV ecosystem with diagnostics, charging solutions, and technician training."
  },
  {
    keywords: ['location', 'where', 'address', 'based'],
    answer: "📍 We're based in Ranchi, Jharkhand. Want directions or to schedule a visit?"
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    answer: "👋 Hi! How can I assist you with your electric vehicle needs today?"
  },
  {
    keywords: ['thanks', 'thank you', 'thankyou', 'thx'],
    answer: "🙏 You're welcome! Any more questions about EVs or our services?"
  },
  {
    keywords: ['job', 'career', 'vacancy', 'recruitment', 'hiring'],
    answer: "💼 We frequently hire for technical, field, and managerial roles. Want to apply or see open positions?"
  },
  {
    keywords: ['partner', 'collaborate', 'join hands', 'tie-up'],
    answer: "🤝 We're open to partnerships for charging networks, training, or tech. Share your proposal!"
  },
  {
    keywords: ['payment', 'pay', 'upi', 'bank', 'account'],
    answer: "💳 We accept UPI, bank transfers, and cash. Need our payment details or want to pay now?"
  },
  {
    keywords: ['schedule', 'appointment', 'book', 'booking'],
    answer: "📅 Share your preferred time and service, and we'll book your appointment!"
  },
  {
    keywords: ['battery', 'range', 'capacity', 'charge level'],
    answer: "🔋 We offer battery health checks, replacements, and range optimization tips. Want to schedule a check-up?"
  },
  {
    keywords: ['emergency', 'help', 'urgent', 'assist', 'breakdown'],
    answer: "🚨 For emergencies, call our 24x7 helpline at +91 98355 94986. We're here to help!"
  },
  {
    keywords: ['feedback', 'complaint', 'suggestion', 'review'],
    answer: "📝 Your feedback matters! Share your thoughts, suggestions, or concerns with us."
  },
  {
    keywords: ['solar', 'renewable', 'green energy', 'sustainability'],
    answer: "🌞 We integrate solar-powered EV charging solutions for eco-friendly mobility. Want to learn more?"
  },
  {
    keywords: ['franchise', 'open center', 'distribution', 'dealership'],
    answer: "🏢 Interested in opening a Navyug service center? We offer franchise opportunities in rural and urban areas."
  },
  {
    keywords: ['event', 'webinar', 'session', 'conference', 'workshop'],
    answer: "📢 Follow our social media for updates on EV events, webinars, and training workshops!"
  },
  {
    keywords: ['language', 'hindi', 'english', 'regional', 'translate'],
    answer: "🗣️ We support Hindi, English, and regional languages. How would you like to communicate?"
  },
  {
    keywords: ['warranty', 'guarantee', 'assurance', 'policy'],
    answer: "🛡️ Our services come with a warranty on parts and labor. Need details on our warranty policy?"
  },
  {
    keywords: ['insurance', 'claim', 'coverage', 'policy'],
    answer: "🛠️ We assist with insurance claims for EV repairs. Want help with the process?"
  },
  {
    keywords: ['delivery', 'home service', 'on-site', 'pickup'],
    answer: "🚗 We offer on-site diagnostics and pick-up services. Need a home visit scheduled?"
  },
  {
    keywords: ['software', 'update', 'firmware', 'upgrade'],
    answer: "💻 We provide EV software updates for optimal performance. Want to check if your vehicle needs one?"
  },
  {
    keywords: ['safety', 'standards', 'certification', 'compliance'],
    answer: "🔒 Our services meet strict safety and quality standards. Curious about our certifications?"
  },
  {
    keywords: ['membership', 'subscription', 'plan', 'loyalty'],
    answer: "🎉 Join our membership plan for discounts on services and priority bookings. Interested?"
  },
  {
    keywords: ['rural', 'village', 'outreach', 'community'],
    answer: "🌾 We focus on empowering rural India with EV solutions and training. Want to collaborate?"
  },
  {
    keywords: ['consulting', 'advice', 'expert', 'guidance'],
    answer: "🧠 Our EV experts offer consulting for fleets, businesses, and individuals. Need advice?"
  },
  {
    keywords: ['battery replacement', 'new battery', 'swap'],
    answer: "🔋 We provide battery replacement services with genuine parts. Want a quote or to book?"
  },
  {
    keywords: ['fast charging', 'quick charge', 'dc charging'],
    answer: "⚡ Our fast-charging stations reduce downtime. Want to locate one or install your own?"
  },
  {
    keywords: ['mobile app', 'app', 'application', 'software'],
    answer: "📱 Our app lets you book services, track charging, and more. Want the download link?"
  },
  {
    keywords: ['spare parts', 'components', 'accessories'],
    answer: "🛠️ We supply genuine EV spare parts and accessories. Need something specific?"
  },
  {
    keywords: ['government', 'subsidy', 'incentive', 'rebate'],
    answer: "🏛️ We can guide you on EV subsidies and incentives in India. Want to know eligibility?"
  },
  {
    keywords: ['fleet', 'business', 'commercial', 'corporate'],
    answer: "🚛 We offer fleet management solutions for EV businesses. Interested in a tailored plan?"
  },
  {
    keywords: ['workshop', 'training center', 'facility'],
    answer: "🏭 Visit our state-of-the-art training and service centers in Ranchi. Want a tour?"
  },
  {
    keywords: ['maintenance plan', 'service plan', 'package'],
    answer: "📆 Our maintenance plans ensure your EV stays in top shape. Want to explore options?"
  },
  {
    keywords: ['roadside', 'assistance', 'towing', 'breakdown'],
    answer: "🚨 Our roadside assistance is available 24x7. Call +91 98355 94986 for immediate help."
  },
  {
    keywords: ['charging network', 'network', 'infrastructure'],
    answer: "🌐 We're building a robust EV charging network across rural India. Want to join or locate a station?"
  },
  {
    keywords: ['battery life', 'longevity', 'durability'],
    answer: "🔋 We offer tips and services to extend your EV battery life. Need a health check?"
  },
  {
    keywords: ['customization', 'modify', 'upgrade', 'tuning'],
    answer: "🔧 Customize your EV with our performance and aesthetic upgrades. What’s your vision?"
  },
  {
    keywords: ['environment', 'eco-friendly', 'green', 'sustainable'],
    answer: "🌍 Our solutions promote eco-friendly mobility with minimal environmental impact. Curious?"
  },
  {
    keywords: ['demo', 'test drive', 'trial', 'experience'],
    answer: "🚗 Book a demo or test drive to experience our EV solutions. Interested?"
  },
  {
    keywords: ['refund', 'return', 'cancellation', 'policy'],
    answer: "🔄 Our refund and cancellation policies are customer-friendly. Need details?"
  },
  {
    keywords: ['hours', 'operating hours', 'timing', 'availability'],
    answer: "⏰ We're open 9 AM to 6 PM, Monday to Saturday. Need after-hours support?"
  },
  {
    keywords: ['technician', 'mechanic', 'expert', 'specialist'],
    answer: "👨‍🔧 Our certified technicians are EV specialists. Want to book one or learn about our team?"
  },
  {
    keywords: ['research', 'development', 'innovation', 'R&D'],
    answer: "🔬 We’re innovating EV tech for rural India. Curious about our R&D projects?"
  },
  {
    keywords: ['community', 'outreach', 'CSR', 'social impact'],
    answer: "🤗 Our CSR initiatives empower rural communities through EV education. Want to get involved?"
  },
  {
    keywords: ['charger types', 'type 1', 'type 2', 'ccs'],
    answer: "⚡ We support Type 1, Type 2, CCS, and other charger types. Need compatibility info?"
  },
  {
    keywords: ['discount', 'offer', 'deal', 'promotion'],
    answer: "🎁 Check our seasonal offers on services and charging setups. Want the latest deals?"
  },
  {
    keywords: ['troubleshoot', 'issue', 'problem', 'error'],
    answer: "🔍 We can troubleshoot EV issues remotely or on-site. Describe the problem!"
  },
  {
    keywords: ['vehicle types', 'models', 'brands', 'support'],
    answer: "🚘 We service all major EV brands and models. Tell us about your vehicle!"
  },
  {
    keywords: ['online booking', 'website', 'portal', 'app'],
    answer: "🌐 Book services via our website or app. Need help navigating?"
  },
  {
    keywords: ['delivery time', 'turnaround', 'service time'],
    answer: "⏳ Most services take 1-2 days. Need an exact timeline for your request?"
  },
  {
    keywords: ['mobile charging', 'portable charger', 'on-the-go'],
    answer: "⚡ Our portable chargers are perfect for on-the-go needs. Want to explore options?"
  },
  {
    keywords: ['training cost', 'course fee', 'education price'],
    answer: "💸 Our training programs are affordably priced. Want a detailed fee structure?"
  },
  {
    keywords: ['battery recycling', 'disposal', 'end-of-life'],
    answer: "♻️ We offer eco-friendly battery recycling services. Need pickup or details?"
  },
  {
    keywords: ['rental', 'lease', 'hire', 'temporary'],
    answer: "🚗 We provide EV rental and leasing options. Interested in short-term or long-term?"
  },
  {
    keywords: ['consultation', 'free consult', 'expert advice'],
    answer: "🧑‍💼 Book a free consultation with our EV experts. What’s your query?"
  },
  {
    keywords: ['safety tips', 'driving tips', 'best practices'],
    answer: "🚦 We share EV safety and driving tips for optimal performance. Want some?"
  },
  {
    keywords: ['connect', 'social media', 'follow', 'updates'],
    answer: "📱 Follow us on X, Instagram, and LinkedIn for EV updates and tips!"
  },
];

function getBotAnswer(userText) {
  const lower = userText.toLowerCase();
  for (const faq of FAQ) {
    if (faq.keywords.some(word => lower.includes(word))) {
      return faq.answer;
    }
  }
  return "🤖 I'm here to help with anything related to electric vehicles, diagnostics, charging, or training. Please ask me anything or try keywords like 'service,' 'charging,' or 'training'!";
}

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '⚡ Welcome to Navyug EV Assistant! How can I help you with your electric mobility needs today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const navigate = useNavigate(); // <-- Add this

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botText = getBotAnswer(userMessage.text);
      setMessages(prev => [...prev, { sender: 'bot', text: botText }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <Helmet>
        <title>ChatBot- To Answer Your Questions | Navyug Innovations</title>
      </Helmet>
      <header className="chatbot-header">
        <Zap className="brand-icon" />
        <span>Navyug EV Chatbot</span>
      </header>
      <div className="chat-window" role="log" aria-live="polite">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
            aria-label={`${msg.sender === 'user' ? 'You' : 'Bot'}: ${msg.text}`}
          >
            {msg.sender === 'bot' && <MessageCircle className="avatar bot-avatar" />}
            {msg.sender === 'user' && <div className="avatar user-avatar">You</div>}
            <span className="msg-text">{msg.text}</span>
          </div>
        ))}
        {isTyping && (
          <div className="chat-message bot-message typing-indicator">
            <MessageCircle className="avatar bot-avatar" />
            <span className="msg-text">Typing...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <form className="chat-input-area" onSubmit={e => { e.preventDefault(); handleSend(); }}>
        <textarea
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          aria-label="Chat input"
          rows={3}
        />
        <button className="send-button" type="submit" aria-label="Send message">
          <Send size={20} />
        </button>
      </form>
      <button
        className="btn gold"
        style={{ margin: '24px auto', display: 'block' }}
        onClick={() => navigate('/')}
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default Chatbot;