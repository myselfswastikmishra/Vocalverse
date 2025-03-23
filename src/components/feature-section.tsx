
import { Bot, BookText, Upload, Globe, Bitcoin } from "lucide-react";

const features = [
  {
    icon: <BookText className="h-10 w-10 text-primary" />,
    title: "Extensive Library",
    description: "Access thousands of free eBooks and audiobooks across various genres and categories.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "AI Book Chat",
    description: "Chat with our AI about any book in our library to get insights, explanations, and context.",
  },
  {
    icon: <Upload className="h-10 w-10 text-primary" />,
    title: "Convert Your eBooks",
    description: "Upload your eBooks and convert them to high-quality audiobooks with AI-generated voices.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Multilingual Support",
    description: "Enjoy content in 20+ languages with native accent and tone preservation for authentic listening.",
  },
  {
    icon: <Bitcoin className="h-10 w-10 text-primary" />,
    title: "Crypto Donations",
    description: "Support your favorite authors and our platform with cryptocurrency donations.",
  },
];

export function FeatureSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Experience the Future of Reading
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Vocal Verse combines traditional reading with cutting-edge AI technology
            to create an immersive and interactive literary experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-background border animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
