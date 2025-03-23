
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Animate the transition
    document.documentElement.classList.add("theme-transition");
    
    setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      
      // Show toast notification
      toast({
        title: `${newTheme === 'dark' ? '🌙 Dark' : '☀️ Light'} Theme Activated`,
        description: `Switched to ${newTheme} mode for your reading comfort.`,
        duration: 2000,
      });
      
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
        setIsAnimating(false);
      }, 300);
    }, 50);
  };

  return (
    <button
      onClick={toggleTheme}
      disabled={isAnimating}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-muted relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className={`absolute inset-0 ${isAnimating ? 'animate-pulse-glow' : ''}`} />
      
      {theme === "light" ? (
        <Moon className={`h-5 w-5 ${isAnimating ? 'animate-spin-slow' : ''}`} />
      ) : (
        <Sun className={`h-5 w-5 ${isAnimating ? 'animate-spin-slow' : ''}`} />
      )}
    </button>
  );
}
