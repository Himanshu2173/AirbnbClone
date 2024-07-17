// botpress.d.ts

interface BotpressWebChat {
    configure: (config: any) => void;
    sendEvent: (event: { type: string }) => void;
    onEvent: (handler: (event: any) => void, types: string[]) => void;
  }
  
  interface Window {
    botpressWebChat?: BotpressWebChat;
  }