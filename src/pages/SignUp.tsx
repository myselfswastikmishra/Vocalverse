
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
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <AuthForm type="signup" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
