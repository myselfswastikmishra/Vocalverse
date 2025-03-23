
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignUpValues = z.infer<typeof signUpSchema>;
type SignInValues = z.infer<typeof signInSchema>;

interface AuthFormProps {
  type: "signin" | "signup";
}

export function AuthForm({ type }: AuthFormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const schema = type === "signup" ? signUpSchema : signInSchema;
  const form = useForm<SignUpValues | SignInValues>({
    resolver: zodResolver(schema),
    defaultValues: type === "signup" 
      ? { name: "", email: "", password: "" } 
      : { email: "", password: "" },
  });

  async function onSubmit(values: SignUpValues | SignInValues) {
    setIsLoading(true);
    
    try {
      // In a real app, this would be a call to an API
      console.log("Form values:", values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store token (in a real app, this would come from the API)
      localStorage.setItem("token", "sample-jwt-token");
      
      // Show success message
      toast.success(type === "signup" 
        ? "Account created successfully" 
        : "Signed in successfully"
      );
      
      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Authentication error:", error);
      toast.error("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-6 p-6 rounded-xl border bg-card animate-fadeIn">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">
          {type === "signin" ? "Sign In" : "Create an Account"}
        </h1>
        <p className="text-muted-foreground">
          {type === "signin" 
            ? "Enter your credentials to access your account" 
            : "Enter your information to create an account"
          }
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {type === "signup" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {type === "signin" && (
            <div className="text-right text-sm">
              <Link 
                to="/forgot-password" 
                className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          )}
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                <span>{type === "signin" ? "Signing In" : "Creating Account"}</span>
              </div>
            ) : (
              <span>{type === "signin" ? "Sign In" : "Create Account"}</span>
            )}
          </Button>
        </form>
      </Form>
      
      <div className="text-center text-sm">
        {type === "signin" ? (
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary underline-offset-4 hover:underline">
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link to="/signin" className="text-primary underline-offset-4 hover:underline">
              Sign In
            </Link>
          </p>
        )}
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full" type="button">
          Google
        </Button>
        <Button variant="outline" className="w-full" type="button">
          Apple
        </Button>
      </div>
    </div>
  );
}
