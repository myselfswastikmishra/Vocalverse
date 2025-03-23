
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Book, 
  Headphones, 
  Home, 
  Library, 
  Menu, 
  Search, 
  Upload, 
  User, 
  X 
} from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavLink = ({ 
  to, 
  children, 
  icon: Icon, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  icon: React.ElementType; 
  onClick?: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
        isActive 
          ? "bg-primary text-primary-foreground" 
          : "hover:bg-secondary"
      )}
    >
      <Icon size={18} />
      <span>{children}</span>
    </Link>
  );
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token") !== null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Headphones className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold tracking-tight">
              VocalVerse
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" icon={Home}>Home</NavLink>
          <NavLink to="/ebooks" icon={Book}>eBooks</NavLink>
          <NavLink to="/audiobooks" icon={Headphones}>Audiobooks</NavLink>
          <NavLink to="/library" icon={Library}>My Library</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative rounded-full bg-muted flex items-center w-auto max-w-sm sm:w-64 md:w-80 lg:w-96 overflow-hidden hidden md:flex">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search books, authors..."
              className="h-10 w-full border-none bg-transparent pl-10 pr-4 text-sm focus:outline-none focus:ring-0"
            />
          </div>
          
          <ThemeSwitcher />
          
          {isAuthenticated ? (
            <Link to="/profile" className="relative h-8 w-8 rounded-full overflow-hidden border">
              <span className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
                <User size={16} />
              </span>
            </Link>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 z-50 w-3/4 bg-background shadow-lg animate-in slide-in-from-right">
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Headphones className="h-6 w-6 text-primary" />
                <span className="text-xl font-semibold tracking-tight">
                  VocalVerse
                </span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X />
              </Button>
            </div>
            <div className="p-4 space-y-2">
              <NavLink to="/" icon={Home} onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink to="/ebooks" icon={Book} onClick={() => setIsOpen(false)}>eBooks</NavLink>
              <NavLink to="/audiobooks" icon={Headphones} onClick={() => setIsOpen(false)}>Audiobooks</NavLink>
              <NavLink to="/library" icon={Library} onClick={() => setIsOpen(false)}>My Library</NavLink>
              <NavLink to="/upload" icon={Upload} onClick={() => setIsOpen(false)}>Upload</NavLink>
            </div>
            <div className="border-t p-4">
              {isAuthenticated ? (
                <Link 
                  to="/profile" 
                  className="flex items-center gap-2 px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <User size={16} />
                  </div>
                  <span>My Profile</span>
                </Link>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/signin" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
