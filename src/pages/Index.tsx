
import { HeroSection } from "@/components/hero-section";
import { BookSection } from "@/components/book-section";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { useEffect } from "react";

// Sample data for featured books
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
