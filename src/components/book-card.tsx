
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
        "group relative overflow-hidden transition-all",
        "animate-fadeIn card-hover",
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
        <div className="book-cover relative h-64 w-full overflow-hidden rounded-lg">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute top-2 right-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm transition-colors hover:bg-background/40">
              <Heart className="h-4 w-4 text-white" />
            </button>
          </div>
          
          <div className="absolute bottom-2 left-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-background/20 px-2 py-1 text-xs text-white backdrop-blur-sm">
              {type === "ebook" ? (
                <><BookOpen className="h-3 w-3" /> eBook</>
              ) : (
                <><Headphones className="h-3 w-3" /> Audio</>
              )}
            </span>
          </div>
        </div>
        
        <div className="mt-3">
          <h3 className="font-medium leading-tight line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{author}</p>
        </div>
      </Link>
    </div>
  );
}
