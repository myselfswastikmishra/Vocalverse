
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GeminiChatbot } from "@/components/gemini-chatbot";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Book, Search, Bot, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookChat = () => {
  const [hasApiKey, setHasApiKey] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if API key exists
    const apiKey = localStorage.getItem("gemini-api-key");
    setHasApiKey(!!apiKey && apiKey.length > 0);
    
    // Listen for changes to localStorage
    const handleStorageChange = () => {
      const key = localStorage.getItem("gemini-api-key");
      setHasApiKey(!!key && key.length > 0);
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-fadeIn">
                Book Discussions
              </h1>
              <p className="text-muted-foreground md:text-lg animate-fadeIn" style={{ animationDelay: "100ms" }}>
                Chat with our AI assistant about books, get recommendations, or discuss your favorite reads
              </p>
              
              {!hasApiKey && (
                <div className="mt-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
                  <Link to="/settings">
                    <Button variant="outline" className="gap-2">
                      <Settings className="h-4 w-4" />
                      Configure Gemini API Key
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <div className="glass card-hover p-6 rounded-xl animate-fadeIn" style={{ animationDelay: "150ms" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MessageCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold">Reading Discussions</h2>
                    </div>
                    <p>Engage in meaningful conversations about books, authors, and literary themes with our AI assistant.</p>
                  </div>
                  
                  <div className="glass card-hover p-6 rounded-xl animate-fadeIn" style={{ animationDelay: "250ms" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Book className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold">Book Recommendations</h2>
                    </div>
                    <p>Get personalized book recommendations based on your interests, favorite genres, or previous reads.</p>
                  </div>
                  
                  <div className="glass card-hover p-6 rounded-xl animate-fadeIn" style={{ animationDelay: "350ms" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Search className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold">Reading Help</h2>
                    </div>
                    <p>Ask questions about difficult concepts, get summaries, or learn more about literary contexts.</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-xl shadow-sm border animate-fadeIn relative min-h-[500px]" style={{ animationDelay: "200ms" }}>
                  <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground p-2 rounded-lg shadow-md animate-float">
                    <Bot className="h-5 w-5" />
                  </div>
                  
                  <h3 className="text-lg font-medium mb-2">Start a Discussion</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI assistant is ready to talk about books and reading. Click the chat button in the corner to start a conversation.
                  </p>
                  
                  {hasApiKey ? (
                    <div className="mt-8 space-y-4">
                      <div className="bg-muted p-3 rounded-lg text-sm max-w-[80%]">
                        Hello! I'm your Vocal Verse assistant powered by Gemini. How can I help with your reading journey today?
                      </div>
                      
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg text-sm max-w-[80%] ml-auto">
                        Can you recommend some science fiction books?
                      </div>
                      
                      <div className="bg-muted p-3 rounded-lg text-sm max-w-[80%]">
                        I'd be happy to recommend some science fiction books! Are you looking for classic sci-fi or more contemporary works?
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8 flex flex-col items-center">
                      <div className="text-amber-500 mb-3">
                        <Settings className="h-12 w-12 animate-spin-slow" />
                      </div>
                      <p className="text-center text-muted-foreground">
                        To unlock the full potential of our book discussion assistant, please configure your Gemini API key.
                      </p>
                      <Link to="/settings" className="mt-4">
                        <Button className="gap-2">
                          <Settings className="h-4 w-4" />
                          Configure API Key
                        </Button>
                      </Link>
                    </div>
                  )}
                  
                  <div className="absolute bottom-6 right-6">
                    <div className="rounded-full bg-primary/10 p-3 animate-pulse">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookChat;
