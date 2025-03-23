
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BookCard, BookProps } from "./book-card";
import { Button } from "@/components/ui/button";

interface BookSectionProps {
  title: string;
  description?: string;
  books: BookProps[];
  linkTo: string;
  showFeatured?: boolean;
}

export function BookSection({ 
  title, 
  description, 
  books, 
  linkTo,
  showFeatured = false
}: BookSectionProps) {
  if (!books.length) return null;
  
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
          <Link to={linkTo}>
            <Button variant="ghost" className="group">
              View all
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        {showFeatured ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <BookCard
                key={book.id}
                {...book}
                isFeatured={index === 0}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {books.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
