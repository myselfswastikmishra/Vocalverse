import { HeroSection } from "@/components/hero-section";
import { BookSection } from "@/components/book-section";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuredEbooks = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    coverImage: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
  {
    id: "4",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverImage: "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
  {
    id: "5",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
];

const featuredAudiobooks = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg",
    type: "audiobook" as const,
  },
  {
    id: "2",
    title: "Dune",
    author: "Frank Herbert",
    coverImage: "https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_.jpg",
    type: "audiobook" as const,
  },
  {
    id: "3",
    title: "Educated",
    author: "Tara Westover",
    coverImage: "https://m.media-amazon.com/images/I/81NwOj14S6L._AC_UF1000,1000_QL80_.jpg",
    type: "audiobook" as const,
  },
  {
    id: "4",
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImage: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    type: "audiobook" as const,
  },
  {
    id: "5",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    coverImage: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
    type: "audiobook" as const,
  },
];

const recentlyAdded = [
  {
    id: "6",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "https://m.media-amazon.com/images/I/81tCtHFtOgL._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
  {
    id: "7",
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "https://m.media-amazon.com/images/I/91vg2mVL+ML._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
  {
    id: "8",
    title: "The Four Winds",
    author: "Kristin Hannah",
    coverImage: "https://m.media-amazon.com/images/I/817HsgVUr7L._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
  {
    id: "9",
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    coverImage: "https://m.media-amazon.com/images/I/91vVfC7sfQL._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
  {
    id: "10",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    coverImage: "https://m.media-amazon.com/images/I/71cM-lF8bGL._AC_UF1000,1000_QL80_.jpg",
    type: "ebook" as const,
  },
  {
    id: "11",
    title: "A Promised Land",
    author: "Barack Obama",
    coverImage: "https://m.media-amazon.com/images/I/91+NBrXG-PL._AC_UF1000,1000_QL80_.jpg",
    type: "audiobook" as const,
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <BookSection 
          title="Featured eBooks" 
          description="Explore our handpicked selection of popular eBooks"
          books={featuredEbooks}
          linkTo="/ebooks"
          showFeatured
        />
        <FeatureSection />
        <BookSection 
          title="Featured Audiobooks" 
          description="Listen to bestselling titles narrated by professionals"
          books={featuredAudiobooks}
          linkTo="/audiobooks"
        />
        <BookSection 
          title="Recently Added" 
          description="The latest additions to our growing library"
          books={recentlyAdded}
          linkTo="/new-releases"
        />
        
        <section className="py-12 bg-accent/50">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Have Questions About Books?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our AI assistant is ready to discuss books, recommend new titles based on your interests, 
                  or help with your reading journey. Start a conversation today!
                </p>
                <Button asChild size="lg" className="gap-2">
                  <Link to="/chat">
                    <MessageCircle className="h-5 w-5" />
                    Start a Book Discussion
                  </Link>
                </Button>
              </div>
              <div className="glass p-6 rounded-xl relative min-h-[280px] min-w-[280px]">
                <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground p-2 rounded-lg shadow">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="bg-background/80 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Can you recommend books like "The Great Gatsby"?</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg max-w-[80%] ml-auto">
                    <p className="text-sm">You might enjoy "This Side of Paradise" by F. Scott Fitzgerald or "The Beautiful and Damned".</p>
                  </div>
                  <div className="mt-auto flex justify-center">
                    <div className="text-muted-foreground text-sm">
                      Ask me anything about books
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

export default Index;
