
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GeminiChatbot } from "@/components/gemini-chatbot";
import { useEffect } from "react";
import { MessageCircle, Book, Search } from "lucide-react";

const BookChat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Book Discussions
              </h1>
              <p className="text-muted-foreground md:text-lg">
                Chat with our AI assistant about books, get recommendations, or discuss your favorite reads
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <div className="glass card-hover p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MessageCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold">Reading Discussions</h2>
                    </div>
                    <p>Engage in meaningful conversations about books, authors, and literary themes with our AI assistant.</p>
                  </div>
                  
                  <div className="glass card-hover p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Book className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold">Book Recommendations</h2>
                    </div>
                    <p>Get personalized book recommendations based on your interests, favorite genres, or previous reads.</p>
                  </div>
                  
                  <div className="glass card-hover p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Search className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold">Reading Help</h2>
                    </div>
                    <p>Ask questions about difficult concepts, get summaries, or learn more about literary contexts.</p>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-xl shadow-sm border animate-fadeIn relative min-h-[500px]">
                  <h3 className="text-lg font-medium mb-2">Start a Discussion</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI assistant is ready to talk about books and reading. Click the chat button in the corner to start a conversation.
                  </p>
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
      <GeminiChatbot />
    </div>
  );
};

export default BookChat;
