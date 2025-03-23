
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Book } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function UploadBook() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please select an eBook file to upload",
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setFile(null);
      toast({
        title: "Upload successful!",
        description: "Your eBook is now being processed",
      });
    }, 2000);
  };

  return (
    <div className="w-full max-w-md p-6 bg-card border rounded-xl shadow-sm">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="p-3 rounded-full bg-primary/10">
            <Book className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-medium">Upload Your eBook</h3>
          <p className="text-muted-foreground text-sm">
            Upload your eBook file to convert it to an audiobook with AI-generated narration
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="book-file">Choose eBook File</Label>
            <div className="border-2 border-dashed rounded-lg p-6 border-muted-foreground/25 hover:border-primary/50 transition-colors">
              <div className="flex flex-col items-center justify-center gap-2">
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drag & drop your file here or click to browse
                </p>
                <Input
                  id="book-file"
                  type="file"
                  className="hidden"
                  accept=".pdf,.epub,.mobi,.txt"
                  onChange={handleFileChange}
                />
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => document.getElementById("book-file")?.click()}
                >
                  Select File
                </Button>
                {file && (
                  <p className="text-sm font-medium truncate max-w-full mt-2">
                    {file.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          <Button 
            className="w-full" 
            onClick={handleUpload}
            disabled={!file || uploading}
          >
            {uploading ? "Uploading..." : "Upload and Convert"}
          </Button>
        </div>
      </div>
    </div>
  );
}
