
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AuthForm } from "@/components/auth-form";
import { useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center py-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="w-full max-w-md px-4 z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Create an account</h1>
            <p className="text-muted-foreground">
              Join our community of readers and listeners
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm border animate-fadeIn">
            <AuthForm type="signup" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
