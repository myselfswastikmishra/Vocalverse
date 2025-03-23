
import { Heart, Headphones, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface BookProps {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  type: "ebook" | "audiobook";
  isFeatured?: boolean;
}

export function BookCard({ 
  id, 
  title, 
  author, 
  coverImage, 
  type,
  isFeatured
}: BookProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-300",
        "animate-fadeIn card-hover bg-card shadow-sm border",
        isFeatured && "md:col-span-2 md:row-span-2"
      )}
      style={{ 
        "--index": id, 
        animationDelay: `${parseInt(id) * 50}ms` 
      } as React.CSSProperties}
    >
      <Link 
        to={`/${type === "ebook" ? "ebook" : "audiobook"}/${id}`}
        className="block h-full w-full"
      >
        <div className="book-cover relative h-64 w-full overflow-hidden rounded-t-xl">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute top-3 right-3">
            <button 
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm transition-colors hover:bg-background/40"
              aria-label="Add to favorites"
            >
              <Heart className="h-5 w-5 text-white" />
            </button>
          </div>
          
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              {type === "ebook" ? (
                <><BookOpen className="h-3.5 w-3.5" /> eBook</>
              ) : (
                <><Headphones className="h-3.5 w-3.5" /> Audiobook</>
              )}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium leading-tight line-clamp-1 text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{author}</p>
        </div>
      </Link>
    </div>
  );
}
