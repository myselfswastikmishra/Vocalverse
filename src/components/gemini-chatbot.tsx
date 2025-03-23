
import React, { useState, useRef, useEffect } from "react";
import { Bot, MessageCircle, Send, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Sheet,
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

// More dynamic responses for better demonstration
const dummyResponses = [
  "The Great Gatsby explores themes of wealth, class, love, and the American Dream in the 1920s. F. Scott Fitzgerald crafted a masterpiece that critiques the hollowness of the jazz age and the corruption of the American dream through the enigmatic character of Jay Gatsby.",
  "If you're interested in sci-fi books with philosophical themes, I'd recommend 'Dune' by Frank Herbert or 'Foundation' by Isaac Asimov. Both explore complex societal structures and human potential. You might also enjoy 'Hyperion' by Dan Simmons or 'The Left Hand of Darkness' by Ursula K. Le Guin.",
  "For reading more effectively, try setting aside dedicated time each day and minimizing distractions. The pomodoro technique can be helpful: read intensely for 25 minutes, then take a 5-minute break. Also, consider reading with a pencil to mark important passages or questions.",
  "Yes, audiobooks can be just as beneficial as reading text. They help with comprehension and are great for multitasking. Research shows that the brain processes audiobooks similarly to physical reading. They're particularly helpful for understanding dialect, pronunciation, and the rhythm of language.",
  "A good starting place for classic literature would be 'Pride and Prejudice' by Jane Austen or 'To Kill a Mockingbird' by Harper Lee. Both have accessible language and themes that remain relevant today. I'd also suggest 'The Catcher in the Rye' by J.D. Salinger for its engaging first-person narrative.",
  "The advantages of ebooks include portability, adjustable text size, and instant access to new books. Many e-readers also include built-in dictionaries, highlighting features, and note-taking capabilities that enhance the reading experience. They're also environmentally friendly compared to physical books.",
];

export function GeminiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your Vocal Verse assistant. How can I help you with books, reading, or audiobooks today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [apiKeyAvailable, setApiKeyAvailable] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check if Gemini API key is available
  useEffect(() => {
    const checkApiKey = () => {
      const apiKey = localStorage.getItem("gemini-api-key");
      setApiKeyAvailable(!!apiKey && apiKey.length > 0);
    };
    
    // Check on component mount
    checkApiKey();
    
    // Set up event listener for localStorage changes
    window.addEventListener("storage", checkApiKey);
    
    return () => {
      window.removeEventListener("storage", checkApiKey);
    };
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate AI thinking
    setIsTyping(true);
    
    // Check if API key is available
    const apiKey = localStorage.getItem("gemini-api-key");
    
    if (apiKey) {
      try {
        // In a real implementation, this would call the Gemini API
        // For this demo, we'll simulate an API call with a timeout
        setTimeout(() => {
          // Get a more detailed response
          const randomIndex = Math.floor(Math.random() * dummyResponses.length);
          const response = dummyResponses[randomIndex];
          
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: response,
            isUser: false,
            timestamp: new Date(),
          };
          
          setMessages((prev) => [...prev, botMessage]);
          setIsTyping(false);
        }, 1500);
        
        // In a real implementation, we would make an API call like this:
        /*
        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: inputValue }
                ]
              }
            ]
          })
        });
        
        const data = await response.json();
        // Process the response...
        */
        
      } catch (error) {
        console.error("Error calling Gemini API:", error);
        setIsTyping(false);
        
        // Add error message
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Sorry, I encountered an error. Please try again later.",
          isUser: false,
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, errorMessage]);
      }
    } else {
      // No API key, use simpler responses
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "For more detailed and accurate responses, please add your Gemini API key in the settings.",
          isUser: false,
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg hover:animate-pulse"
            size="icon"
          >
            <Bot className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-[400px] p-0 flex flex-col h-[90vh]">
          <SheetHeader className="border-b p-4">
            <SheetTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                Vocal Verse Assistant
              </div>
              <Link to="/settings">
                <Button variant="ghost" size="icon" title="Configure API Key">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex flex-col max-w-[80%] rounded-lg p-3 animate-fadeIn",
                  message.isUser
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "mr-auto bg-muted"
                )}
              >
                <div>{message.content}</div>
                <div 
                  className={cn(
                    "text-xs mt-1",
                    message.isUser ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex max-w-[80%] mr-auto bg-muted rounded-lg p-3 animate-fadeIn">
                <div className="flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-foreground/70 rounded-full animate-bounce [animation-delay:0ms]"></div>
                  <div className="w-2 h-2 bg-foreground/70 rounded-full animate-bounce [animation-delay:150ms]"></div>
                  <div className="w-2 h-2 bg-foreground/70 rounded-full animate-bounce [animation-delay:300ms]"></div>
                </div>
              </div>
            )}
            
            {!apiKeyAvailable && messages.length <= 2 && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-sm animate-fadeIn">
                <p className="font-medium text-amber-600 dark:text-amber-400">API Key Not Found</p>
                <p className="mt-1 text-muted-foreground">
                  Add your Gemini API key in settings for enhanced responses.
                </p>
                <Link to="/settings" className="text-primary hover:underline mt-2 inline-block">
                  Configure API Key
                </Link>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2 items-end"
            >
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about books, reading tips, or recommendations..."
                className="resize-none min-h-[80px]"
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={!inputValue.trim() || isTyping}
                className="transition-all hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
