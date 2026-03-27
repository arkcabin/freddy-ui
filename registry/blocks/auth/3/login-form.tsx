"use client";

import { EyeIcon } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "@/components/plus";
import type React from "react";

const GoogleIcon = (props: React.ComponentProps<"svg">) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <title>Google Icon</title>
    <g>
      <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
    </g>
  </svg>
);

export function LoginForm() {
  return (
    <div className="relative w-full max-w-md bg-background p-8 rounded-2xl border shadow-lg overflow-hidden group">
      <Plus className="-top-px -left-px" />
      <Plus className="-top-px -right-px rotate-90" />
      <Plus className="-bottom-px -left-px -rotate-90" />
      <Plus className="-bottom-px -right-px rotate-180" />

      <div className="flex flex-col items-center gap-4 mb-8">
        <LogoIcon className="size-8" />
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">Sign In to Freddy</h2>
          <p className="text-sm text-muted-foreground">Welcome back! Sign in to your account</p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Button 
          variant="outline" 
          className="w-full h-11 transition-all hover:bg-muted font-medium" 
          type="button"
        >
          <GoogleIcon className="size-4 mr-2" />
          Continue with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-muted-foreground/20" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-wider">
            <span className="bg-background px-2 text-muted-foreground">OR CONTINUE WITH</span>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2 text-start">
            <Label htmlFor="email">Email or Username</Label>
            <Input 
              id="email" 
              type="text" 
              placeholder="Enter your email or username" 
              className="h-10" 
            />
          </div>
          <div className="grid gap-2 text-start">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-xs text-primary/80 hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                className="h-10 pr-10" 
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors" 
                title="Toggle password visibility"
              >
                <EyeIcon className="size-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-4 rounded border border-muted-foreground/30 flex items-center justify-center bg-card">
              <div className="size-1.5 rounded-sm bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            <span className="text-xs text-muted-foreground cursor-default">Remember me</span>
          </div>
        </div>

        <Button 
          className="w-full h-11 font-semibold transition-all active:scale-[0.98] shadow-sm" 
          type="submit"
        >
          Continue
        </Button>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Don&apos;t have an account? <a href="#" className="text-primary hover:underline font-medium">Sign up</a>
        </p>
      </form>
    </div>
  );
}
