
import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Bot, Check, Key, RotateCw } from "lucide-react";

const BookSettings = () => {
  const [geminiKey, setGeminiKey] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    // Load saved API key from localStorage
    const savedKey = localStorage.getItem("gemini-api-key") || "";
    setGeminiKey(savedKey);
  }, []);
  
  const handleSaveApiKey = () => {
    setIsSaving(true);
    
    setTimeout(() => {
      // Save API key to localStorage
      localStorage.setItem("gemini-api-key", geminiKey);
      
      // Show success message
      toast({
        title: "API Key Saved",
        description: "Your Gemini API key has been saved successfully.",
        duration: 3000,
      });
      
      setIsSaving(false);
    }, 800);
  };
  
  const handleClearApiKey = () => {
    setGeminiKey("");
    localStorage.removeItem("gemini-api-key");
    toast({
      title: "API Key Cleared",
      description: "Your Gemini API key has been removed.",
      duration: 3000,
    });
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-5xl animate-fadeIn">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Book Assistant Settings
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Configure your Gemini API key to unlock the full potential of our book discussion assistant
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Card className="glass card-hover animate-fadeIn" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-primary" />
                    Gemini API Settings
                  </CardTitle>
                  <CardDescription>
                    Enter your Gemini API key to enable advanced book discussions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">Gemini API Key</Label>
                    <div className="flex gap-2">
                      <Input
                        id="api-key"
                        type="password"
                        value={geminiKey}
                        onChange={(e) => setGeminiKey(e.target.value)}
                        placeholder="Enter your Gemini API key..."
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleClearApiKey}
                        title="Clear API Key"
                      >
                        <RotateCw className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your API key is stored locally and never shared.
                    </p>
                  </div>
                  
                  <Button
                    onClick={handleSaveApiKey}
                    disabled={!geminiKey || isSaving}
                    className="w-full"
                  >
                    {isSaving ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Saving...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        Save API Key
                      </span>
                    )}
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass card-hover animate-fadeIn" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    About Gemini AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Gemini is Google's most advanced AI model that enhances your book discussions with:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>Deep insights into literary themes and analysis</li>
                    <li>Personalized book recommendations</li>
                    <li>Contextual understanding of book content</li>
                    <li>Multilingual support for global literature</li>
                  </ul>
                  <div className="mt-4">
                    <a 
                      href="https://ai.google.dev/docs/gemini_api_overview" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm inline-flex items-center gap-1"
                    >
                      Get your Gemini API key
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"/>
                        <path d="M7 7h10v10"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="glass card-hover p-6 rounded-xl animate-fadeIn relative min-h-[480px]" style={{ animationDelay: "300ms" }}>
              <h3 className="text-lg font-medium mb-2">Gemini-Powered Book Assistant</h3>
              <p className="text-muted-foreground mb-6">
                After setting up your API key, our AI assistant will provide richer, more detailed responses about books, authors, and literary concepts. The assistant can:
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-card p-3 rounded-lg text-sm">
                    With Gemini integration, I can provide in-depth analysis of literary themes, character development, and historical context. Try asking about your favorite book!
                  </div>
                </div>
                
                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="bg-primary p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4"/>
                      <path d="M12 8h.01"/>
                    </svg>
                  </div>
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg text-sm">
                    Can you analyze the themes in "To Kill a Mockingbird"?
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-card p-3 rounded-lg text-sm animate-pulse">
                    Once your API key is saved, I'll provide detailed analysis of Harper Lee's classic novel...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookSettings;
