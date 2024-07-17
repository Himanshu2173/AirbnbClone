
'use client';

import { useState, useEffect } from 'react';

const ChatbotButton = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://mediafiles.botpress.cloud/76ba6086-6e91-4248-bf5e-da032c8be064/webchat/config.js";
    script2.defer = true;
    document.body.appendChild(script2);
   
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
    if (window.botpressWebChat) {
      if (!isChatbotOpen) {
        window.botpressWebChat.sendEvent({ type: 'show' });
      } else {
        window.botpressWebChat.sendEvent({ type: 'hide' });
      }
    }
  };

  return (
    <button
      onClick={toggleChatbot}
      className="fixed right-4 bottom-4 bg-black text-white py-2 px-4 rounded-full border-2 border-black hover:bg-gray-700 transition duration-300 ease-in-out z-50"
    >
      {isChatbotOpen ? 'Close AI Assistant' : 'Ask AI Assistant'}
    </button>
  );
};

export default ChatbotButton;
