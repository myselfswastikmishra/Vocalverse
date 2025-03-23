
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { UploadBook } from "@/components/upload-book";
import { CryptoDonation } from "@/components/crypto-donation";
import { useEffect } from "react";

const Upload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Upload & Support
              </h1>
              <p className="text-muted-foreground md:text-lg">
                Convert your eBooks to audiobooks with AI narration and support our platform
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
              <UploadBook />
              <CryptoDonation />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;
