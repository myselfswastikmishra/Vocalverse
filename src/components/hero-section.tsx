
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <Sparkles className="mr-1 h-3 w-3" />
            <span>Launching Beta Access</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fadeIn">
            Discover the Future of 
            <span className="text-gradient block -mt-1">Reading & Listening</span>
          </h1>
          
          <p className="max-w-[700px] text-muted-foreground md:text-xl animate-fadeIn" style={{ animationDelay: "100ms" }}>
            Explore our vast library of free eBooks and audiobooks. Chat with AI about your books, get summaries, and enjoy multilingual audio in native accents.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <Link to="/ebooks">
              <Button size="lg" className="gap-1">
                Browse Library
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/upload">
              <Button size="lg" variant="outline">
                Upload Your Book
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fadeIn" style={{ animationDelay: "300ms" }}>
            <div>
              <h2 className="text-3xl font-bold">5K+</h2>
              <p className="text-muted-foreground">eBooks</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">3K+</h2>
              <p className="text-muted-foreground">Audiobooks</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">20+</h2>
              <p className="text-muted-foreground">Languages</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-muted-foreground">Daily Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
